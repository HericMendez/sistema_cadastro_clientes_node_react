import React, { useState } from "react";
import Collapsible from "./Collapsible";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { EndFormContainer } from "../forms/modalForm/endereco/EndFormContainer";
import { FoneFormContainer } from "../forms/modalForm/telefone/FoneFormContainer";


const TabelaClientes = (props) => {
  const initialEndState = { id: null, rua: "", cidade: "", estado: "", principal: true };
  const initialFoneState = { id: null, numero_telefone: "" };
  const [endereco, setEndereco] = useState(initialEndState)
  const [telefone, setTelefone] = useState(initialFoneState)


  const EndOnSubmit = (event) => {
    event.preventDefault(event);

    if (!endereco.rua || !endereco.cidade || !endereco.estado) return;

    props.addEndereco(endereco);

    console.log(event.target.rua.value);
    console.log(event.target.cidade.value);
    console.log(event.target.estado.value);
    console.log(event.target.value.principal)
  };
  const FoneOnSubmit = (event) => {
    event.preventDefault(event);

    if (!telefone.numero_telefone) return;

    props.addTelefone(telefone);
    
    console.log(event.target.fone.value);

  };

  return (
    <table>
      <tbody>
        {props.clientes.length > 0 ? (
          props.clientes.map((cliente, index) => (
            <>
              <tr key={cliente.id}>
                <td className="dadosprincipais">
                  <label>Nome:</label>
                  {cliente.nome}
                </td>
                <td className="dadosprincipais">
                  <label>CPF:</label>
                  {cliente.cpf}
                </td>

                <td className="row-buttons">
                  {console.log()}
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
                  cliente.endereco.map((data, i) => (
                    <>
                      <tr key={i} className="row-buttons">
                        <td style={{ display: "flex, " }}>
                          {data.rua}, {data.cidade}, {data.estado}
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
