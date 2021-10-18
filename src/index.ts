#!/usr/bin/env node

import yargs from 'yargs'
import ora from 'ora'
import { Readable } from 'stream'
import { Bee, BatchId, CollectionEntry } from '@ethersphere/bee-js'
import { TextEncoder } from 'util'

const META_FILE_NAME = '.swarmgatewaymeta.json'
const DEFAULT_BEE = 'https://bee-9.gateway.ethswarm.org'
const PASTEBEE_PAGE = 'https://pastebee.bzz.link/?'
const DEFAULT_POSTAGE = '0000000000000000000000000000000000000000000000000000000000000000' as BatchId

async function read(stream: Readable) {
  const chunks = []
  for await (const chunk of stream) chunks.push(chunk)

  return Buffer.concat(chunks).toString('utf8')
}

// eslint-disable-next-line @typescript-eslint/no-extra-semi
;(async function root() {
  const argv = await yargs(process.argv.slice(2))
    .usage('Usage: <some STDOUT producing command> | $0 [options]')
    .option('bee', {
      alias: 'b',
      type: 'string',
      describe: 'Bee node URL. By default Gateway is used.',
    })
    .option('stamp', {
      alias: 'p',
      type: 'string',
      describe: 'Postage Batch Stamp ID. Required if custom Bee node is used.',
    })
    .option('hash', {
      alias: 'a',
      type: 'boolean',
      describe: 'Displays only the reference not as URL.',
    })
    .option('silence', {
      alias: 's',
      type: 'boolean',
      describe: 'Output only the uploaded reference without any UX.',
    })
    .help('h')
    .alias('h', 'help').epilog(`pastebee-cli is a simple tool for piping text to Swarm network.
    
If you want to know more about Swarm network visit https://ethswarm.org/`).argv

  const beeNode = argv.bee || process.env.BEE_URL || DEFAULT_BEE
  const beeStamp = argv.stamp || process.env.BEE_STAMP || DEFAULT_POSTAGE
  const silence = argv.silence

  if (beeNode !== DEFAULT_BEE && (!beeStamp || beeStamp === DEFAULT_POSTAGE)) {
    process.stderr.write('If you use custom Bee node, than you have to also specify your Postage Stamp Batch ID!')
    process.exit(1)
  }

  const spinner = ora('Uploading data')

  try {
    if (!silence) spinner.start()

    const data = await read(process.stdin)
    const bee = new Bee(beeNode)

    const date = new Date()
    const filename = `pastebee-cli-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}.txt`
    const metadata = {
      name: filename,
      type: 'text/plain',
      size: data.length,
    }

    const metafile: CollectionEntry<Uint8Array> = {
      path: META_FILE_NAME,
      data: new TextEncoder().encode(JSON.stringify(metadata)),
    }

    const file: CollectionEntry<Uint8Array> = {
      path: filename,
      data: new TextEncoder().encode(data),
    }

    const uploadResult = await bee.uploadCollection(beeStamp, [metafile, file], { indexDocument: filename })

    const textResult = argv.hash ? uploadResult.reference : `${PASTEBEE_PAGE}${uploadResult.reference}`

    if (silence) {
      process.stdout.write(textResult)
    } else {
      spinner.succeed(`Uploaded! ${textResult}`)
    }
  } catch (e) {
    const textResult = `There was an error during upload: ${e}`

    if (silence) {
      process.stderr.write(textResult)
    } else {
      spinner.fail(textResult)
    }

    process.exit(1)
  }
})()