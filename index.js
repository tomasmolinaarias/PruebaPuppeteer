const puppeteer = require('puppeteer');

const url = 'https://www.amazon.com';

(async()=>{
    try {

        //obtener navegador el headle es para abrir el navgador para ver lo que hace tiene que ser false
        const browser = await puppeteer.launch({headless:false});

        // abrir una pestaña en el navegador puppeteer 
            const page = await browser.newPage();

        //ir a una pajina directo puppeteer
            await page.goto(url);

        //hacer que escriba en el buscador "ojo hay que leer del codigo de la pagina"
            await page.type('#twotabsearchtextbox','iphone')

        //hacer la accion de click "ojo hay que leer del codigo de la pagina""
            await page.click('#nav-search-submit-text input')

        //hacer que espere cierto tiempo
            await page.waitForSelector('[data-component-type="s-search-result"]')

            //hacer que tenga tiempo de espera 3000 = 3s 
            /* await page.waitFor(3000); */

        //tomar una foto con puppeteer
            // await page.screenshot({path:'amazon2.jpg'})

        //evaluar la pagina 
         const enlaces = await page.evaluate(()=>{

                // array vacio para el link
                const link = [];
                //buscamos el link
                const elements = document.querySelectorAll('[data-component-type="s-search-result"] h2 a');
                // for para guardar los elementos
                for(let element of elements){
                    link.push(element.href);
                }
                return link
            })
        for (let enlace of enlaces){
            await page.goto(enlace)
            await page.waitForSelector('#productTitle');
            const tmp = {};
            tmp.title = document.getElementById('productTitle')
        }
        //cerrar navegador con puppeteer
            await browser.close();
        
        console.log('paso todo')

    } catch (error) {
        console.log(error)
    }


})();