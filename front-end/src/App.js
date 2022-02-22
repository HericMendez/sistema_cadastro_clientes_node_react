import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const [usuario, setUsuario] = useState({id: '1', nome: 'Dio'})
  

  if(usuario===null){
    return <Login />
  }else{
    
  }



  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

export default App;

