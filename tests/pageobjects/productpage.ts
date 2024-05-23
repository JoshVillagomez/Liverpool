import { Locator, Page } from "@playwright/test";

export class ProductPage{
    private readonly searchBar: Locator
    private readonly buyNowButton: Locator
    private readonly productTvTizenHeading: Locator
    private readonly minPrice: Locator
    private readonly maxPrice: Locator
    private readonly priceFilterButton: Locator
    private readonly priceRangeApplied: Locator




constructor(page: Page){
    this.searchBar = page.getByRole('textbox', { name: 'Buscar por producto, marca y más...' })
    this.productTvTizenHeading = page.getByRole('heading', { name: 'Pantalla Smart TV Samsung LED de 55 pulgadas HD Un55cu8000fxzx con Tizen' })
    this.buyNowButton = page.getByRole('button', { name: 'Comprar ahora' })
    this.maxPrice = page.getByRole('textbox', {name: 'Máximo'})
    this.minPrice = page.getByRole('textbox', {name: 'Mínimo'})
    this.priceFilterButton = page.locator('//div[@class="a-price__filterButton"]')
    this.priceRangeApplied = page.getByRole('generic', {name: '$500.0 -$5000.0'})

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
    await this.productTvTizenHeading.click()
}
async priceFilterButtonClick(){
    await this.priceFilterButton.click()
}
async maxPriceFill(maxPriceInput:string){
    await this.maxPrice.fill(maxPriceInput)
}

async minPriceFill(minPriceInput:string){
    await this.minPrice.fill(minPriceInput)
}
async priceRangeAppVisible(){
    await this.priceRangeApplied.isVisible()
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
async priceRangeFill(maxPriceInput:string, minPriceInput:string){
    await this.maxPriceFill(maxPriceInput)
    await this.minPriceFill(minPriceInput)
    await this.priceFilterButtonClick()
    await this.priceRangeAppVisible()
}

}