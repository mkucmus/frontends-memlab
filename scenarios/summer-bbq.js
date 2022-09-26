const memlab = require("memlab");

/**
 * 1. visit home page (ssr) 
 * 2. navigate to "Summer BBQ" navigation page (csr)
 * 3. navigate back to home page (csr)
 */

function url() {
  return "https://frontends-demo.vercel.app";
}
  
async function action(page) {
  await page.click('a[href="/Summer-BBQ/"]');
}
  
async function back(page) {
  await page.click('a[href="/"]');
}
  
memlab.run({scenario: { action, url, back }});