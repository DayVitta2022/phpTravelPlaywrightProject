import {test} from '@playwright/test';
import {phpAddFunds} from '../support/commands/phpAddFunds';
import { general } from '../support/commands/general';

let pw: general
let addFunds: phpAddFunds

test.beforeEach( async ({page}) => {
    pw = new general(page)
    addFunds = new phpAddFunds(page)
    await page.goto('https://phptravels.net/')
  })


  test('01- Cliente logado adiciona fundos a sua carteira', async () => {
    await pw.login()
    await addFunds.addFunds('bankTransfer')   
  })

