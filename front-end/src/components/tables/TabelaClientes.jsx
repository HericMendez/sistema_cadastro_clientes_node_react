    import React, { useState } from "react";
    import Collapsible from "./Collapsible";
    import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
    import { EndFormContainer } from "../forms/modalForm/endereco/EndFormContainer";
    import { FoneFormContainer } from "../forms/modalForm/telefone/FoneFormContainer";


    const TabelaClientes = (props) => {
      const initialEndState = {
        clientId: "",
        rua: "",
        cidade: "",
        estado: "",
        principal: false,
        clientId: "",
      };
      const initialFoneState = { id: "", numero_telefone: "" };
      const [endereco, setEndereco] = useState(initialEndState);
      const [telefone, setTelefone] = useState(initialFoneState);



      const EndOnSubmit = (event) => {
        event.preventDefault(event);


          
        setEndereco({
          rua: event.target.rua.value,
          cidade: event.target.cidade.value,
          estado: event.target.estado.value,
          clientId: event.target.clientId.value,
          principal: event.target.principal.checked
        });
        
       
      console.log(endereco)
      props.addEndereco(endereco); 

      

      };
      const FoneOnSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.numero_telefone.value)
 

        setTelefone( {
          numero_telefone: event.target.numero_telefone.value,
          clientId: event.target.clientId.value
          });

        if (!telefone.numero_telefone || !telefone.clientId) return;
        props.addTelefone(telefone);
        setTelefone(initialFoneState)

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
                            `Confirma exclus??o do cliente ${cliente.nome}?`
                          );
                          if (confirmaDelete) {
                            props.deletaCliente(cliente.id);
            
                            
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
                        triggerText="Novo Endere??o"
                        clientId={cliente.id}
                        onSubmit={EndOnSubmit}
                      />
                      <FoneFormContainer
                        triggerText="Novo Telefone"
                        clientId={cliente.id}
                        onSubmit={FoneOnSubmit}
                      />
                    </td>
                  </tr>

                  <Collapsible label="Ver Endere??os">
                    {cliente.endereco.length > 0 ? (
                      cliente.endereco.map((data, index) => (
                        <>
                          <tr key={index} className="row-buttons">
                            <td style={{ display: "flex, " }}>
                            <strong>{!data.principal
                                ? "Endere??o "
                                : "Endere??o Principal"}</strong>  
                              : <strong> {index+1}: </strong> - {data.rua}, {data.cidade}, {data.estado}
            
                            </td>

                            <button
                              className="button muted-button"

                              onClick={() => {
                                const confirmaDelete = window.confirm(
                                  `Confirma exclus??o do endere??o?`
                                );
                                if (confirmaDelete) {
                                  props.deletaEndereco(data.id);
                        
            
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
                        <td colSpan={3}>Nenhum endere??o</td>
                      </tr>
                    )}
                  </Collapsible>
                  <Collapsible label="Ver Telefones">
                    {cliente.telefone.length > 0 ? (
                      cliente.telefone.map((data, index) => (
                        <>
                          <tr key={index} className="row-buttons">
                            <td style={{ display: "flex, " }}>

                              <strong>Telefone {index+1}: </strong> - {data.numero_telefone}
                      
                            </td>

                            <button
                              className="button muted-button"

                              onClick={() => {
                                const confirmaDelete = window.confirm(
                                  `Confirma exclus??o do n??mero de telefone?`
                                );
                                if (confirmaDelete) {
                                  props.deletaTelefone(data.id);
                      
            
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
                        <td colSpan={3}>Nenhum telefone!</td>
                      </tr>
                    )}
                  </Collapsible>
                </>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Nenhum usu??rio cadastrado!</td>
              </tr>
            )}
          </tbody>
        </table>
      );
    };

    export default TabelaClientes;
