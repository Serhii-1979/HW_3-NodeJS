const fs = require('fs');

fs.mkdir('myFolder', (err) => {
    if (err) {
        return console.error(`Ошибка при создании католога: ${err.message}`)
    }
    console.log('Каталог успешно создан');   
})

setTimeout(() => {
    fs.rmdir('myFolder', (err) => {
        if (err) {
            return console.error(`Ошибка при удалении католога: ${err.message}`)
        }
        console.log('Каталог успешно удален');
    })
}, 2000)
