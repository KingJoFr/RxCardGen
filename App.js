const {callGPT} = require('./CallGpt');
const {timedTextQuery} = require('./SaveTextFile');


// callgpt then save text
//callgpt(prompt)
//saveText(text,name,timeInterval) time interval in milliseconds
//need an array of the drug names to go through

const drugList = ["valsartan","metformin"]
const timeInterval = 1000 * 30;//30 seconds

i = 0

console.log('app starting')

async function Main(){

    setInterval(async() =>{ 
        while(i<=drugList.length-1){
            
            console.log(`pass number ${i}`)
            let prompt = `Whats ${drugList[i]}`
            let fileName = drugList[i];
            let gptResponse = await callGPT(prompt);
            let content = gptResponse.content;
            console.log(gptResponse)
            timedTextQuery(content,fileName);
            i++
        };
    }, timeInterval)
}
Main();