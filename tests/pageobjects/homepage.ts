import { Locator, Page } from "@playwright/test";

export class LoginPage{
  
    private readonly loginPageLink: Locator
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly createAccountLink: Locator
    private readonly createAccountButton: Locator
    private readonly createAccountHeaderDisplayed: Locator
    private readonly emailNotValidMessage: Locator

    constructor(page : Page){
        this.loginPageLink = page.locator('//span[@class="a-header__topLink"]')
        this.usernameTextbox = page.getByRole('textbox', { name: 'Correo electrónico*' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Contraseña*' })
        this.loginButton = page.getByRole('button', { name: 'Iniciar sesión' })
        this.createAccountLink = page.getByRole('link', { name: 'Crear cuenta' })
        this.createAccountButton = page.getByRole('button', { name: 'Crear cuenta' })
        this.createAccountHeaderDisplayed = page.locator('//div[@class="m-title"]')
        this.emailNotValidMessage = page.locator('//span[@id="error-element-email"]')
    }

    async clickOnLoginPageLink(){
        await this.loginPageLink.click()
    }
    async fillUsername(username:string){
        await this.usernameTextbox.fill(username)
    }
    async fillPassword(password:string){
        await this.passwordTextbox.fill(password)
    }

    async clickOnLogin(){
        await this.loginButton.click()
    }

    async clickOnCreateAccountLink() {
        await this.createAccountLink.click();
    }

    async clickOnCreateAccountButton() {
        await this.createAccountButton.click();
    }

    async createAccountHeader() {
        await this.createAccountHeaderDisplayed.isVisible()
    }

    async emailNotValid(){
        await this.emailNotValidMessage.isVisible()
    }

    async loginWithCredentials(username:string, password:string){
        await this.clickOnLoginPageLink()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }

    async loginToCreateAccount(username:string, password:string){
        await this.clickOnLoginPageLink()
        await this.clickOnCreateAccountLink()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnCreateAccountButton()
        await this.createAccountHeader()
    }
    async loginToCreateAccountEmailNotValid(username:string, password:string){
        await this.clickOnLoginPageLink()
        await this.clickOnCreateAccountLink()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnCreateAccountButton()
        await this.emailNotValid()
    }
}