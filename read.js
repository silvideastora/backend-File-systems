
fs.readFile('created.txt', 'utf8', (error, data) => {
    if(error){
        console.log('hay un error en read: ')
        return
    } else{
        console.log(data)
    }
})