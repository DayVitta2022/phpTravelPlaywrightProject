import { expect, Page } from '@playwright/test';
import loc from '../pageElements/locators';


export class phpTravelsTour {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
async toursBooking(){
    await this.page.locator(loc.BOOKING.detailsButtonTours).click()
    const SheratonUrl = this.page.url()
    expect(SheratonUrl).toContain('sheraton')
    await this.page.locator(loc.BOOKING.bookingNow).click()
    await this.page.locator(loc.BOOKING.traveller1FieldName).type('Frodo')
        await this.page.locator(loc.BOOKING.travelller1FieldLastName).type('Baggins')
        const title2Select = await this.page.selectOption(loc.BOOKING.traveller2Title, 'Miss')
        expect(title2Select).toContain('Miss')
        await this.page.locator(loc.BOOKING.traveller2FieldName).type('Arwen')
        await this.page.locator(loc.BOOKING.travelller2FieldLastName).type('Undómiel')
        const Title3Select = await this.page.selectOption(loc.BOOKING.traveller3Title, 'Mrs')
        expect(Title3Select).toContain('Mrs')
        await this.page.locator(loc.BOOKING.traveller3FieldName).type('Galadriel')
        await this.page.locator(loc.BOOKING.travelller3FieldLastName).type('Noldor')
        await this.page.locator(loc.BOOKING.traveller4FieldName).type('Meriadok')
        await this.page.locator(loc.BOOKING.travelller4FieldLastName).type('Brandebuck')
        await this.page.locator(loc.BOOKING.payWithWalletBalance).click()
        await this.page.locator(loc.BOOKING.termsAndConditionsCheckbox).click()
        if (await this.page.locator(loc.BOOKING.spanCokkies).isVisible()) {
            await this.page.locator(loc.BOOKING.cookiesButton).click()
        }
        await this.page.locator(loc.BOOKING.confirmBookingButton).click()
        expect(this.page.locator(loc.BOOKING.pendingStatus)).toBeVisible()
        expect(this.page.locator(loc.BOOKING.reservationNumber)).toBeVisible()
        const paymentType = 'wallet balance'
        const paymentStatus = await this.page.locator(loc.BOOKING.paymentStatus).textContent()
        expect(paymentStatus).toEqual(paymentType)



}

}