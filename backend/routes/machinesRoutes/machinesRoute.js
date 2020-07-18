const express = require("express");

const router = express.Router();

const MachineList = require("../../models/machines/machine");



router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body;

  const newMachineList = new MachineList(data);

  //save the data
  newMachineList.save((error) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "server error"
      });
    } else {
      res.json({
        msg: "data saved succefully"
      });
    }
  });
});



module.exports = router;
