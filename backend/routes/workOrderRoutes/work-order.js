const express = require("express");
const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");

router.post("/",(req,res)=>{

  WorkOrder.findOne({}, {}, { sort: { 'created_at' : -1 } }, (err, post) =>{
    const obj = post
    if(err){
      console.log(err)
    }
    obj = JSON.stringify(obj)
    console.log( obj );
  });
  var small = new WorkOrder(req.body);
   small.save(function (err) {
  if (err) console.log(err);
  else{
    console.log("saved")
  }
});

})


module.exports = router