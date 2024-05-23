import { Locator, Page } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class LoginPage{
  
    private readonly loginPageLink: Locator
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly createAccountLink: Locator
    private readonly createAccountButton: Locator
    private readonly createAccountHeaderDisplayed: Locator
    private readonly emailNotValidMessage: Locator
    private readonly enterDataHeader: Locator
    private readonly enterUserFirstnameTextBox: Locator
    private readonly enterUserLastname1TextBox: Locator
    private readonly enterUserLastname2TextBox: Locator
    private readonly daySelector: Locator
    private readonly specificDaySelector: Locator
    private readonly monthSelector: Locator
    private readonly specificmonthSelector: Locator
    private readonly yearSelector: Locator
    private readonly specificyearSelector: Locator
    private readonly radioSelectorMale: Locator
    private readonly cellVerificationHeader: Locator
    

    constructor(page : Page){
        this.loginPageLink = page.locator('//span[@class="a-header__topLink"]')
        this.usernameTextbox = page.getByRole('textbox', { name: 'Correo electrónico*' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Contraseña*' })
        this.loginButton = page.getByRole('button', { name: 'Iniciar sesión' })
        this.createAccountLink = page.getByRole('link', { name: 'Crear cuenta' })
        this.createAccountButton = page.getByRole('button', { name: 'Crear cuenta' })
        this.createAccountHeaderDisplayed = page.locator('//div[@class="m-title"]')
        this.emailNotValidMessage = page.locator('//span[@id="error-element-email"]')
        this.enterDataHeader = page.locator('//div[@class="m-title"]')
        this.enterUserFirstnameTextBox = page.getByRole('textbox', { name: 'Nombre(s)*' })
        this.enterUserLastname1TextBox = page.getByRole('textbox', { name: 'Apellido Paterno*' })
        this.enterUserLastname2TextBox = page.getByRole('textbox', { name: 'Apellido Materno' })
        this.daySelector = page.locator(' //select[@id="daySelectorLabel"]')
        this.specificDaySelector = page.locator('//option[@value="14"]')
        this.specificmonthSelector = page.locator('//option[@value="Mar"]')
        this.specificyearSelector = page.locator('//option[@value="1984"]')
        this.monthSelector = page.locator('//select[@id="monthSelectorLabel"]')
        this.yearSelector = page.locator('//select[@id="yearSelectorLabel"]')
        this.radioSelectorMale = page.getByRole('radio', { name: 'Hombre' })
        this.cellVerificationHeader = page.getByRole('heading', { name: 'Verificación de celular'})

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
    async fillEnterUserFirstNameTextBox(firstname:string){
        await this.enterUserFirstnameTextBox.fill(firstname)
    }
    
    async fillEnterUserLastName1TextBox(lastname1:string){
        await this.enterUserLastname1TextBox.fill(lastname1)
    }
    async fillEnterUserLastName2TextBox(lastname2:string){
        await this.enterUserLastname2TextBox.fill(lastname2)
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
    
    async enterDataHeaderIsVisible() {
        await this.enterDataHeader.isVisible()
    }

    async emailNotValid(){
        await this.emailNotValidMessage.isVisible()
    }

    async clickOnRadioSelectorMale(){
        await this.radioSelectorMale.click()
    }

    async filldaySelector(day:string){
        await this.daySelector.selectOption({label:day})
    }

    async fillmonthSelector(month:string){
        await this.monthSelector.selectOption({label:month})
    }
    async fillyearSelector(year:string){
        await this.yearSelector.selectOption({label:year})
    }
    async cellVerificationHeaderdisplayed(){
        await this.cellVerificationHeader.isVisible()
    }
    /*async clickspecificmonthSelector(){
        await this.specificmonthSelector.click()
    }
    async clickspecificyearSelector(){
        await this.specificyearSelector.click()
    }*/


    async loginWithCredentials(username:string, password:string){
        await this.clickOnLoginPageLink()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }
    
    async createAccount(username:string, password:string){

        await this.clickOnLoginPageLink()
        await this.clickOnCreateAccountLink()
        await this.createAccountHeader()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnCreateAccountButton()
        await this.enterDataHeaderIsVisible()
    }
    async fillData(firstname:string, lastname1:string, lastname2:string, day:string, month:string, year:string){
        
        await this.fillEnterUserFirstNameTextBox(firstname)
        await this.fillEnterUserLastName1TextBox(lastname1)
        await this.fillEnterUserLastName2TextBox(lastname2)
        await this.filldaySelector(day)
        await this.fillmonthSelector(month)
        await this.fillyearSelector(year)
        await this.clickOnRadioSelectorMale()
        await this.clickOnCreateAccountButton()
        await this.cellVerificationHeaderdisplayed()
        
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