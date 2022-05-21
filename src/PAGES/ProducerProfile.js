import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../DATA/AccountProvider";
import { TextField } from "@mui/material";
import "../Styles/Style.css";
import { Button } from "@mui/material";
import axios from "axios";

function ProducerProfile(props) {
  const {
    Mail,
    Password,
    Title,
    UID,
    setMail,
    setPassword,
    Name,
    Adress,
    Did,
    pCode,
    Phone,
    setName,
    setAdress,
    setDid,
    setpCode,
    setPhone,
    DescLName,
    Image,
    setDLN,
    setImage,
  } = useContext(AccountContext);
  const [label1, setLabel1] = useState("");
  const [label2, setLabel2] = useState("");
  const [TempPassword, setTempPassword] = useState("");

  let profile = {
    UA_Email: Mail,
    UA_Title: Title,
    UA_Password: Password,
  };



  useEffect(() => {
    if (Title === "Producer") {
      setLabel1("Şirket İsmi");
      setLabel2("Hakkınızda");
      axios
      .get(`https://localhost:44326/UserAcc/${UID}`)
      .then(resp => {
         if(resp != null)
           {
             setName(resp.data.p_Name)
             setDLN(resp.data.p_Description)
             setAdress(resp.data.p_Adress)
             setDid(resp.data.d_Id)
             setpCode(resp.data.p_PostalCode)
             setPhone(resp.data.p_Phone)
           }
     
      }).catch(e => { console.log(e)});

    }
    if (Title === "Customer") {
      setLabel1("İsminiz");
      setLabel2("Soyisminiz");
    }
  }, []);

  const AccountUpdate = () => {
    if (Password == TempPassword) {
      axios
        .put(`https://localhost:44326/TarGet/UserAcc/${UID}`, profile)
        .then((response) => {
          if (response.status == 200) {
            alert(response.status + " status updated");
          }
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      alert("Şifreleriniz uyuşmuyor");
    }
  };

  console.log(UID, Name);

  const ProfileUpdate = () => {

  };

  return (
    <>
      <div className="profile-form">
        <div className="profile-edit">
          <h2>Profil Bilgilerinizi buradan güncelleyebilirsiniz</h2>
          <TextField
            id="standard-basic"
            value={Name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            label={label1}
          />
          <TextField
            id="standard-basic"
            value={DescLName}
            onChange={(event) => {
              setDLN(event.target.value);
            }}
            label={label2}
          />
          <TextField
            id="standard-basic"
            value={Adress}
            onChange={(event) => {
              setAdress(event.target.value);
            }}
            label="Açık Adres"
          />
          <TextField
            id="standard-basic"
            value={pCode}
            onChange={(event) => {
              setpCode(event.target.value);
            }}
            label="Posta Kodu"
          />
          <TextField
            id="standard-basic"
            value={Phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            label="Telefon"
          />
          <Button variant="outlined" onClick={ProfileUpdate}>
            Profili Güncelle !
          </Button>
        </div>
        <div className="account-edit">
          <h2>Hesap Bilgilerinizi buradan güncelleyebilirsiniz</h2>
          <TextField
            id="standard-basic"
            value={Mail}
            onChange={(event) => {
              setMail(event.target.value);
            }}
            label="Email"
          />
          <TextField
            id="standard-basic"
            value={Password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            label="Şifre değiştir"
            type="password"
          />
          <TextField
            id="standard-basic"
            value={TempPassword}
            onChange={(event) => {
              setTempPassword(event.target.value);
            }}
            label="Yeni Şifre Tekrar"
            type="password"
          />
          <Button variant="outlined" onClick={AccountUpdate}>
            Hesap Bilgilerini Güncelle!
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProducerProfile;
