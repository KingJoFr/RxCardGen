const fs = require('fs');
const { OpenAI} = require('openai');
require('dotenv').config();

//initialize openai



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Function to query Chatgpt and generate text 

const callGPT = async function (prompt){
    try{
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages:[ 
                {'role': 'user', 
                 'content': [
                    {'type':'text',
                     'text':prompt
                    }
                  ]
                }
            ],
            max_tokens: 64,
        });
        return response.choices[0].message;
    }catch(error){
        console.log('Error querying ChatGPT:', error);
        return null;
    }
} 

module.exports = {callGPT};