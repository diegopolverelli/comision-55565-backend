const express=require('express');
const multer  = require('multer')
const fs=require('fs')

const upload = multer({ dest: __dirname+'/uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'-'+file.originalname)
    }
  })
  
  const uploadConStorage = multer({ storage: storage })

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post('/profile', upload.single('avatar'), (req, res)=>{
    // req.file is the `avatar` file
    console.log(req.file)
    // req.body will hold the text fields, if there were any
    console.log(req.body)

    fs.renameSync(req.file.path,__dirname+'/uploads/'+Date.now()+'-'+req.file.originalname)

    res.status(200).send('Imagen procesada')
  })


  app.post('/profile2', uploadConStorage.single('foto'), (req, res)=>{
    // req.file is the `avatar` file
    console.log(req.file)

    res.status(200).send('Imagen procesada')
  })
  
const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
