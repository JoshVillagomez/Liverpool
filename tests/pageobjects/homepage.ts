import { Locator, Page } from "@playwright/test";

export class LoginPage{
  
    private readonly loginPageLink: Locator
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator

    constructor(page : Page){
        this.loginPageLink = page.locator('//span[@class="a-header__topLink"]')
        this.usernameTextbox = page.getByRole('textbox', { name: 'Correo electrónico*' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Contraseña*' })
        this.loginButton = page.getByRole('button', { name: 'Iniciar sesión' })
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

    async loginWithCredentials(username:string, password:string){
        await this.clickOnLoginPageLink()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }
 
}