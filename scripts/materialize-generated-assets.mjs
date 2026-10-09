import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const payloadRoot = path.resolve('scripts/asset-payloads');
const outputRoot = path.resolve('public/brand/generated');
await mkdir(outputRoot, { recursive: true });

const assets = [
  'luxury-atelier-lounge',
  'commercial-banquette',
  'tufted-reading-chair',
  'marine-sunset',
  'automotive-copper-stitch',
];

for (const asset of assets) {
  const dir = path.join(payloadRoot, asset);
  const parts = (await readdir(dir))
    .filter((name) => name.endsWith('.b64'))
    .sort();

  if (!parts.length) throw new Error(`No payload chunks found for ${asset}`);

  const encoded = (await Promise.all(parts.map((part) => readFile(path.join(dir, part), 'utf8')))).join('');
  const buffer = Buffer.from(encoded, 'base64');

  if (buffer.subarray(0, 4).toString('ascii') !== 'RIFF' || buffer.subarray(8, 12).toString('ascii') !== 'WEBP') {
    throw new Error(`Decoded asset is not a valid WebP container: ${asset}`);
  }

  await writeFile(path.join(outputRoot, `${asset}.webp`), buffer);
  console.log(`materialized ${asset}.webp (${buffer.length} bytes)`);
}
