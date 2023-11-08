import twilio from 'twilio'

const accountSid = 'completar';
const authToken = 'completar';
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Prueba de mensaje...!!!',
        from: '+16813396273',
        to: '+541154200776'
    })
    .then(message => console.log(message.sid))
