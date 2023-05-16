import { expect, Page } from '@playwright/test';
import loc from '../pageElements/locators';


export class phpAddFunds {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

async addFunds(paymentType: string){
await this.page.locator(loc.ADDFUNDS.addFundsButton).click()
    if(paymentType === 'paypal'){
        await this.page.locator(loc.ADDFUNDS.payWithPayPal).click()
        await this.page.locator(loc.ADDFUNDS.buttonPayNow).click()
        await this.page.locator(loc.ADDFUNDS.buttonPayPalFinish).click()
        await this.page.waitForTimeout(10000)
        const paypalUrl = this.page.url()
        expect(paypalUrl).toMatch('https://phptravels.net/payment/paypal')
        await this.page.locator(loc.ADDFUNDS.buttonPayPalFinish).click()
    }
    if(paymentType === 'bankTransfer'){
        await this.page.locator(loc.ADDFUNDS.buttonPayNow).click()
        expect(this.page.locator(loc.ADDFUNDS.ibanBankTransfer)).toBeVisible()
        await this.page.waitForTimeout(10000)
        const bankTransferUrl = this.page.url();
        expect(bankTransferUrl).toMatch('https://phptravels.net/payment/bank-transfer')    
    }
}    





































}