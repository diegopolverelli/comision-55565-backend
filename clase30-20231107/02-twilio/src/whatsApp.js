import twilio from 'twilio'

const accountSid = 'ACd4b330aed4835e8d8f2af7540afec8da';
const authToken = 'cbaf6cb18c5f47c9f28c8f342d8f1180';
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Hola, prueba de envío de mensaje de whatsApp',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5491154200776'
    })
    .then(message => console.log(message.sid))
