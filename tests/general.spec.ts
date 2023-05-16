import {test} from '@playwright/test';
import { general } from '../support/commands/general';


let pw: general

test.beforeEach( async ({page}) => {
  pw = new general(page)
  await page.goto('https://phptravels.net/')
})

test('01- Cliente logado faz pesquisa de hoteis', async () => {
  await pw.login()
  await pw.mainSearch('tours', 'dubai', '24', '30', '3', 'italy')
})