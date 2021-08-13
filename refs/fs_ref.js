const fs = require('fs')
const path = require('path')

//file System
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error(err)
//     console.log('folder created')
// })


// fs.writeFile(
//     path.join(__dirname, 'notes', 'myNotes.txt'),
//     'Hi',
//     err => {
//         if (err) throw new err
//         console.log('file created')
//
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'myNotes.txt'),
//             ' all',
//             err => {
//                 if (err) throw new Error(err)
//                 console.log('content added')
//
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'myNotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err
//                         // console.log(Buffer.from(data).toString()) //no decode
//                         console.log(data)
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw new Error(err)
        console.log('file renamed')
    }
)
