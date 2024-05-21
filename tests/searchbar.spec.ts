import { test, expect } from '@playwright/test';


test('Find the article i was looking for', async ({ page }) => {
    await page.goto('https://www.liverpool.com.mx/tienda/home');
  
    // Click the get started link.
    await page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' }).isVisible();
    await page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' }).fill('Pantalla Smart TV Samsung LED de 55 pulgadas HD')
    await page.keyboard.press('Enter')
    await page.getByRole('heading', { name: 'Pantalla Smart TV Samsung LED de 55 pulgadas HD Un55cu8000fxzx con Tizen' }).isVisible();
    await page.getByRole('heading', { name: 'Pantalla Smart TV Samsung LED de 55 pulgadas HD Un55cu8000fxzx con Tizen' }).click();
    await page.getByRole('button', { name: 'Comprar ahora' }).isVisible();
    await page.getByRole('button', { name: 'Comprar ahora' }).click();
    await page.getByRole('button', { name: 'Inicia sesión' }).isVisible();
 
  });