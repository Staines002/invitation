import fs from 'fs';
import path from 'path';

const clientDir = path.resolve('dist/client');
const assetsDir = path.join(clientDir, 'assets');

// Find the main JS and CSS files
const files = fs.readdirSync(assetsDir);
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const mainCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wedding Invitation</title>
    ${mainCss ? `<link rel="stylesheet" href="/assets/${mainCss}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${mainJs ? `<script type="module" src="/assets/${mainJs}"></script>` : ''}
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html);
console.log('Successfully generated static index.html for Vercel deployment');
