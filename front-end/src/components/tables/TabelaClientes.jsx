import React from "react";
import Collapsible from "./Collapsible";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";

const TabelaClientes = (props) => (
  <table>
    <tbody>
      {props.clientes.length > 0 ? (
        props.clientes.map((cliente, index) => (
          <>
            <tr key={cliente.id}>
              <td className="dadosprincipais">
                <caption>Nome:</caption> {cliente.nome}
              </td>
              <td className="dadosprincipais">
                <caption>CPF:</caption>
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
                <button className="button muted-button">Novo Endereço</button>
                <button className="button muted-button">Novo Telefone</button>
   


                
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

export default TabelaClientes;
