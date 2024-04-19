import fs from 'fs';

fs.readFile('../jsondata.json', 'UTF-8',(err,data) => {
    if(err){
        console.log('Error reading json File: ', err);
    }

    try{
        const jsondata = JSON.parse(data);
        console.log(jsondata);
    }catch(parseError){
        console.log( 'Error parsing json :', parseError );
    }
});