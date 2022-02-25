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
        console.log("id", event.target.clientId.value)
        console.log("rua", event.target.rua.value)
        console.log("cidade", event.target.cidade.value)
        console.log("estado", event.target.estado.value)


        //if (!endereco.rua || !endereco.cidade || !endereco.estado) return;
          
        setEndereco({
          rua: event.target.rua.value,
          cidade: event.target.cidade.value,
          estado: event.target.estado.value,
          clientId: event.target.clientId.value,
        });
        
       

     props.addEndereco(endereco); 
        console.log("endereco: ",endereco)


       


        //  console.log("state endereco: ", endereco);*/



       // const { name, value } = event.target;
        console.log("deu boa ")
       // setEndereco({ ...endereco, [name]: value });

      };
      const FoneOnSubmit = (event) => {
        event.preventDefault(event);

        const { name, value } = event.target;

        setTelefone({ ...telefone, [name]: value });

        if (!telefone.numero_telefone) return;
        props.addTelefone(telefone);
        event.preventDefault();
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
                        clientId={cliente.id}
                        onSubmit={EndOnSubmit}
                      />
                      <FoneFormContainer
                        triggerText="Novo Telefone"
                        onSubmit={FoneOnSubmit}
                      />
                    </td>
                  </tr>

                  <Collapsible label="Ver Detalhes">
                    {cliente.endereco.length > 0 ? (
                      cliente.endereco.map((data, index) => (
                        <>
                          <tr key={index} className="row-buttons">
                            <td style={{ display: "flex, " }}>
                              {!data.principal
                                ? "Endereço:"
                                : "Endereço Principal:"}
                              : {data.rua}, {data.cidade}, {data.estado}{" "}
                              {data.clientId}
                            </td>

                            <button
                              className="button muted-button"

                              onClick={() => {
                                const confirmaDelete = window.confirm(
                                  `Confirma exclusão do endereço?`
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
