import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()) 


const client = new MongoClient("mongodb+srv://<db_username>simpleCrudApi:QzUqpQpJQEY0xqHT@cluster0.tp9jxuf.mongodb.net/");


app.get('/' , (req,res)=>{
  res.send("This is from Express")
})

app.post('/User' , (req,res)=>{
  res.send()
})

app.listen(PORT,()=>{
  console.log(`This is from prot${PORT}`)
})