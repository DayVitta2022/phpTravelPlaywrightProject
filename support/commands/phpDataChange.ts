import { expect, Page } from '@playwright/test';
import loc from '../pageElements/locators';


export class phpDataChange {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async dataChange(data: string) {
        await this.page.locator(loc.DATACHANGE.myProfileButton).click()
        const profileUrl = this.page.url()
        expect(profileUrl).toMatch('https://phptravels.net/account/profile')
        if (data === 'name') {
            await this.page.locator(loc.DATACHANGE.firstNameProfile).clear()
            await this.page.locator(loc.DATACHANGE.firstNameProfile).type('Paul')
            const newName = await this.page.locator(loc.DATACHANGE.firstNameProfile).inputValue()
            expect(newName).toContain('Paul')
        }
        if (data === 'lastName') {
            await this.page.locator(loc.DATACHANGE.lastNameProfile).clear()
            await this.page.locator(loc.DATACHANGE.lastNameProfile).type('McCartney')
            const newLastName = await this.page.locator(loc.DATACHANGE.lastNameProfile).inputValue()
            expect(newLastName).toContain('McCartney')
        }
        if (data === 'phone') {
            await this.page.locator(loc.DATACHANGE.phoneProfile).clear()
            await this.page.locator(loc.DATACHANGE.phoneProfile).type('+351123456789')
            const newPhone = await this.page.locator(loc.DATACHANGE.phoneProfile).inputValue()
            expect(newPhone).toContain('+351123456789')
        }
        if (data === 'email') {
            await this.page.locator(loc.DATACHANGE.emailProfile).clear()
            await this.page.locator(loc.DATACHANGE.emailProfile).type('beatles@example.com')
            const newEmail = await this.page.locator(loc.DATACHANGE.emailProfile).inputValue()
            expect(newEmail).toContain('beatles@example.com')
        }
        await this.page.locator(loc.DATACHANGE.updateProfileButton)
    }

}