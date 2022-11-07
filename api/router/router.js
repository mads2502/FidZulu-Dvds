const { Router } = require("express");
const express=require("express");
const router=express.Router();

const {getTeam, getDvds,insertDvds}=require("../controller/api");

router.route('/dvds').get(getDvds).post(insertDvds);
router.route("/team").get(getTeam);
module.exports=router;