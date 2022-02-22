import React, { useState, useEffect } from "react"



const EditaClienteForm = (props) => {
  const [cliente, setCliente] = useState(props.clienteAtual);

  useEffect(() => {
    setCliente(props.clienteAtual)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCliente({ ...cliente, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        const confirmaDelete = window.confirm(
          `Confirma alteração de dados do cliente ${cliente.nome}?`
        );
        if (confirmaDelete) {
          props.atualizaCliente(cliente.id, cliente);
          window.location.reload();
        } else {
          return;
        }
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        value={cliente.nome}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <label>CPF</label>
      <input
        type="text"
        name="cpf"
        value={cliente.cpf}
        onChange={handleInputChange}
      />
      <button>Atualizar</button>

      <button
        onClick={() => props.setModoEdicao(false)}
        className="button muted-button"
      >Cancelar</button>
    </form>
  );
};

export default EditaClienteForm;
