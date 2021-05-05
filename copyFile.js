
fs.copyFile('created.txt', 'newFile2', (error) => {
    if(error){
        console.log('newFile is created: ')
        return
    } 
})
