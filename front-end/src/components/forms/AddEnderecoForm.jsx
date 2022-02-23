import React, { useState } from "react";

const AddEnderecoForm = (props) => {
  const initialFormState = { id: null, nome: "", cpf: "" };
  const [endereco, setEndereco] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEndereco({ ...endereco, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {

      }}
    >
      <div>
        <div className="side-by-side">
          <input
            type="text"
            name="rua"

            onChange={handleInputChange}
            placeholder="Endereço (Rua/Avenida, nº, Bairro)"
          />

          <input
            type="text"
            name="cidade"

            placeholder="Cidade"
          />
        </div>


        <div className="side-by-side">
          <input
            type="text"
            name="estado"

            placeholder="Estado"
          />

        </div>
      </div>

    </form>
  );
};

export default AddEnderecoForm;
