/*if (user === 'agent') {
           await this.page.waitForTimeout(5000)
           await this.page.click('//a[contains (text(), "Agents Login")]')
           await this.page.waitForTimeout(5000)
           const paginas = await this.page.context().pages();
           const novaPagina = paginas.find(pagina => pagina.url().includes('https://phptravels.net/login'));
           console.log(novaPagina)
           await novaPagina.waitForTimeout(5000)
           await novaPagina.type('//input[@placeholder="Email"]', 'vittadayane2022@gmail.com');
           await novaPagina.type('//input[@type="password"]', 'legolas')
           await novaPagina.click('//button[@class="btn btn-default btn-lg btn-block effect ladda-button waves-effect"]')
           const url = novaPagina.url()
           expect(url).toMatch('https://phptravels.net/account/dashboard')
           await novaPagina.click()
       
       if (user === 'supplier') {
           await this.page.click('//a[contains (text(), "Supplier Login")]')
           await this.page.type('(//input[@name="email"])[1]', 'eric.vitta@gmail.com')
           await this.page.type('//input[@type="password"]', 'aragorn')
           await this.page.click('//span[contains (text(), "Login")]')
           const url = this.page.url()
           expect(url).toMatch('https://phptravels.net/api/supplier')
       } }*/

       

       /*test('02- Login- Agente', async () => {
   await pw.login('agent')
})

test('03- Login- Fornecedor', async () => {
    await pw.login('suplier')
})*/