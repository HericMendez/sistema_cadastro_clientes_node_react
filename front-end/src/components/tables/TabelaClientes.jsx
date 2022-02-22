import React from "react";

const TabelaClientes = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nome </th>
        <th>CPF</th>
      </tr>
    </thead>
    <tbody>
      {props.clientes.length > 0 ? (
        props.clientes.map((cliente) => (
          <tr key={cliente.id}>
            {console.log(cliente.id)}
            <td>{cliente.nome}</td>
            <td>{cliente.cpf}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  const confirmaDelete = window.confirm(
                    `Confirma alteração de dados do cliente ${cliente.nome}?`
                  );
                  if (confirmaDelete) {
                    props.editaCliente(cliente);
                    window.location.reload();
                  } else {
                    return;
                  }
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
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TabelaClientes;
