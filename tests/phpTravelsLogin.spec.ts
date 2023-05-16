import {test} from '@playwright/test';
import { general } from '../support/commands/general';

let pw: general
 
test.beforeEach( async ({page}) => {
  pw = new general(page)
  await page.goto('https://phptravels.net/')
})

test('01- Login Cliente feito com sucesso', async () => {
   await pw.login()
})

test.skip('02- Login- Agente', async () => {
   await pw.login()
})

test.skip('03- Login- Fornecedor', async () => {
    await pw.login()
})

test('04- Login Customer sem sucesso- cliente nao preenche o campo de email', async () =>{
  await pw.loginFail('email')
})

test('05- Login Customer sem sucesso- cliente nao preenche o campo de senha', async () =>{
  await pw.loginFail('password')
})

test('06- Login Customer sem sucesso- cliente preenche email e senha nao cadastrados', async () =>{
  await pw.loginFail('wrongCredentials')  
})

