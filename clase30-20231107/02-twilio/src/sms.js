import twilio from 'twilio'

const accountSid = 'ACd4b330aed4835e8d8f2af7540afec8da';
const authToken = 'cbaf6cb18c5f47c9f28c8f342d8f1180';
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Prueba de mensaje...!!!',
        from: '+16813396273',
        to: '+541154200776'
    })
    .then(message => console.log(message.sid))
