 //TODO: buscar la ruta del archivo directorio o archivo


const fs = require('fs');
const path = require('path');
const file ='./README.md';



// Document route

// se declara una variable "routeMd" que asigna una Función / Arg (file)-md
const routeMd = (file) => {
  // console.log(file) // return relative route in the file
// se declara una variable "fileAbsolute" que pasa el Arg(file) y (resolve)retorna una ruta absoluta
  const fileAbsolute = path.resolve(file);

  console.log (fileAbsolute)

 // leer un archivo
  //fs- module llama método readFile - ( 1par nombre archivo- 2par character encode-3p funcion anónima (1p error, 2p  datos arch)) ¿?Buffer
  fs.readFile(fileAbsolute, 'utf8', (err, fileContent) => {
    // condicional error- contenido
    if (err) {
      
      console.log('No se encontro el archivo');
    } else {
      console.log (fileContent)
    }
  });

  };
  //imprime variable y ruta
  // console.log (routeMd(file));
 

  //TODO: buscar los links, markdownit
 //se declara variable para buscar url- módulo fs, llama  el método readfile (1p archivo, 2p uncode, funcion anónima(1p error, 2p data))
  const findURL = fs.readFile(file, 'utf8', (err, data) => {
    // condicional error
    if (err) throw err;
    // Declaravar regExpUrl https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
    const regExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    // Declara var "found" asigna el metodo match para buscar en una cadena la regExp y devuelve coincidencias en  array.
    const found = data.match(regExp);
    const urls = [];
    for(let i = 0; i < found.length; i++) {
       urls.push(found[i]);
    }
    console.log(urls);
    
    });

    // mdLinks(findURL)

  //TODO: validar link

  //TODO: estadisticas

  //TODO: imprimir el resultado
