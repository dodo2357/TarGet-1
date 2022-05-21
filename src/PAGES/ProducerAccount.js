import React, { useContext } from "react";
import "../Styles/Style.css";
import TextField from "@material-ui/core/TextField";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import {AccountContext} from "../DATA/AccountProvider";
import axios from "axios";


//ürün ekleme

function ProducerAccount() {

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


  return (
    <>
      <div className="add-product">
        <h1>Hello here you can add product </h1>
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
