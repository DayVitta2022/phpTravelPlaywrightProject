const locators = {

REGISTERSIGNUPDEMO: {
    //pra essa função abaixo funcionar é necessário que o xpath sirva para mais de um parâmetro :`//input[@id="gender-${gender}"]`, gender nesse caso pode ser male ou female
    genderfield: gender => `//input[@id="gender-${gender}"]`,
    firstNameField: '//input[@id="FirstName"]',
    lastNameField: '//input[@id="LastName"]',
    birthdayField: '//select[@name="DateOfBirthDay"]',
    birthMonthField: '//select[@name="DateOfBirthMonth"]',
    birthYearField: '//select[@name="DateOfBirthYear"]',
    emailField: '//label[@for="Email"]',
    companyField: '//input[@id="Company"]', 
    passwordField: '//input[@id="Password"]',
    confirmPasswordField: '//input[@id="ConfirmPassword"]',
    registerButton: '//button[@id="register-button"]', 
    spanFirstName: '//span[@id="FirstName-error"]',
    spanLastName: '//span[@id="LastName-error"]',
    spanEmail: '//span[@id="Email-error"]',
    spanPassword: '//span[@id="Password-error"]',
    spanPasswordConfirmation: '//span[@id="ConfirmPassword-error"]',
    firstNameMessageError: '//span[@id="FirstName-error"]',
    lastNameMessageError: '//span[@id="LastName-error"]',
    emailMessageError: '//span[@id="Email-error"]',
    passwordMessageError: '//span[@id="Password-error"]',
    confirmationPasswordMessageError: '//span[@id="ConfirmPassword-error"]',
}, 
LOGINPHPTRAVELS: {
    accountButton: '//button[@id="ACCOUNT"]',
    customerLogin: '//a[contains (text(), "Customer Login")]',
    emailField: '//input[@placeholder="Email"]',
    passwordField: '//input[@type="password"]', 
    loginButton: '(//button[@type="submit"])[1]', 
},
BOOKING: {
    hotelsIcon: '//a[@class="active_hotels waves-effect"]',
    cityNameButon: '//b[@role="presentation"]',
    cityNameField: '//input[@class="select2-search__field"]',
    cityNameOptions: '//ul[@id="select2-hotels_city-results"]//li',
    cityNameSearchResult: '//span[@id="select2-hotels_city-container"]',
    iconChieldAge: '//strong[contains (text(), "Child Age")]',
    countryName: '//option[@value="IT"]',
    calendarButton: '//input[@name="checkin"]',
    checkinDate: checkin => `(//td[contains (text(), "${checkin}")])[1]`,
    checkoutDate: checkout => `(//td[contains (text(), "${checkout}")])[2]`,
    travellersField: '//p[contains (text(), "Travellers ")]',
    plusAdults:'//input[@name="adults"]/..//i[@class="la la-plus"]',
    plusChields: '//input[@name="childs"]/..//i[@class="la la-plus"]',
    chieldAgeSelector: '//select[@class="form-select"]',
    nationalityField: '//select[@class="form-select nationality"]',
    searchMagnifyingGlass: '//button[@id="submit"]',
    fiveStarsFilter: '//label[@for="stars_5"]',
    jumeiraBeachHotel: '//small[contains (text(), "Jumeirah Beach Hotel - Jumeirah - Dubai - United A ")]',
    detailsButton: '(//i[@class="la la-angle-right"])[5]',
    detailsButtonTours: '(//i[@class="la la-angle-right"])[1]',
    bookingNow:'(//button[@type="submit"])[1]',
    traveller1FieldName:'//input[@name="firstname_1"]',
    travelller1FieldLastName:'//input[@name="lastname_1"]',
    traveller2Title: '//select[@name="title_2"]',
    traveller2FieldName:'//input[@name="firstname_2"]',
    travelller2FieldLastName:'//input[@name="lastname_2"]',
    traveller3Title: '//select[@name="title_3"]',
    traveller3FieldName:'//input[@name="firstname_3"]',
    travelller3FieldLastName:'//input[@name="lastname_3"]',
    travellerChieldAge: '//select[@class="form-select child_age_1"]',
    travellerChieldName:'//input[@name="child_firstname_1"]',
    travelllerChieldLastName:'//input[@name="child_lastname_1"]',
    traveller4FieldName: '//input[@name="firstname_4"]',
    travelller4FieldLastName: '//input[@name="lastname_4"]',
    payWithWalletBalance: '//input[@id="gateway_wallet-balance"]',
    termsAndConditionsCheckbox: '//label[@for="agreechb"]',
    confirmBookingButton: '//button[@id="booking"]',
    pendingStatus: '//strong[contains (text(), "Pending")]',
    reservationNumber: '//strong[contains (text(), "Reservation Number:")]',
    paymentStatus: '//strong[@class="ttc"]',
    cookiesButton: '//button[@id="cookie_stop"]',
    spanCokkies: '//span[@id="cookieconsent:desc"]',
},

TOURS: {
    toursButton: '//a[@href="https://phptravels.net/tours"]',
},

ADDFUNDS:{
    addFundsButton: '//li[@class="user_wallet "]//a',
    payWithPayPal: '//input[@id="gateway_paypal"]',
    buttonPayNow: '//button[@type="submit"]', 
    buttonPayPalFinish: '//div[@id="buttons-container"]//div//div',
    payWithStripe: '//input[@id="gateway_stripe"]',
    buttonPayNowStripe: '//a[@type="button"]',
    payWithBankTransfer: '//input[@id="gateway_bank-transfer"]', 
    ibanBankTransfer: '//p[contains (text(), " IBAN GBPXXXIP0024456987")]',
},

DATACHANGE:{
    myProfileButton: '//i[@class="la la-user mr-2 text-color-2"]',
    firstNameProfile:'//input[@name="firstname"]',
    lastNameProfile: '//input[@name="lastname"]',
    phoneProfile: '//input[@name="phone"]',
    emailProfile: '//input[@name="email"]',
    passwordProfile: '//input[@name="password"]',
    updateProfileButton: '//button[@type="submit"]'
}




}

export default locators;