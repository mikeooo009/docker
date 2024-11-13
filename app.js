const expess= require('express')
const app= expess();
app.get('/',(req,res)=> res.send('hello world'))
app.listen(3000,()=>console.log('server ready'))