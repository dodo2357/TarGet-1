import { createContext, useState } from "react";
import React from "react";

const AccountContext = createContext();

function AccountProvider(props) {
  const [Mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [Title, setTitle] = useState("");
  const [UID, setUID] = useState();

  return (
    <AccountContext.Provider
      value={{
        Mail: Mail,
        Password: Password,
        Title: Title,
        UID: UID,
        setMail,
        setPassword,
        setTitle,
        setUID,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}

export {AccountContext, AccountProvider};