import nodemailer from 'nodemailer'

const transporter=nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth: {
        user: 'diegopolverelli@gmail.com',
        pass: 'jvncumjsxcxemwcl'
    }
})

const enviar=async()=>{
    return transporter.sendMail({
        from: "Diego <diegopolverelli@gmail.com>",
        to: "diegopolverelli@hotmail.com",
        subject: "prueba email simple",
        // text: "",
        html: `
        <p style="color:blue;">Prueba de email "simple"</p>
        `
    })
}

enviar()
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))