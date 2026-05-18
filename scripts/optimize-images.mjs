import sharp from 'sharp';
import { glob } from 'node:fs/promises';
import { rename, stat } from 'node:fs/promises';

const PATTERNS = [
  'src/assets/images/**/*.{jpg,jpeg,png}',
  'src/assets/partnerlogos/**/*.{jpg,jpeg,png}',
];

async function optimize() {
  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;

  for (const pattern of PATTERNS) {
    for await (const file of glob(pattern)) {
      const before = (await stat(file)).size;
      if (before < 400 * 1024) {
        console.log(`⊘ Skipped ${file} (${(before / 1024).toFixed(0)}KB)`);
        skipped++;
        continue;
      }
      totalBefore += before;
      const tmp = `${file}.tmp`;
      const img = sharp(file).resize({ width: 1600, withoutEnlargement: true });
      if (file.endsWith('.png')) {
        await img.png({ compressionLevel: 9, effort: 10 }).toFile(tmp);
      } else {
        await img.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(tmp);
      }
      await rename(tmp, file);
      const after = (await stat(file)).size;
      totalAfter += after;
      processed++;
      const saved = ((1 - after / before) * 100).toFixed(1);
      console.log(
        `✓ ${file} (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB, ${saved}%)`
      );
    }
  }

  console.log(`\nProcessed: ${processed}, Skipped: ${skipped}`);
  console.log(
    `Total reduced: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
  );
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
