const servidorHTTP = require('express');
const req = require('express/lib/request');
const app = servidorHTTP();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send('Página principal. Servidor en Node.js con express');
})//htdocs = public_html
app.get('*',(req,res)=>{
    res.send('404 | Pagina no encontrada');
})
//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port);
})