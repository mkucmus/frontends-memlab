# memlab

Basic E2E tests to find memory leaks using [memlab](https://facebookincubator.github.io/memlab/) tool.

## Install

```bash
pnpm i
```

If postinstall script does not work, please go to `node_modules/memlab` and run `pnpm i` manually.

## Run a scenario

```bash
pnpm test:cart # to run scenario located in ./scenarios/cart.js
pnpm test:cms  # to run scenario located in ./scenarios/summer-bbq.js
```

## How it works

Memlab runs every scenario for 3 times. Before the each attempt, the heap size is measured, then the GC is executed.
If the heap size increases regardless the work of GC, that means the memory leak is probably here to stay :)


```js
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
```
