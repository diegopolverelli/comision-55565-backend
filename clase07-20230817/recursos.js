const path=require('path')
const fs=require('fs')

let ruta=path.join(__dirname,'archivos','usuarios.json') 

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta,'utf-8'))
    }else{
        return []
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))    
}

// --------------------------------------
// --------------------------------------
// --------------------------------------


// nodemon.json
// {
//     "ignore": ["*.json", "*.js"]
// }
