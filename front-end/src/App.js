import { useState } from "react";
import AddClienteForm from "./components/forms/AddClienteForm";
import EditaClienteForm from "./components/forms/EditaClienteForm";
import TabelaClientes from "./components/tables/TabelaClientes";


const App = () => {
  const DadosClientes = [
    { id: 1, nome: "Tania", cpf: "12345678900" },
    { id: 2, nome: "Craig", cpf: "32165498710" },
    { id: 3, nome: "Ben", cpf: "11122233344" },
  ];
  const initialFormState = { id: null, nome: "", cpf: "" };
  const [clientes, setClientes] = useState(DadosClientes);
  const [modoEdicao, setModoEdicao] = useState(false);


  const [clienteAtual, setClienteAtual] = useState(initialFormState);

  const addCliente = (cliente) => {
    cliente.id = clientes.length + 1;
    setClientes([...clientes, cliente]);
  };

  const editaCliente = (cliente) => {
    setModoEdicao(true);
    setClienteAtual({ id: cliente.id, nome: cliente.nome, cpf: cliente.cpf });
  };

  const atualizaCliente =(id, clienteAtualizado)=>{
    setModoEdicao(false)
    setClientes(clientes.map((cliente)=>(cliente.id===id ? clienteAtualizado : cliente)));

    /*
    which means: 
    procure a id do cliente em 'clientes', 
    se for igual à do estado atual, altere (cliente atualizado); 
    se não for, mantenha o valor atual (cliente). 
    */
  }

  const deletaCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  return (
    <div className="container">
      <h1>React Frontend</h1>
      <div className="flex-row">
      <div className="flex-large">
      {modoEdicao ? (
        <div>
          <h2>Atualizar Cadastro</h2>
          <EditaClienteForm 
          modoEdicao={modoEdicao}
          clienteAtual={clienteAtual}
          atualizaCliente={atualizaCliente}
          />
        </div>
        ):(
          <div>
            <h2>Novo Cliente</h2>
          <AddClienteForm addCliente={addCliente} />
          </div>
      )}
        </div>
        <div className="flex-large">
          <h2>Lista de Clientes</h2>
          <TabelaClientes
            clientes={clientes}
            editaCliente={editaCliente}
            deletaCliente={deletaCliente}
          />
        </div>
      </div>
    </div>
  );
};

export default App;


/*

        <div className="flex-large">
          <h2>Novo Cliente</h2>
          <AddClienteForm addCliente={addCliente} />
        </div>
        */