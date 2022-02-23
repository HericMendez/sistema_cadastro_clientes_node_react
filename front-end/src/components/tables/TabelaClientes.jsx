import React from "react";
import Collapsible from "./Collapsible";

const TabelaClientes = (props) => (
  <table>
    <tbody>
      {props.clientes.length > 0 ? (
        props.clientes.map((cliente, index) => (
          <>
            <tr key={cliente.id}>
              <td className="dadosprincipais">Nome: {cliente.nome}</td>
              <td className="dadosprincipais">CPF: {cliente.cpf}</td>

              <td className="row-buttons">
                {console.log()}
                <button
                  className="button muted-button "
                  onClick={() => {
                    props.editaCliente(cliente);
                  }}
                >
                  Alterar
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
                  Excluir
                </button>
              </td>
            </tr>
            <Collapsible label="Ver detalhes">
              <tr>
                <th>Endereço</th>
              </tr>
              <hr />

              {cliente.endereco.length > 0 ? (
                cliente.endereco.map((data, i) => (
                  <>
                    <tr key={i} className="row-buttons">
                      <td style={{display: "flex, "}}>
                        {data.rua}, {data.cidade}, {data.estado} - {data.cep}
                      </td>

                      <button
                        className="button muted-button "
                        onClick={() => {}}
                      >
                        Alterar
                      </button>
                      <button
                        className="button muted-button"
                        onClick={() => {
                            

                          const confirmaDelete = window.confirm(
                            `Confirma exclusão do endereço?`
                          );
                          if (confirmaDelete) {
                              console.log("aaaa:", data.id)
                              props.deletaEndereco(data.id)
                              window.location.reload()
                          } 
                        }}
                      >
                        Excluir
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
