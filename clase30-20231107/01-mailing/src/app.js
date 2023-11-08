import express from 'express';
import nodemailer from 'nodemailer'
import multer from 'multer'
import fs from 'fs'

const PORT=3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/tmp/uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

const transporter=nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth: {
        user: 'diegopolverelli@gmail.com',
        pass: 'jvncumjsxcxemwcl'
    }
})

const enviar=async(to, subject, message, adjuntos=[])=>{

    let attachments=[]
    adjuntos.forEach(adjunto=>{
        attachments.push({
            path: adjunto.path,
            filename: adjunto.filename
        })
    })

    return transporter.sendMail({
        from: "Diego <diegopolverelli@gmail.com>",
        to,
        subject,
        // text: "",
        html: `
        <p style="color:blue;">${message}</p>
        `,
        attachments
    })
}

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'))

app.post('/mail', upload.array("adjuntos"), async(req,res)=>{
 
    let {to, subject, message}=req.body
    if(!to || !subject || !message){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos`})
    }

    let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    let toArreglo=to.split(',')
    console.log(toArreglo)
    let error=false
    toArreglo.forEach(direccion=>{
        if(!regExMail.test(direccion.trim())){
            error=true
        }
    })

    // let texto="hola"
    // texto.match()
   

    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Alguna direccion está mal...!!!`})
    }

    console.log(req.file)
    console.log(req.files)

    let resultado=await enviar(to, subject, message, req.files)

    req.files.forEach(adjunto=>{
        fs.unlinkSync(adjunto.path)
    })

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:resultado});    
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
