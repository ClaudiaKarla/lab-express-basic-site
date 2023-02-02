const express = require('express');
 
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
   // console.log(request);
    //response.send('<h1>Welcome Ironhacker. :)</h1>');
  });

  app.get('/taylor', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
         <title>Taylor Swift</title>
         <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
       />
     
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Taylor Swift</h1>
          <p>Bienvenidos a la pagina No Oficial de Taylor Swift</p>
          <img src="/imagenes/tay.jpg" />
  
          <div class="Inicio">  
          <a href="tay"> 
          <button  style="margin: 15px"> Trabajos</button>
      </a>
      <a href="acerca"> 
      <button style="margin: 15px">Acerca de...</button>
      </a>
      
      <a href="galeriaFotos"> 
      <button style="margin: 15px">Galeria</button>
      </a>
      
          </div>
        
       </body>
      </html>
     `);
  });
   

  app.get('/tay', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Taylor</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1 style="color:black">Trabajos</h1>
          <a href="taylor">
          <button style="font-size:15px">Regresar a Menu</button>
        </a>
        <div class=trabajos> 
          <img src="/imagenes/t2.jpg" />
          </div>
          <h4>
 
  Firmó con la compañía discográfica independiente Big Machine Records 
  y se convirtió en la artista más joven contratada por Sony/ATV Music 
  Publishing House. En 2006 lanzó su álbum debut homónimo, que la 
  estableció como una estrella en la música country. «Our Song», su 
  tercer sencillo, la convirtió en la persona más joven en escribir 
  temas de forma solista e interpretar una canción número uno en la 
  lista de Hot Country Songs. En 2008 recibió una nominación a mejor 
  artista nuevo en la 50.ª edición de los Premios Grammy.

</h4>
        </body>
      </html>
    `);
  });

  app.get('/acerca', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Hablemos de Taylor Swift</title>
          <h2 style="color:brown">Hablemos de Taylor Swift</h2>

          <a href="taylor">
          <button style="font-size:15px">Regresar a Menu</button>
        </a>

          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>

        <body>
          <h3>Taylor Alison Swift (West Reading, Pensilvania; 
            13 de diciembre de 1989) es una cantautora, productora, 
            directora, actriz y empresaria estadounidense. 
            Criada en Wyomissing (Pensilvania), se mudó a Nashville
            (Tennessee) a los 14 años para realizar una carrera de música 
            country. Firmó con la compañía discográfica independiente 
            Big Machine Records y se convirtió en la artista más joven 
            contratada por Sony/ATV Music Publishing House. En 2006 
            lanzó su álbum debut homónimo, que la estableció como una 
            estrella en la música country. «Our Song», su tercer sencillo, 
            la convirtió en la persona más joven en escribir temas de forma 
            solista e interpretar una canción número uno en la lista de 
            Hot Country Songs. En 2008 recibió una nominación a mejor artista 
            nuevo en la 50.ª edición de los Premios Grammy.
    
    </h3>
    <div class=acerca> 
          <img src="/imagenes/t1.jpg" />
          </div>
        </body>
      </html>
    `);
  });


  app.get('/galeriaFotos', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
         
          <h1>GALERIA DE FOTOS</h1>
          <title>Galeria de Fotos</title>

          <a href="taylor">
          <button style="font-size:15px">Regresar a Menu</button>
        </a>

          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          
          <img src="/imagenes/t3.jpeg" />
          <img src="/imagenes/t2.jpg" />
          <img src="/imagenes/t1.jpg" />

        </body>
      </html>
    `);
  });
   
  
console.log(__dirname)

  app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
 
  app.get('/tay', (request, response, next) => response.sendFile(__dirname + '/views/tay-page.html'));

  app.get('/acerca', (request, response, next) => response.sendFile(__dirname + '/views/acerca.html'));
 
  app.get('/galeriaFotos', (request, response, next) => response.sendFile(__dirname + '/views/galeriaFotos.html'));
  

  app.listen(3000, () => console.log('My first app listening on port 3000! '));
