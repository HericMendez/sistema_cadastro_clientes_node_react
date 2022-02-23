import React, { useState } from "react";
import AddEnderecoForm from "./AddEnderecoForm";

const AddClienteForm = (props) => {
  const initialFormState = { id: null, nome: "", cpf: "" };
  const [cliente, setCliente] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCliente({ ...cliente, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!cliente.nome || !cliente.cpf) return;

        props.addCliente(cliente);
        setCliente(initialFormState);
      }}
    >
      <div>
        <div className="side-by-side">
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleInputChange}
            placeholder="Nome"
          />

          <input
            type="text"
            name="cpf"
            value={cliente.cpf}
            onChange={handleInputChange}
            placeholder="CPF"
          />
        </div>

      </div>
      <button>Cadastrar</button>
    </form>
  );
};

export default AddClienteForm;
