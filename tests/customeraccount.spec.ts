import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/homepage';

test('login to liverpool using correct credentials', async ({ page }) => {
  await page.goto('https://www.liverpool.com.mx/tienda/home');

  const login = new LoginPage(page)

  await login.loginWithCredentials('eljelix99+team1@gmail.com', '59xTphCiJKZSw8i')
 // await page.pause()
});

test ('Verify the account creation form', async ({ page }) => {
  await page.goto('https://www.liverpool.com.mx/tienda/home');

  const login = new LoginPage(page)

  await login.createAccount('eljelix9988887@gmail.com', '59xTphCiJKZ')
});

test ('Create a new consumer account with valid data', async ({ page }) => {
  await page.goto('https://www.liverpool.com.mx/tienda/home');

  const login = new LoginPage(page)
  await login.createAccount('eljelix99990@gmail.com', '59xTphCiJKZ')
  await login.fillData('Josh', 'Villa', 'Test2', '14', 'Mar', '1990')
  //await page.pause()
});

test ('Create a new consumer account with invalid email format', async ({ page }) => {
  await page.goto('https://www.liverpool.com.mx/tienda/home');

  const login = new LoginPage(page)

  await login.loginToCreateAccountEmailNotValid('eljelix99+team2.gmail.com', '59xTphCiJKZ')
    
});

  