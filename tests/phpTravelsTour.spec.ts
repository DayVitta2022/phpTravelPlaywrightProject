import {test} from '@playwright/test';
import { general } from '../support/commands/general';
import { phpTravelsTour } from '../support/commands/phpTravelsTour';

let pw: general
let phpTour: phpTravelsTour

test.beforeEach( async ({page}) => {
  pw = new general(page)
  phpTour = new phpTravelsTour(page)
  await page.goto('https://phptravels.net/')
})

test('01- Cliente reserva passeio com sucesso', async () =>{
    await pw.login()
    await pw.mainSearch('tours', 'dubai', '24', '30', '3', '')
    await phpTour.toursBooking()
})