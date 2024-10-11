const fs = require('fs');


const timedTextQuery = async function(inputText,name/*timeInterval*/){
   
    //setInterval(async () => {
        console.log('inputText timedTextQuery', inputText)
        if(inputText){
            const filename = `${name}.txt`;

            fs.writeFile(`${filename}`, inputText, (err)=> {
                if(err){
                    console.error('Error writing file:', err);
                }else{
                    console.log(`File saved: ${filename}`);
                }
            });
        }
        

}//, timeInterval)};

module.exports = {timedTextQuery};

