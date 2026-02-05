const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  console.log('Запускаю браузер...');
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  // Устанавливаем размер viewport как у презентации
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  console.log('Открываю сайт...');
  await page.goto('http://localhost:3001', {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  // Ждём загрузки
  await page.waitForSelector('.slide');

  const totalSlides = 6;
  const slides = [];

  console.log('Делаю скриншоты слайдов...');

  for (let i = 0; i < totalSlides; i++) {
    console.log(`Слайд ${i + 1}/${totalSlides}...`);

    // Ждём анимацию
    await new Promise(resolve => setTimeout(resolve, 800));

    // Скриншот текущего слайда
    const screenshot = await page.screenshot({
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
      },
    });

    slides.push(screenshot);

    // Переходим к следующему слайду
    if (i < totalSlides - 1) {
      await page.keyboard.press('ArrowRight');
      await new Promise(resolve => setTimeout(resolve, 700));
    }
  }

  console.log('Генерирую PDF...');

  // Создаём новую страницу для PDF
  const pdfPage = await browser.newPage();

  // Генерируем HTML с изображениями
  const imagesHtml = slides.map((screenshot, index) => {
    const base64 = screenshot.toString('base64');
    return `
      <div class="slide-page" style="page-break-after: always; page-break-inside: avoid;">
        <img src="data:image/png;base64,${base64}" style="width: 100%; height: 100%; object-fit: contain;" />
      </div>
    `;
  }).join('');

  await pdfPage.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: #0a0a1a; }
          .slide-page {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0a0a1a;
          }
          .slide-page:last-child { page-break-after: auto; }
          @page { size: 1920px 1080px; margin: 0; }
        </style>
      </head>
      <body>${imagesHtml}</body>
    </html>
  `, { waitUntil: 'networkidle0' });

  await pdfPage.pdf({
    path: path.join(__dirname, '..', 'TOY_AI_Presentation.pdf'),
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();

  console.log('✓ PDF создан: TOY_AI_Presentation.pdf');
}

generatePDF().catch(console.error);
