// Lightweight zero-dependency dev server for The Artisan Park replica
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Clean routing
    if (pathname === '/' || pathname === '') {
        pathname = '/index.html';
    } else if (pathname === '/checkout') {
        pathname = '/checkout.html';
    } else if (pathname === '/login') {
        pathname = '/login.html';
    } else if (pathname === '/admin' || pathname === '/dashboard') {
        pathname = '/admin-dashboard.html';
    } else if (pathname === '/order-success') {
        pathname = '/order-success.html';
    }

    // Resolve file path
    let filePath = path.join(ROOT_DIR, pathname);

    // Security check - prevent directory traversal
    if (!filePath.startsWith(ROOT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // Check if adding .html helps
            const htmlPath = filePath + '.html';
            if (fs.existsSync(htmlPath)) {
                filePath = htmlPath;
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style="font-family:sans-serif;text-align:center;padding:50px;"><h1>404 Not Found</h1><p>The requested page <code>${pathname}</code> does not exist.</p><p><a href="/">Return to ArtisanPark Storefront</a></p></body></html>`);
                return;
            }
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        });

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`\n🌿 The Artisan Park replica running at:`);
    console.log(`   ➜ Local:   http://localhost:${PORT}`);
    console.log(`   ➜ Shop:    http://localhost:${PORT}/index.html`);
    console.log(`   ➜ Checkout:http://localhost:${PORT}/checkout`);
    console.log(`   ➜ Login:   http://localhost:${PORT}/login`);
    console.log(`   ➜ Admin:   http://localhost:${PORT}/admin\n`);
});
