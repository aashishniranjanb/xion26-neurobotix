const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Listen for console events and log them to the terminal
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));

    // Listen for page errors (unhandled exceptions in the browser)
    page.on('pageerror', err => {
        console.error('BROWSER ERROR:', err.message);
    });

    console.log("Navigating to http://localhost:3002/events...");
    await page.goto('http://localhost:3002/events', { waitUntil: 'networkidle2' });

    console.log("Finished waiting for network idle.");
    await browser.close();
})();
