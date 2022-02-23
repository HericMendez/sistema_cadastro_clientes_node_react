import React from "react";

const TabelaEnderecos = (props) => (
  
  <table>

    <tbody>
      {props.length > 0 ? (
        props.map((prop, index) => (
          <>
            <tr key={prop.id}>
 

              <td>{prop.rua}</td>

              <td>{prop.cidade}</td>

            </tr>

          </>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nenhum endereço cadastrado!</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TabelaEnderecos;
