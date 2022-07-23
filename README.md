# `PUPPETEER`
## ***que es puppeteer :***
`Puppeteer` es una librería de Node.js que proporciona una API de alto nivel que permite automatizar acciones sobre los `navegadores de Google`: tanto Chrome como su versión de código abierto `Chromium`.

tienes que usar `ASYNC y AWAIT` porque esperamos una respuesta si uno quiere puede usar `TRY & CATCH` o hacera juntas.

- ### `puppeteer.launch()`

    sirve para obtener el navador y con `headle` podemos ver lo que esta haciendo 

     ejempo:
     ```
    const browser = await puppeteer.launch({headless:{true}})
     ```
     lo guardamos en una constante y cuando `headless` es `true` no te va a mostrar lo que hace en el navegador y cuando es [false](#) te muestra todo lo que hace `PUPPETEER` 

- ### `newPage();`
   
    ejemplo:
    ```
    const page browser.newPage()
    ```
     con `newPage` hacemos que habra una nueva pagina y lo guardamos en una constante


- ### `goto();`
   
    ejemplo:
    ```
    page.goto(url)
    ```
     con `goto` hacemos que vaya al url que colocamos

- ### `setViewport();`
   
    ejemplo:
    ```
    page.setViewport({ width: 1920, height: 1080 })
    ```
     con `setViewport` hacemos que `PUPPETEER` tenga una vista cuando revise o navege en la pagina.

- ### `type();`
   
    ejemplo:
    ```
    page.type('selector','lo que queremos que escriba')
    ```
     con `type` hacemos que `PUPPETEER` busque un selector que este en la pagina  en nuestro caso seria un buscador y que escriba algo.

- ### `waitForTimeout();`
   
    ejemplo:
    
    ```
    page.waitForTimeout(1000)
    ```
     con `waitForTimeout` hacemos que `PUPPETEER` espere milisegundo 👀 1 segundo === 1000

- ### `click();`
   
    ejemplo:
    ```
    page.click('selector')
    ```
     con `type` hacemos que `PUPPETEER` haga **click** en el selector que ponemos.

- ### `evaluate();`
   
    ejemplo:
    ```
    await page.evaluate(()=>{
        const link = [];
        const elements = document.querySelectorAll('[data-component-type="s-search-result"] h2 a');
            for(let element of elements){
            link.push(element.href);
        };
        return link;
    }})
    ```
     con `evaluate` podemos sacar informacion de una pagina y guardarla  en un ``array`` vacio o en ``dateBase`` aca sacamos los datos con ``Javascript``

- ### `close();`
   
    ejemplo:
    ```
    await browser.close()
    ```
     con `close` hacemos que `PUPPETEER` cierre el navegador que utilizo