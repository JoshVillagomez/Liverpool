import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/homepage';

test('login to liverpool using credentials', async ({ page }) => {
  await page.goto('https://www.liverpool.com.mx/tienda/home');

  const login = new LoginPage(page)

  await login.loginWithCredentials('eljelix99+team1@gmail.com', '59xTphCiJKZSw8i')
  await page.pause()
  /* Click the get started link.
  await page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' }).isVisible();
  await page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' }).fill('Smart TV')
  await page.keyboard.press('Enter')
  await page.getByRole('heading', { name: 'Pantalla Smart TV Hisense LED de 50 pulgadas 4K/UHD 50A7K con Google TV' }).isVisible();
*/


  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

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

  test('Creating a customer account', async ({ page }) => {
    await page.goto('https://www.liverpool.com.mx/tienda/home');
  
    // Click the get started link.
    await page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' }).isVisible();
    await page.locator('//span[@class="a-header__topLink"]').click()
    
    await page.getByRole('button', { name: 'Inicia sesión' }).isVisible();
    await page.getByRole('link', { name: 'Crear cuenta' }).isVisible();
    await page.getByRole('link', { name: 'Crear cuenta' }).click();

    await page.keyboard.press('Enter')
    await page.getByRole('heading', { name: 'Crear cuenta' }).isVisible();
    await page.getByRole('textbox', { name: 'Correo electrónico*' }).fill('eljelix99+team1@gmail.com');
    await page.getByRole('textbox', { name: 'Contraseña*' }).fill('59xTphCiJKZSw8i');

    await page.getByRole('button', { name: 'Crear cuenta' }).isVisible();
    await page.getByRole('button', { name: 'Crear cuenta' }).click();
    //wait page.getByRole('heading', { name: 'Pantalla Smart TV Samsung LED de 55 pulgadas HD Un55cu8000fxzx con Tizen' }).click();
    
    //await page.getByRole('button', { name: 'Comprar ahora' }).click();
 
  });

  