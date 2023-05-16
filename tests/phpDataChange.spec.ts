import {test} from '@playwright/test';
import { phpDataChange } from '../support/commands/phpDataChange';
import { general } from '../support/commands/general';

let pw: general
let dataChange: phpDataChange

test.beforeEach( async ({page}) => {
    pw = new general(page)
    dataChange = new phpDataChange(page)
    await page.goto('https://phptravels.net/')
  })

test('01- usuario altera seu nome com sucesso', async () => {
    await pw.login()
    await dataChange.dataChange('name')
})  

test('01- usuario altera seu sobrenome com sucesso', async () => {
  await pw.login()
  await dataChange.dataChange('lastName')
})  

test('01- usuario altera seu telefone com sucesso', async () => {
  await pw.login()
  await dataChange.dataChange('phone')
})  

test('01- usuario altera seu email com sucesso', async () => {
  await pw.login()
  await dataChange.dataChange('email')
})  

