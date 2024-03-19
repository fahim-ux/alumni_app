const express=require('express')
const cors=require('cors')
const path=require('path')
const app=express()
const port=3000
app.use(cors())

// Serving static files
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded())

app.set('views',path.join(__dirname,'views'));

// Endpoints
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','user2.html'))
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','signup.html'))
})


// User validation
app.post('/signup',async (req,res)=>{
    const user_data=await getdata(req.body);
    console.log(user_data)
    if(user_data===null)
    {
        res.send("User not found")
        return;
    }
    else if(user_data.password===req.body.password)
    {
        res.send("Login successfull")
        return;
    }
    res.redirect('/profile')
})




// Database
const {MongoClient}=require('mongodb')
const url="mongodb://127.0.0.1:27017"
const client=new MongoClient(url)

async function getdata(user)
{
    await client.connect()
    const db=client.db("authentication")
    const new_collection=db.collection("people")
    const res=await new_collection.findOne(user)
    console.log("From get data function")
    console.log(res);
    return res;
}



// Server listening
app.listen(3000,()=>{
    console.log("Serving running at port",3000);
    console.log(`http://127.0.0.1:${port}`)})