import { expect, Page } from '@playwright/test';
import loc from '../pageElements/locators';


export class general {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async login() {
        await this.page.locator(loc.LOGINPHPTRAVELS.accountButton).click()
        await this.page.locator(loc.LOGINPHPTRAVELS.customerLogin).click()
        await this.page.locator(loc.LOGINPHPTRAVELS.emailField).type('quality123@fakemail.com')    
        await this.page.locator(loc.LOGINPHPTRAVELS.passwordField).type('test123')
        await this.page.locator(loc.LOGINPHPTRAVELS.loginButton).click()
        const url = this.page.url()
        expect(url).toMatch('https://phptravels.net/account/dashboard')
    }

    async loginFail(failType: string) {
        await this.page.locator(loc.LOGINPHPTRAVELS.accountButton).click()
        await this.page.locator(loc.LOGINPHPTRAVELS.customerLogin).click()
        if (failType === 'email') {
            await this.page.locator(loc.LOGINPHPTRAVELS.passwordField).type('test123')
        }
        if (failType === 'password') {
            await this.page.locator(loc.LOGINPHPTRAVELS.emailField).type('qualitymap@example.com')
        }
        if (failType === 'wrongCredentials') {
            await this.page.locator(loc.LOGINPHPTRAVELS.emailField).type('test123@example.com')
            await this.page.locator(loc.LOGINPHPTRAVELS.passwordField).type('test123')
        }
        await this.page.locator(loc.LOGINPHPTRAVELS.loginButton).click()
        const url = this.page.url()
        expect(url).toMatch('https://phptravels.net/login')
    }



    async mainSearch(searchType: string, city: string, checkin: string, checkout: string, chieldAge: string, nationality: string) {
        if (searchType === 'booking') {
            await this.page.locator(loc.BOOKING.hotelsIcon).click()
            const bookinUrl = this.page.url();
            expect(bookinUrl).toMatch('https://phptravels.net/hotels')
        }
        if (searchType === 'tours') {
            await this.page.locator(loc.TOURS.toursButton).click()
            const toursUrl = this.page.url();
            expect(toursUrl).toMatch('https://phptravels.net/tours')
        }
        await this.page.locator(loc.BOOKING.cityNameButon).click()
        await this.page.locator(loc.BOOKING.cityNameField).type(city)
        await this.page.locator(loc.BOOKING.cityNameOptions).click()
        const cityName = await this.page.locator(loc.BOOKING.cityNameSearchResult).textContent()
        const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1)
        expect(cityName).toContain(cityCapitalized)
        await this.page.locator(loc.BOOKING.calendarButton).click()
        await this.page.locator(loc.BOOKING.checkinDate(checkin)).click()
        if (searchType === 'booking') {
            await this.page.locator(loc.BOOKING.checkoutDate(checkout)).click()
        }
        await this.page.locator(loc.BOOKING.travellersField).click()
        await this.page.locator(loc.BOOKING.plusAdults).click()
        if (searchType === 'tours') {
            await this.page.locator(loc.BOOKING.plusAdults).click()
        }
        await this.page.locator(loc.BOOKING.plusChields).click()
        if (searchType === 'booking') {
            expect(this.page.locator(loc.BOOKING.iconChieldAge)).toBeVisible()
            await this.page.locator(loc.BOOKING.chieldAgeSelector).click()
            const ageSelect = await this.page.selectOption(loc.BOOKING.chieldAgeSelector, chieldAge)
            expect(ageSelect).toContain(chieldAge)
            await this.page.locator(loc.BOOKING.nationalityField).click()
            const nationalitySelect = nationality.charAt(0).toUpperCase() + nationality.slice(1)
            await this.page.selectOption(loc.BOOKING.nationalityField, `${nationalitySelect}`)
            await this.page.locator(loc.BOOKING.searchMagnifyingGlass).click()
        }
        if (searchType === 'tours') {
            await this.page.locator(loc.BOOKING.searchMagnifyingGlass).click()
        }
        const searchUrl = this.page.url()
        expect(searchUrl).toContain(city)
    }


}