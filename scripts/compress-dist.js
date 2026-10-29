import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const DIST_DIR = path.resolve('dist');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function compressFiles() {
  const files = getAllFiles(DIST_DIR);
  const compressibleExtensions = ['.html', '.css', '.js', '.svg', '.json', '.txt', '.xml'];

  let count = 0;
  let savedBytes = 0;

  files.forEach((filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (compressibleExtensions.includes(ext) && !filePath.endsWith('.gz') && !filePath.endsWith('.br')) {
      const content = fs.readFileSync(filePath);
      const originalSize = content.length;

      // Gzip compression (maximum compression level 9)
      const gzipped = zlib.gzipSync(content, { level: 9 });
      fs.writeFileSync(`${filePath}.gz`, gzipped);

      // Brotli compression (maximum quality 11)
      const brotlied = zlib.brotliCompressSync(content, {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11
        }
      });
      fs.writeFileSync(`${filePath}.br`, brotlied);

      count++;
      savedBytes += (originalSize - gzipped.length);
    }
  });

  console.log(`✓ Pre-compressed ${count} files with Gzip & Brotli (saved ${(savedBytes / 1024).toFixed(1)} kB)`);
}

compressFiles();
