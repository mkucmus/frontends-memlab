const memlab = require("memlab");

/**
 * 1. visit home page (ssr) 
 * 2. navigate to "Specials & Sale" navigation page (csr)
 * 3. add an item to cart (csr)
 * 4. show sidebar minicart
 * 3. navigate back to home page (csr)
 */

function url() {
  return "https://frontends-demo.vercel.app";
}
  
// action where you suspect the memory leak might be happening
async function action(page) {
  await page.click('a[href="/Specials-Sale/"]');
  const elements = await page.$x(
    'button[data-testid="add-to-cart-button"]'
  );
  const [button] = elements;
  if (button) {
    await button.click();
    await page.click('button[data-testid="cart-button"]');
  }
  await Promise.all(elements.map(e => e.dispose()));
}
  
async function back(page) {
  await page.click('a[href="/"]');
}
  
memlab.run({scenario: { action, url, back }});