var express=require("express");
var app = express();
var request = require("request");

app.get("/",function(req,res){
    var url = " http://dummy.restapiexample.com/api/v1/employees"
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var data = JSON.parse(body);//convert into object file
           res.render("home.ejs",{data:data});
        }
    })
   
})
app.listen(3000,function(){
    console.log("Employee Server started")
})