import React, { useContext, useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { AccountContext } from "../DATA/AccountProvider";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));





export default function UploadButtons() {
  const classes = useStyles();

  const {Mail,Password,Title, UID } = useContext(AccountContext);


  const [image, setImage] = useState();
  const [imgres,setImgres] = useState("");

  function  readFileDataAsBase64(e) {
    const file = e.target.files[0];

    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);

     reader.onload= () => {

      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result,
        file: file,
      };

      setImage(reader.result)
        console.log(fileInfo)
    }


    });
  }


  const onClick = () => {

    function base64ToArrayBuffer(base64) {
      
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint16Array(len);
      for (var i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
  }


  let product = {
    
      pt_Id: 0,
      pt_Name: "deneme1",
      pt_Image: image,
      pt_Description: "string",
      pt_UnitPrice: 0,
      pt_Discount: 0,
      pt_TotalWeight: 0,
      pt_UnitWeight: 0,
      p_Id: 1,
      c_Id: 1
    
    }

    console.log(product)
    console.log(image)
   
    
    axios
    .post(`https://localhost:44326/TarGet/Products`,product)
    .then(resp  =>{
      console.log(resp)
    })
    .catch(e => console.log(e))
    

  }

  const receive = () =>{
    axios
    .get("https://localhost:44326/TarGet/Products/5")
    .then(resp => {

      setImgres(resp.data.pt_Image)
    })
  }

 useEffect(() => {
  console.log(imgres)
 },[imgres])

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={readFileDataAsBase64}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
        <Button  onClick={onClick}>send </Button>
        <Button  onClick={receive}>display </Button>
      
      </label>

      <div>
      <p>{imgres}</p>
      </div>

      <div>
      <img src={imgres} />
      </div>
         
    </div>




  );
}
