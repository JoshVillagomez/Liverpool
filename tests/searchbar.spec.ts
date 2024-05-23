import { test, expect } from '@playwright/test';
import { ProductPage } from './pageobjects/productpage';


test('Find the article i was looking for by Type', async ({ page }) => {
    await page.goto('https://www.liverpool.com.mx/tienda/home');

    const login = new ProductPage(page)

  await login.searchForAnSpecificProduct('Pantalla Smart TV Samsung LED de 55 pulgadas HD Un55cu8000fxzx con Tizen')
  await page.keyboard.press('Enter')
  await login.buyNowButtonFunctionality()
  await page.pause()
   });

test('Find the article i was looking for by Price', async ({ page }) => {
    await page.goto('https://www.liverpool.com.mx/tienda/home');

    const productPage = new ProductPage(page)

  await productPage.searchForAnSpecificProduct('TV')
  await page.keyboard.press('Enter')
  await productPage.priceRangeFill('5000', '500')
  //await productPage.buyNowButtonFunctionality()
  await page.pause()
   });

  test('Search for a product that is not available/nonexistent', async ({ page }) =>{

  })