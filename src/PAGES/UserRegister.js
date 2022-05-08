import React from "react";

import "../Styles/Style.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function UserRegister() {
  const classes = useStyles();

  const [Name, setName] = React.useState("");
  const [text2, settext2] = React.useState("");
  const [Adress, setAdress] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [PostalCode, setPostalCode] = React.useState("");
  const [Tel, setTel] = React.useState("");

  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const onClick = () => {
    console.log(
      Email,
      Password,
      Name,
      text2,
      Adress,
      District,
      PostalCode,
      Tel
    );
  };

  return (
    <>
      <div className="login-register-box">
        <form className={classes.root} autoComplete="off">
          <h1>
            {" "}
            Merhaba! TarGet'a hoşgeldiniz Kayıt olmak için aşağıdaki bilgileri
            giriniz.{" "}
          </h1>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={Email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              label="E-posta/Kullanıcı adı "
            />
          </div>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={Password}
              label="Şifre "
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            />
          </div>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={Name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              label="İsminiz "
            />
          </div>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={text2}
              onChange={(event) => {
                settext2(event.target.value);
              }}
              label=" "
            />
          </div>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={Adress}
              onChange={(event) => {
                setAdress(event.target.value);
              }}
              label="Açık adres"
            />
          </div>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={District}
              onChange={(event) => {
                setDistrict(event.target.value);
              }}
              label="Mahalle "
            />
          </div>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={PostalCode}
              onChange={(event) => {
                setPostalCode(event.target.value);
              }}
              label="Posta Kodu "
            />
          </div>

          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={Tel}
              onChange={(event) => {
                setTel(event.target.value);
              }}
              label="Telefon numarası"
            />
          </div>
          <div className={classes.root}>
            <Button variant="outlined" onClick={onClick}>
              Kayıt Ol! 
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserRegister;
