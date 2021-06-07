import Link from "next/link";
import { useState, useRef } from "react";
import cepPromisse from "cep-promise";

import createRegister from '../../server'

import styles from "../../styles/pages/Initial.module.css";
import style from "../../styles/pages/register.module.css";

export default function register() {
  const [buttonClient, setButtonClient] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmatePassword, setconfirmatePassword] = useState("false");
  const [name, setName] = useState("");
  const [cpfCNPJ, setcpfCNPJ] = useState("");
  const [phone, setPhone] = useState("false");
  const [cep, setCep] = useState("");
  const [cepState, setCepState] = useState("");
  const [cepCity, setCepCity] = useState("");
  const [cepStreet, setCepStreet] = useState("");
  const [number, setNumber] = useState("");

  const focusInputNumber = useRef();

  function clickButtonClient(e) {
    e.target;
    if (buttonClient) {
      setButtonClient(false);
    } else {
      setButtonClient(true);
    }
  }

  function registerClient() {
    if (email == "") {
      alert("email invalido");
    } else if (confirmatePassword != password) {
      alert("senhas não conferem");
    } else if (email == "") {
      alert("email invalido");
    } else if (name == "") {
      alert("nome invalido");
    } else if (cpfCNPJ == "") {
      alert("campo invalido");
    } else if (phone == "") {
      alert("telefone invalido");
    } else if (number == "") {
      alert("número invalido");
    } else  {
      const newRegister = {
        emailUser: email,
        password,
        typeUser: buttonClient,
        nameUser: name,
        cpfUser: cpfCNPJ,
        phoneUser: phone,
        cepUser: cep,
        endUser: cepState,
        cidUser: cepCity,
        ufUser: cepState,
        nEndUse: number
      }
      console.log('newRegister :>> ', newRegister);
      createRegister(newRegister)
    }
  }

  function verifyCep() {
    cepPromisse(cep)
      .then((res) => {
        setCepState(res.state);
        setCepCity(res.city);
        setCepStreet(res.street);
        console.log(res);
        handleFocusNumber();
      })
      .catch((err) => {
        console.log("Cep invalido");
        setCep("");
      });
  }

  function handleFocusNumber() {
    if (focusInputNumber.current) focusInputNumber.current.focus();
  }

  return (
    <div className={styles.initialContainer}>
      <div className={styles.textWelcome}>Cadastre-se</div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Digite seu melhor email"
          className={styles.input}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Criar uma senha"
          className={styles.input}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          placeholder="Confirmar senha"
          className={styles.input}
          onChange={(event) => setconfirmatePassword(event.target.value)}
        />

        <span className={style.titleTypeClient}>
          Tipo de conta que deseja criar:
        </span>

        <div className={style.clientOrService}>
          <div>
            <input
              type="radio"
              name="clientService"
              value="Cliente"
              defaultChecked
              onClick={(event) => clickButtonClient(event)}
            />
            <label>Cliente</label>
          </div>

          <div>
            <input
              type="radio"
              name="clientService"
              value="Service"
              onClick={(event) => clickButtonClient(event)}
            />
            <label>Manicure</label>
          </div>
        </div>

        <div className={style.titleInformationSerive}>
          Informações do cliente:
        </div>

        <div className={style.address}>
          <div className={style.adressContainer}>
            <input
              type="text"
              placeholder="Nome"
              className={styles.input}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={style.adressContainer}>
            {buttonClient ? (
              <input
                type="text"
                placeholder="CPNJ/MEI"
                className={styles.input}
                onChange={(event) => setcpfCNPJ(event.target.value)}
              />
            ) : (
              <input
                type="text"
                placeholder="CPF"
                className={styles.input}
                onChange={(event) => setcpfCNPJ(event.target.value)}
              />
            )}

            <input
              type="text"
              placeholder="Telefone"
              className={styles.input}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className={style.adressContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Cep"
              maxLength={8}
              onChange={(event) => setCep(event.target.value)}
              onBlur={verifyCep}
            />
          </div>
          <div className={style.adressContainer}>
            <input
              type="text"
              placeholder="Estado"
              className={styles.input}
              defaultValue={cepState}
              disabled="disabled"
            />
            <input
              type="text"
              placeholder="Cidade"
              className={styles.input}
              defaultValue={cepCity}
              disabled="disabled"
            />
          </div>
          <div className={style.adressContainer}>
            <input
              type="text"
              placeholder="Endereço"
              className={styles.input}
              defaultValue={cepStreet}
              disabled="disabled"
            />
            <input
              type="text"
              placeholder="Numero"
              className={styles.input}
              ref={focusInputNumber}
              onChange={(event) => setNumber(event.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          className={styles.button}
          onClick={registerClient}
        >
          Cadastrar
        </button>
      </form>

      <Link href="/login">
        <a type="button" className={styles.anchor}>
          Já tenho um cadastro
        </a>
      </Link>
    </div>
  );
}
