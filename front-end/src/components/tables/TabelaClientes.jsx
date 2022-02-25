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
        });
        
       

      props.addEndereco(endereco); 
      window.location.reload();


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
        window.location.reload();
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
                            `Confirma exclusão do cliente ${cliente.nome}?`
                          );
                          if (confirmaDelete) {
                            props.deletaCliente(cliente.id);
                            window.location.reload();
                            
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

                  <Collapsible label="Ver Endereços">
                    {cliente.endereco.length > 0 ? (
                      cliente.endereco.map((data, index) => (
                        <>
                          <tr key={index} className="row-buttons">
                            <td style={{ display: "flex, " }}>
                            <strong>{!data.principal
                                ? "Endereço "
                                : "Endereço Principal"}</strong>  
                              : <strong> {index}: </strong> - {data.rua}, {data.cidade}, {data.estado}
            
                            </td>st

                            <button
                              className="button muted-button"

                              onClick={() => {
                                const confirmaDelete = window.confirm(
                                  `Confirma exclusão do endereço?`
                                );
                                if (confirmaDelete) {
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
                  <Collapsible label="Ver Telefones">
                    {cliente.telefone.length > 0 ? (
                      cliente.telefone.map((data, index) => (
                        <>
                          <tr key={index} className="row-buttons">
                            <td style={{ display: "flex, " }}>

                              <strong>Telefone {index}: </strong> - {data.numero_telefone}
                      
                            </td>

                            <button
                              className="button muted-button"

                              onClick={() => {
                                const confirmaDelete = window.confirm(
                                  `Confirma exclusão do número de telefone?`
                                );
                                if (confirmaDelete) {
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
                        <td colSpan={3}>Nenhum telefone!</td>
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
