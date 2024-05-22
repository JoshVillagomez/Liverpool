import { Locator, Page } from "@playwright/test";

export class ProductPage{
    private readonly searchBar: Locator
    private readonly buyNowButton: Locator
    private readonly productTVHeading: Locator


constructor(page: Page){
    this.searchBar = page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' })
    this.productTVHeading = page.getByRole('heading', { name: 'Pantalla Smart TV Samsung LED de 55 pulgadas HD Un55cu8000fxzx con Tizen' })
    this.buyNowButton = page.getByRole('button', { name: 'Comprar ahora' })

}

async searchBarVisible(){
    await this.searchBar.isVisible()
}

async searchBarFill(product:string){
    await this.searchBar.fill(product)
}

async buyNowButtonVisible(){
    await this.buyNowButton.isVisible()
}
async buyNowButtonClick(){
    await this.buyNowButton.click()
}
async productTVClick(){
    await this.productTVHeading.click()
}

async searchForAnSpecificProduct(product:string){
    await this.searchBarVisible()
    await this.searchBarFill(product)
    
 
}
async buyNowButtonFunctionality(){
    await this.productTVClick()
    await this.buyNowButtonVisible()
    await this.buyNowButtonClick()
}


}