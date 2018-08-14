
const projectId = "contactcenter-209009" //https://dialogflow.com/docs/agents#settings
const sessionId = 'quickstart-session-id'
const languageCode = 'en-US'
const target = 'en'
const dialogflow = require('dialogflow')
const sessionClient = new dialogflow.SessionsClient()



const sessionPath = sessionClient.sessionPath(projectId, sessionId)
const translate = require('google-translate-api')


const agentDialogFlow=(query)=>{
    return translate(query, {to: target}).then(res => {

        console.log(`Here is the original text: ${query}`)
        const languageDetection = res.from.language.iso
        console.log(`Here is the detected languages: ${languageDetection}`)

        const response =res.from.text.value?res.from.text.value:res.text

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text:  response,
                    languageCode: languageCode,
                },
            },
        }

        return sessionClient
            .detectIntent(request)
            .then(responses => {
                console.log('Detected intent')
                const result = responses[0].queryResult
                console.log(`The text is translated to dialogflow: ${result.queryText}`)
                console.log(`Here is the text that response from dialogflow: ${result.fulfillmentText}`)
                return translate(result.fulfillmentText, {to:languageDetection}).then(results => {
                    const translation = results.text;
                    return translation
                })
            })

    }).catch(err => {
        console.error(err);
    });

}



