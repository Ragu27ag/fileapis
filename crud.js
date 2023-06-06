import express from "express";

import * as fs from 'fs';



const createFile = () => {
    const dateTime = new Date();

    const date = (`0${dateTime.getDate()}`)

    //  console.log(date)

    const month = (`0${dateTime.getMonth() + 1}`)


    const year = dateTime.getFullYear()


    const hour = dateTime.getHours()


    const min = dateTime.getMinutes()


    const filename = date + '-' + month + '-' + year + '-' + hour + '-' + min;

    fs.writeFile(`${filename}.txt`, `${dateTime}`, function (err) {
        if (err) {
            throw err;
        }
        console.log('file created')
    })

    return `file : ${filename}.txt`
}


const readDirectory = () =>{
    const folder = 'dir';
    const f = []
    fs.readdir(folder,function result(err,files) {
        if(err){
            throw err
        }
        else{
            for(var i in files){
                f.push(files[i])
            }
         
            console.log(f)
            return files;
        }
    })
    
}

export { createFile ,readDirectory}