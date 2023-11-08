import twilio from 'twilio'

const accountSid = 'completar';
const authToken = 'completar';
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Hola, prueba de envío de mensaje de whatsApp',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5491154200776'
    })
    .then(message => console.log(message.sid))
