

fs.unlink('hola.txt', (err) =>{
    if(err) throw err;
    console.log('hola.txt was deleted');
});