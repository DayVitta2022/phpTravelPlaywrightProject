import {test} from '@playwright/test';
import {phpTravelsBooking} from '../support/commands/phpTravelsBooking';
import { general } from '../support/commands/general';

let phpBooking : phpTravelsBooking
let pw: general

test.beforeEach( async ({page}) => {
  pw = new general(page)
  phpBooking = new phpTravelsBooking(page)
  await page.goto('https://phptravels.net/')
})

test('01- Cliente logado faz pesquisa de hoteis', async () => {
    await pw.login()
    await pw.mainSearch('booking', 'dubai', '24', '30', '3', 'italy')
})

test('02-  Cliente faz a reserva do hotel escolhido', async () => {
  await pw.login()
  await pw.mainSearch('booking', 'dubai', '24', '30', '3', 'italy')
  await phpBooking.hotelBooking()
})
