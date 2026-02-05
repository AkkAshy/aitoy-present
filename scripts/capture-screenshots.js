const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureScreenshots() {
  console.log('Запускаю браузер...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });

  const publicDir = path.join(__dirname, '..', 'public', 'screenshots');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('Открываю главную страницу...');
  await page.goto('http://localhost:3002', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(publicDir, 'dashboard.png'), type: 'png' });
  console.log('✓ dashboard.png');

  // Попробуем открыть страницу тойханы
  console.log('Открываю страницу тойханы...');
  try {
    await page.goto('http://localhost:3002/toykhana/1', { waitUntil: 'networkidle0', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(publicDir, 'toykhana-detail.png'), type: 'png' });
    console.log('✓ toykhana-detail.png');
  } catch (e) {
    console.log('Не удалось открыть детальную страницу');
  }

  await browser.close();
  console.log('\n✓ Скриншоты сохранены в public/screenshots/');
}

captureScreenshots().catch(console.error);
