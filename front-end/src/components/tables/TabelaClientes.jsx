import React, { useState } from "react";
import Collapsible from "./Collapsible";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { EndFormContainer } from "../forms/modalForm/endereco/EndFormContainer";
import { FoneFormContainer } from "../forms/modalForm/telefone/FoneFormContainer";






const TabelaClientes = (props) => {
  const initialEndState = { id: '', rua: "", cidade: "", estado: "", principal: true, clientId: '' };
  const initialFoneState = { id: '', numero_telefone: "" };
  const [endereco, setEndereco] = useState(initialEndState)
  const [telefone, setTelefone] = useState(initialFoneState)



  function ehPrincipal(value){
    let ehprincipal = ""
    if(value){ehPrincipal="<label>Endereço</label>"}
    else{console.log("a")};
  }
 
/*
  const handleEnderecoChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(event.target)
    setEndereco({ ...endereco, [name]: value });
  };

  const handleFoneChange = (event) => {
    const { name, value } = event.target;
    
    setTelefone({ ...telefone, [name]: value });
  };
*/
  const EndOnSubmit = (event) => {
    event.preventDefault(event);

   //if (!endereco.rua || !endereco.cidade || !endereco.estado) return;

    
    //setEndereco({ rua: event.target.rua.value, cidade: event.target.cidade.value, estado: event.target.estado.value, clientId: props.endereco.clientId})
    const { name, value } = event.target;

    setEndereco({ ...endereco, [name]: value });
    console.log("a   ", props.enderecos.clientId[0])
    


  //  console.log("state endereco: ", endereco);
    
     //  console.log(event.target.cidade.value);
    //console.log(event.target.cidade.value);
   // console.log(event.target.cidade.valuel)

  };
  const FoneOnSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target)
 
   const { name, value } = event.target;

    setTelefone({ ...telefone, [name]: value });
    
    if (!telefone.numero_telefone) return;
    props.addTelefone(telefone);
    
    console.log(event.target.fone.value);
    console.log(telefone)

  };

  return (
    <table>
      <tbody>
        {props.clientes.length > 0 ? (
          props.clientes.map((cliente, index) => (
            <>
              <tr key={index}>
                <td className="dadosprincipais">
                  <label>Nome:</label>
                  {cliente.nome}
                </td>
                <td className="dadosprincipais">
                  <label>CPF:</label>
                  {cliente.cpf}
                </td>
                <td className="dadosprincipais">
                  <label>id:</label>
                  {cliente.id}
                </td>
                <td className="dadosprincipais">
                  <label>id:</label>
          
                </td>
              
 
                <td className="row-buttons">
                

                  <button
                    className="button muted-button "
                    onClick={() => {
                      props.editaCliente(cliente);
                    }}
                  >
                    <BsPencilSquare />
                  </button>

                  <button
                    className="button muted-button"
                    onClick={() => {
                      const confirmaDelete = window.confirm(
                        `Confirma exclusão do cliente ${cliente.nome}?`
                      );
                      if (confirmaDelete) {
                        props.deletaCliente(cliente.id);
                       // window.location.reload();
                      } else {
                        return;
                      }
                    }}
                  >
                    <BsTrashFill />
                  </button>
                </td>
              </tr>
              <tr>
                <th> </th>
                <td>
                  <EndFormContainer
                    triggerText="Novo Endereço"
                    
                    onSubmit={EndOnSubmit()}
                    
                    
                  />
                   <FoneFormContainer
                    triggerText="Novo Telefone"
                    onSubmit={FoneOnSubmit}
                  />
                </td>
              </tr>
              {console.log(cliente.id)}

              <Collapsible label="Ver Detalhes">
                {cliente.endereco.length > 0 ? (
                  cliente.endereco.map((data, index) => (
                    <>
                      <tr key={index} className="row-buttons">
                        <td style={{ display: "flex, " }}>
                          { data.rua}, {data.cidade}, {data.estado} {data.clientId} 
                        </td>

                        <button
                          className="button muted-button"
                          className="button muted-button"
                          onClick={() => {
                            const confirmaDelete = window.confirm(
                              `Confirma exclusão do endereço?`
                            );
                            if (confirmaDelete) {
                              console.log("aaaa:", data.id);
                              props.deletaEndereco(data.id);
                              window.location.reload();
                            }
                          }}
                        >
                          <BsTrashFill />
                        </button>
                      </tr>
                      <hr />
                    </>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>Nenhum endereço</td>
                  </tr>
                )}
              </Collapsible>
            </>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Nenhum usuário cadastrado!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
  
};

export default TabelaClientes;
