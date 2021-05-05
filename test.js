const fs = require('fs')

fs.writeFile('created.txt', 'Hola desde node fs', 'utf8', (error) => {
    if (error) {
    console.error('nose pudo crear el archivo', error)
    return
}
    console.log('Se escribio el archivo')
} )

// por cada funcion deberiamos tener un script ejecutable
// readFile => read.js
//appendFile => append.js
//unlink => unlink.js
// copyFile => copyFile.js

