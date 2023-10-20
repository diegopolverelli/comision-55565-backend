import http from 'http'

console.log("Directorio actual:", process.cwd())
console.log("Id del proceso:", process.pid)
console.log("Donde corre el proceso:", process.title)
console.log("Version de Node:", process.version)
console.log("Path de Node:", process.execPath)
console.log("S.O.:", process.platform)

console.log("Var. Entorno:", process.env)
console.log("Var. Entorno - path:", process.env.path)
console.log("Var. Entorno - windir:", process.env.windir)
console.log("Var. Entorno - MONGO_URL:", process.env.MONGO_URL)
console.log("Memory use:",process.memoryUsage())
console.log("Argumentos pasados x CLI:", process.argv)


