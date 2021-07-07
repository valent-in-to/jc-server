 express = require('express');
 const cors = require('cors')
 const fs = require("fs");
 const database = require('./database/database')
 const Day = require('./database/Day')

 let json;

function readJsonFileSync(filepath, encoding){

 if (typeof (encoding) == 'undefined'){
     encoding = 'utf8';
 }
 var file = fs.readFileSync(filepath, encoding);
 return JSON.parse(file);
}

const app = express()
app.use(express.json())
app.use(cors())

app.get('', async (req,res)=>{
  console.log('get')
  let days_db = await Day.findAll()
  let processed_res = []
  
  for(let i = 1; i < 13; i++)
  {
    let month = {'mes': i, dias: []}
    month.dias = (days_db.filter(x => x.mes == i))
    processed_res.push(month)
  }
  return res.send(processed_res)
  // readJsonFileSync('./28-6.json')
})

const PORT = process.env.PORT | 3000
app.listen(PORT, '0.0.0.0', () => 
  {
    database.authenticate().then( () => 
    {
      database.sync()
      console.log("connected to db")
    }).catch(err => console.log(err))
    console.log(`listening on port ${PORT}...`)
  })
