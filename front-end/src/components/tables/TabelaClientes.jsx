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
            <td>{cliente.nome}</td>
            <td>{cliente.cpf}</td>
            <td>
              <button 
              className="button muted-button"
              onClick={() => props.editaCliente(cliente)}
              >Alterar</button>
              <button
                className="button muted-button"
                onClick={() => props.deletaCliente(cliente.id)}
              >Excluir</button>
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
