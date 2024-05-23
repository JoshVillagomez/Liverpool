import { Locator, Page } from "@playwright/test";

const { chromium } = require('playwright');
const twilio = require('twilio');

// Twilio credentials
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new twilio(accountSid, authToken);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the website
  await page.goto('https://example.com/signup');

  // Fill in the sign-up form
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');
  
  // Use Twilio to get a temporary phone number
  const twilioNumber = 'your_twilio_phone_number';
  
  await page.fill('input[name="phone"]', twilioNumber);
  await page.click('button[type="submit"]');
  
  // Wait for the SMS to be received
  let verificationCode;
  while (!verificationCode) {
    const messages = await client.messages.list({ to: twilioNumber, limit: 1 });
    if (messages.length > 0) {
      verificationCode = messages[0].body.trim();
    } else {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
    }
  }
  
  // Enter the verification code
  await page.fill('input[name="verification_code"]', verificationCode);
  await page.click('button[type="submit"]');
  
  // Check if the account was created successfully
  await page.waitForSelector('text=Account created successfully');
  
  console.log('Test completed successfully');
  await browser.close();
})();
/*import twilio from "twilio";

class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly smsCodeInput: Locator;
  private readonly smsCodeSubmitButton: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByRole("textbox", { name: "Correo electrónico*" });
    this.passwordInput = page.getByRole("textbox", { name: "Contraseña*" });
    this.loginButton = page.getByRole("button", { name: "Iniciar sesión" });
    this.smsCodeInput = page.getByRole("textbox", { name: "Código de autenticación*" });
    this.smsCodeSubmitButton = page.getByRole("button", { name: "Validar código" });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    // Aquí implementarías la lógica de autenticación por SMS
    await this.handleSmsAuthorization();
  }

  async handleSmsAuthorization() {
    // Aquí deberías implementar la lógica para recibir y procesar el código SMS
    const smsCode = await this.receiveSmsCode();
    await this.smsCodeInput.fill(smsCode);
    await this.smsCodeSubmitButton.click();
  }

  async receiveSmsCode(): Promise<string> {
    // Aquí deberías implementar la lógica para recibir el código SMS
    // ya sea mediante un servicio de SMS virtual o leyendo el dispositivo móvil emulado
    const twilioClient = twilio(accountSid, authToken);
    const message = await twilioClient.messages.list({ to: "+1234567890" });
    return message.data[0].body;
  }
}

// En tu archivo de prueba
const loginPage = new LoginPage(page);
await loginPage.login("myUsername", "myPassword");*/