const express=require('express');
const app= express();
const hbs = require('hbs');
const port=8000;
const path=require('path');
const staticpath=path.join(__dirname,"./public");
const template_path = path.join(__dirname, "./templates/views");
console.log(template_path);

const partials_path = path.join(__dirname, "./templates/partials");
console.log(partials_path);
app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
   res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
 })
 app.get("/about/*",(req,res)=>{
    res.render('error', {
        errorMsg : "Opps! page not found, Click Here to go"})
 })
 app.get("/weather",(req,res)=>{
    res.render("weater");
 })
 app.get("*",(req,res)=>{
    res.render('error', {
        errorMsg : "Opps! page not found, Click Here to go"})
 })
app.listen(port,()=>{
console.log(`Listen at ${port}`);
})