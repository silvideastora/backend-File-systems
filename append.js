
fs.appendFile('created.txt', 'New file', (err) => {
    if(err){
        console.log('New file is appended')
        return
    } 
})