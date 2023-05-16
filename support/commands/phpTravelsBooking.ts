import { expect, Page } from '@playwright/test';
import loc from '../pageElements/locators';


export class phpTravelsBooking {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async hotelSearch() {
        await this.page.locator(loc.BOOKING.hotelsIcon).click()
        const bookinUrl = this.page.url();
        expect(bookinUrl).toMatch('https://phptravels.net/hotels')
        await this.page.locator(loc.BOOKING.cityNameButon).click()
        await this.page.locator(loc.BOOKING.cityNameField).type('dubai')
        await this.page.locator(loc.BOOKING.cityNameOptions).click()
        expect(this.page.locator(loc.BOOKING.cityNameSearchResult)).toBeVisible()
        await this.page.locator(loc.BOOKING.calendarButton).click()
        await this.page.locator(loc.BOOKING.checkin).click()
        await this.page.locator(loc.BOOKING.checkout).click()
        await this.page.locator(loc.BOOKING.travellersField).click()
        await this.page.locator(loc.BOOKING.plusAdults).click()
        await this.page.locator(loc.BOOKING.plusChields).click()
        expect(this.page.locator(loc.BOOKING.iconChieldAge)).toBeVisible()
        await this.page.locator(loc.BOOKING.chieldAgeSelector).click()
        const ageSelect = await this.page.selectOption(loc.BOOKING.chieldAgeSelector, '3')
        expect(ageSelect).toContain('3')
        await this.page.locator(loc.BOOKING.nationalityField).click()
        const nationalitySelect = await this.page.selectOption(loc.BOOKING.nationalityField, 'IT')
        const country = 'Italy'
        const countryName = await this.page.locator(loc.BOOKING.countryName).textContent()
        expect(nationalitySelect).toContain('IT')
        expect(countryName).toEqual(country)
        await this.page.locator(loc.BOOKING.searchMagnifyingGlass).click()
        const searchUrl = this.page.url()
        expect(searchUrl).toMatch('https://phptravels.net/hotels/en/usd/dubai/24-03-2023/30-03-2023/1/3/1/IT')
    }

    async hotelBooking() {
        await this.page.locator(loc.BOOKING.fiveStarsFilter).click()
        expect(this.page.locator(loc.BOOKING.jumeiraBeachHotel)).toBeVisible()
        await this.page.locator(loc.BOOKING.detailsButton).click()
        const jumeiraUrl = this.page.url()
        expect(jumeiraUrl).toMatch('https://phptravels.net/hotel/en/usd/dubai/jumeirah-beach-hotel/32/24-03-2023/30-03-2023/1/3/1/1/IT/0/0/')
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
        const ageSelect = await this.page.selectOption(loc.BOOKING.travellerChieldAge, '3')
        await this.page.locator(loc.BOOKING.travellerChieldName).type('Meriadok')
        await this.page.locator(loc.BOOKING.travelllerChieldLastName).type('Brandebuck')
        expect(ageSelect).toContain('3')
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