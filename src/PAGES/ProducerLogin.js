import React from "react";

import "../Styles/layout1.css";
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

function ProducerLogin() {
    const classes = useStyles();

    const [UserName, setUserName] = React.useState("");
    const [Password, setPassword] = React.useState("");
  
    const onClick = () => {
        console.log("Password : ", Password, "  username ", UserName);
      };

    return ( 
        <>
        
        <div className="login-register-box">
        <form className={classes.root} autoComplete="off">
          <h1> Merhaba! TarGet'a hoşgeldiniz, lütfen giriş yapın </h1>
          <div className={classes.root}>
            <TextField
              id="standard-basic"
              value={UserName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              label="Kullanıcı ismi "
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
            <Button variant="outlined" onClick={onClick}>
              Giriş Yapın!
            </Button>
          </div>
        </form>
      </div>
        
        
        </>
    )
    
}

export default ProducerLogin;