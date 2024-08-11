import { Box, Button, TextField } from "@mui/material";
import  { useState } from "react";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
	var state = location.state;
  if (state === null) {
    state = {};
  }
  var [inputs, setInputs] = useState({
    EmpName: state.EmpName,
    designation: state.designation,
    empId:state.empId,
    img_url: state.img_url
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };
  const addData = (index) => {
    if (Object.keys(state).length === 0) {
      axios.post("http://localhost:3001/add",inputs)
      .then(
        (res)=>{
          alert("Employee added");
          navigate("/");
        }
      ).catch(
        (err)=>{
          alert(err.response.data);
        }
      );
    }
    else {
      axios.post("http://localhost:3001/update/" + index,inputs)
      .then(
        (res)=>{
          alert("Employee updated");
          navigate("/");
        }
      ).catch(
        (err)=>{
          alert(err.response.data);
        }
      );
    }
  };
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.EmpName}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline={4}
            />
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            />
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
           

            <Button variant="contained" color="secondary" onClick={()=>{addData(state._id)}}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
