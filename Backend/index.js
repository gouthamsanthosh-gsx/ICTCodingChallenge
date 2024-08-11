const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
var {EmpModel} = require("./model");

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    await EmpModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    await EmpModel.findByIdAndUpdate(id,req.body);
    res.send({ message: "Employee updated" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    const result = await EmpModel.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await EmpModel.findByIdAndDelete(id);
    res.send({ message: "Employee deleted" });
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
