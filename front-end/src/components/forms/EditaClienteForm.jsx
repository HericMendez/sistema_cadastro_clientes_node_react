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
        event.preventDefault();

        props.atualizaCliente(cliente.id, cliente);
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
