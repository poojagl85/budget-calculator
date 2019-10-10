const express=require("express"),Router=express.Router(),queryModel=require("../models/qModel.js"),trialModel=require("../models/tModel.js"),bodyParser=require("body-parser"),urlencodedParser=bodyParser.urlencoded({extended:!1});Router.get("/",(e,r)=>{r.render("index.ejs")}),Router.get("/FreeTrial",(e,r)=>{r.render("freeTrial.ejs")}),Router.get("/Products",(e,r)=>{r.render("proDucts.ejs")}),Router.get("/Offers",(e,r)=>{r.render("offers.ejs")}),Router.get("/ContactUs",(e,r)=>{r.render("contactUs.ejs")}),Router.post("/FreeTrial",urlencodedParser,(e,r)=>{let o=new trialModel;o.custName=e.body.custName,o.custNumb=e.body.custNumb,o.carName=e.body.carName,o.carNumb=e.body.carNumb,o.save(e=>{e?console.log(e,"error"):r.redirect("/")})}),Router.post("/ContactUs",urlencodedParser,(e,r)=>{let o=new queryModel;o.custfName=e.body.custfName,o.custlName=e.body.custlName,o.custNumb=e.body.custNumb,o.custEmail=e.body.Email,o.messAge=e.body.messAge,o.save(e=>{e?console.log(e,"error"):r.redirect("/")})}),module.exports=Router;