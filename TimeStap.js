import { writeFile, readdir } from 'fs';

const time = new Date();
const timestamp = `${Date()}`;
const times =`${time.getDate()}-${time.getMonth()}-${time.getFullYear()}--${time.getHours()}-${time.getMinutes()}`

// creating file
writeFile(`./timestamp/${times}.txt`, timestamp, (err) => {
    if (err) {
        return console.log('Cannot create file: ', err);
    } else {
    console.log('Writing Completed!!!');
    }
})


readdir('./timestamp/', function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ', err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});