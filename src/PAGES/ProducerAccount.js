import React, { useContext } from "react";
import "../Styles/Style.css";
import TextField from "@material-ui/core/TextField";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import {AccountContext} from "../DATA/AccountProvider";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

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



//ürün ekleme

function ProducerAccount() {
  const classes = useStyles();

  const {UID, Title } = useContext(AccountContext); 


  const [Name, setName] = useState();
  const [Image, setImage] = useState();
  const [Description, setDescription] = useState();
  const [UnitPrice, setUnitPrice] = useState();
  const [Discount, setDiscount] = useState();
  const [TotalWeight, setTotalWeight] = useState();
  const [UnitWeight, setUnitWeight] = useState();
  const [PId, setPId] = useState();
  const [CId, setCId] = useState();
  


  axios
  .get(`https://localhost:44326/UserAcc/${UID}`)
  .then(resp => {
    setPId(resp.data.p_Id)
    console.log(PId)

  }).catch(e => console.log(e))


  let product = {
    Pt_Name: Name,
    Pt_Image: [0],
    Pt_Description : Description,
    Pt_UnitPrice : UnitPrice,
    Pt_Discount : Discount,
    Pt_TotalWeight : TotalWeight,
    Pt_UnitWeight : UnitWeight,
    P_Id : PId ,  
    C_Id : 1
  }

  const AddProduct =  () =>{


    axios
    .post(`https://localhost:44326/TarGet/Products`,product)
    .then(resp => {
      console.log(resp)
    }).catch(e => console.log(e))


  }

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
      pt_Image: Image,
      pt_Description: "string",
      pt_UnitPrice: 0,
      pt_Discount: 0,
      pt_TotalWeight: 0,
      pt_UnitWeight: 0,
      p_Id: 1,
      c_Id: 1
    
    }

    console.log(product)
    console.log(Image)
   
    
    axios
    .post(`https://localhost:44326/TarGet/Products`,product)
    .then(resp  =>{
      console.log(resp)
    })
    .catch(e => console.log(e))
    

  }


  return (
    <>
      <div className="add-product">
        <h1>Hello here you can add product </h1>
        <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={readFileDataAsBase64}
          />
                <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Resim yükle 
        </Button>
        <Button  >Gönder </Button>
        <Button  >Göster </Button>
      
      </label>
        <TextField
          id="standard-basic"
          value={Name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          label="Name"
        />
        <TextField
          id="standard-basic"
          value={Description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          label="Description"
        />
        <TextField
          id="standard-basic"
          value={UnitPrice}
          onChange={(event) => {
            setUnitPrice(event.target.value);
          }}
          label="Unit Price"
        />
        <TextField
          id="standard-basic"
          value={Discount}
          onChange={(event) => {
            setDiscount(event.target.value);
          }}
          label="Discount"
        />
        <TextField
          id="standard-basic"
          value={TotalWeight}
          onChange={(event) => {
            setTotalWeight(event.target.value);
          }}
          label="Total Weight"
        />
        <TextField
          id="standard-basic"
          value={UnitWeight}
          onChange={(event) => {
            setUnitWeight(event.target.value);
          }}
          label="Unit Weight"
        />
        <Button onClick={AddProduct}>Add Product</Button> 
      </div>
    </>
  );
}

export default ProducerAccount;
