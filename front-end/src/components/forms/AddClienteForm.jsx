
import React, { useState } from "react";

const AddClienteForm = (props) => {
    const initialFormState = { id: null, nome: '', cpf: '' }
    const [cliente, setCliente] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setCliente({ ...cliente, [name]: value })
	}
    return (
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                if(!cliente.nome || !cliente.cpf) return;

                props.addCliente(cliente);
                setCliente(initialFormState);

            }}
        >
            <label>Nome</label>
            <input
                type="text"
                name="nome"
                value={cliente.nome}
                onChange={handleInputChange}
    
            />
            <label>CPF</label>
            <input
                type="text"
                name="cpf"
                value={cliente.cpf}
                onChange={handleInputChange}

            />
            <button>Cadastrar</button>
        </form>
    )
}

export default AddClienteForm;


