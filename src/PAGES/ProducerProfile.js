import React, { useContext } from "react";
import { AccountContext } from "../DATA/AccountProvider";
import { TextField } from "@mui/material";
import "../Styles/Style.css";

function ProducerProfile(props) {
  const { Mail, Password, Title, UID , setMail, setPassword } = useContext(AccountContext);

  return (
    <>
      <div classname="profile-edit">
        <TextField
          id="standard-basic"
          value={Mail}
          onChange={(event) => {
            setMail(event.target.value);
          }}
          label="Mail"
        />
        <TextField
          id="standard-basic"
          value={Mail}
          onChange={(event) => {
            setMail(event.target.value);
          }}
          label="Mail"
        />
        <TextField
          id="standard-basic"
          value={Mail}
          onChange={(event) => {
            setMail(event.target.value);
          }}
          label="Mail"
        />
      </div>
    </>
  );
}

export default ProducerProfile;
