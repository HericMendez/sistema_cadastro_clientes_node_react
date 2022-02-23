import { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';


const Login = () => {


  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <>
      <BrowserRouter>
        <Route></Route>
        <div className="user-login">
          <h1 className="user-login__title">Betha Sistemas</h1>
          <form autoComplete="off">
            <div className="user-login__form-control">
              <label htmlFor="email">E-mail</label>
              <input
                id="usuario"
                type="text"
                name="usuario"
                autoComplete="off"
              />
            </div>
            <div className="user-login__form-control">
              <label htmlFor="password">Senha</label>
              <input id="senha" type="password" name="senha" />
            </div>
            <button type="submit" className=" button user-login__submit-button">
              Login
            </button>
            <p className="user-login__text">OU</p>
            <button
              type="submit"
              theme=""
              className="button muted-button user-login__google-button"
            >
              Login com Google
            </button>
            
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);
            <div className="user-login__text">
              Não tem uma conta?<Link to="/">Registre-se</Link>
            </div>
          </form>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Login;
