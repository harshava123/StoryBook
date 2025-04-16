const fs = require('fs');
const path = require('path');

// Create the dist/storybook directory if it doesn't exist
const destDir = path.join(__dirname, 'dist', 'storybook');
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

// Copy the placeholder HTML file
const sourcePath = path.join(__dirname, 'storybook-static-placeholder', 'index.html');
const destPath = path.join(destDir, 'index.html');

try {
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('Copied placeholder Storybook file successfully.');
  } else {
    // Create a minimal HTML file if the source file doesn't exist
    const minimalHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Design System - Storybook</title>
        <style>
          body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
          h1 { color: #0369a1; }
        </style>
      </head>
      <body>
        <h1>Design System Storybook</h1>
        <p>This is a placeholder for the Storybook documentation.</p>
        <p>Components in this design system:</p>
        <ul>
          <li>Typography - headings, body text, captions</li>
          <li>Text Input - with various states and variants</li>
          <li>Toast/Notifications - for feedback to users</li>
        </ul>
      </body>
      </html>
    `;
    fs.writeFileSync(destPath, minimalHtml.trim());
    console.log('Created minimal placeholder Storybook file.');
  }
} catch (error) {
  console.error('Error copying/creating Storybook placeholder:', error);
} 