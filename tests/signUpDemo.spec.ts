import {test} from '@playwright/test';
import { signUpDemo } from '../support/commands/signUpDemo';

let pw: signUpDemo

test.beforeEach( async ({page}) => {
  pw = new signUpDemo(page)
  await page.goto('https://demo.nopcommerce.com/register?returnurl=%2F')
})

test('01- Cliente se inscreve na pagina', async () => {
    await pw.sigNup('Bilbo', 'Baggins', 'test123', 'test123', 'male', 'sucess')
})

test('02- Registro sem sucesso - usuario nao preenche o campo First Name', async () => {
    await pw.registerFail('first name')
})

test('03- Registro sem sucesso - usuario nao preenche o campo Last Name', async () => {
  await pw.registerFail('last name')
})

test('04- Registro sem sucesso - usuario nao preenche o campo Email', async () => {
  await pw.registerFail('email')
})

test('05- Registro sem sucesso - usuario nao preenche o campo Password', async () => {
  await pw.registerFail('password')
})

test('06- Registro sem sucesso - usuario nao preenche o campo Confirm Password', async () => {
  await pw.registerFail('passwordConfirmation')
})

test('07- Registro sem sucesso - senha de confirmação diferente da senha escolhida', async () => {
  await pw.registerFail('passwordsDontMatch')
})

test('08- Registro sem sucesso - alertas visuais sobre registro imcompleto', async () => {
  await pw.registerAlert()
})