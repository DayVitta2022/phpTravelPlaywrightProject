import { expect, Page } from '@playwright/test';
import loc from '../pageElements/locators';


export class signUpDemo {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async sigNup(firstName: string, lastName: string, passWord: string, confirmPassword: string, gender: string, status: string) {
        await this.page.locator(loc.REGISTERSIGNUPDEMO.genderfield(gender)).click()
        await this.page.locator(loc.REGISTERSIGNUPDEMO.firstNameField).type(firstName)
        await this.page.locator(loc.REGISTERSIGNUPDEMO.lastNameField).type(lastName)
        await this.page.locator(loc.REGISTERSIGNUPDEMO.birthdayField).click()
        const daySelect = await this.page.selectOption(loc.REGISTERSIGNUPDEMO.birthdayField, '28')
        expect(daySelect).toContain('28')
        await this.page.locator(loc.REGISTERSIGNUPDEMO.birthMonthField).click()
        const birthMonth = await this.page.selectOption(loc.REGISTERSIGNUPDEMO.birthMonthField, '12')
        expect(birthMonth).toContain('12')
        await this.page.locator(loc.REGISTERSIGNUPDEMO.birthYearField).click()
        const birthYear = await this.page.selectOption(loc.REGISTERSIGNUPDEMO.birthYearField, '1989')
        expect(birthYear).toContain('1989')
        let num = Math.random()
        let email = num + '@qualitymap.io'
        await this.page.locator(loc.REGISTERSIGNUPDEMO.emailField).type(email)
        await this.page.locator(loc.REGISTERSIGNUPDEMO.companyField).type('Quality Map')
        await this.page.locator(loc.REGISTERSIGNUPDEMO.passwordField).type(passWord)
        await this.page.locator(loc.REGISTERSIGNUPDEMO.confirmPasswordField).type(confirmPassword)
        
        if (status === 'sucess'){
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/registerresult/1?returnUrl=/')
        }
 }

    async registerFail(fieldRequired: string) {          
        if (fieldRequired === 'first name') {
            await this.sigNup('', 'Baggins', 'test123', 'test123', 'male', '')
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/register?returnurl=%2F')
            expect(this.page.locator(loc.REGISTERSIGNUPDEMO.spanFirstName)).toBeVisible()
        }
        if (fieldRequired === 'last name') {
            await this.sigNup('Bilbo', '', 'test123','test123', 'male', '')
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/register?returnurl=%2F')  
            expect(this.page.locator(loc.REGISTERSIGNUPDEMO.spanLastName)).toBeVisible()   
        }
        if (fieldRequired === 'email') {
            await this.sigNup('Bilbo', 'Baggins', 'test123','test123', 'male', '')
            await this.page.locator(loc.REGISTERSIGNUPDEMO.emailField).clear()
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/register?returnurl=%2F')    
            expect(this.page.locator(loc.REGISTERSIGNUPDEMO.spanEmail)).toBeVisible()          
        }
        if (fieldRequired === 'password') {
            await this.sigNup('Bilbo', 'Baggins', '','test123', 'male', '')
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/register?returnurl=%2F') 
            expect(this.page.locator(loc.REGISTERSIGNUPDEMO.spanPasswordConfirmation)).toBeVisible()     
        }
        if (fieldRequired === 'passwordConfirmation') {
            await this.sigNup('Bilbo', 'Baggins','test123', '', 'male', '')
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/register?returnurl=%2F')
            expect(this.page.locator(loc.REGISTERSIGNUPDEMO.spanPasswordConfirmation)).toBeVisible()    
        }
        if (fieldRequired === 'passwordDontMatch') {
            await this.sigNup('Bilbo', 'Baggins','test123', 'test1234', 'male', '')
            await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
            const url = this.page.url()
            expect(url).toMatch('https://demo.nopcommerce.com/register?returnurl=%2F')   
            expect(this.page.locator(loc.REGISTERSIGNUPDEMO.spanPasswordConfirmation)).toBeVisible() 
        }
}

    async registerAlert(){
        await this.page.locator(loc.REGISTERSIGNUPDEMO.registerButton).click()
        var firstName = 'First name is required.'
        const textFirstName = await this.page.locator(loc.REGISTERSIGNUPDEMO.firstNameMessageError).textContent()
        console.log(textFirstName)
        expect(textFirstName).toEqual(firstName)
        var lastName = 'Last name is required.'
        const textLastName = await this.page.locator(loc.REGISTERSIGNUPDEMO.lastNameMessageError).textContent()
        expect(textLastName).toEqual(lastName)
        var  email = 'Email is required.'
        const textEmail = await this.page.locator(loc.REGISTERSIGNUPDEMO.emailMessageError).textContent()
        expect(textEmail).toEqual(email)
        var password = 'Password is required.'
        const textPassword = await this.page.locator(loc.REGISTERSIGNUPDEMO.passwordMessageError).textContent()
        expect(textPassword).toEqual(password)
        var passwordConfirmation = 'Password is required.'
        const textPasswordConfirmation = await this.page.locator(loc.REGISTERSIGNUPDEMO.confirmationPasswordMessageError).textContent()
        expect(textPasswordConfirmation).toEqual(passwordConfirmation)
    }

    
}