import { useEffect, useState } from "react";
import AddClienteForm from "./components/forms/AddClienteForm";
import EditaClienteForm from "./components/forms/EditaClienteForm";
import TabelaClientes from "./components/tables/TabelaClientes";
import Api from "./api";

const App = () => {

  useEffect(() => {
    getClientApi();
    
    console.log("renderizou");
  }, []);
  const initialFormState = { id: null, nome: "", cpf: "" };
  


  let clientsData = [];
  const [clientes, setClientes] = useState(clientsData);

  const [modoEdicao, setModoEdicao] = useState(false);
  const [clienteAtual, setClienteAtual] = useState(initialFormState);

  async function getClientApi(){
   await Api.get(`client/`)
      .then((res) => {
        console.log("data from API:", res.data);
        if(res.data == null)
				clientsData = [];
			else
				clientsData = res.data;

			setClientes(clientsData);

      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(clientes)
  const addCliente = (cliente) => {
    cliente.id = clientes.length + 1;
    setClientes([...clientes, cliente]);
  };

  const editaCliente = (cliente) => {


    
    setModoEdicao(true);
    setClienteAtual({ id: cliente.id, nome: cliente.nome, cpf: cliente.cpf });

  };

  const atualizaCliente = (id, clienteAtualizado) => {
    setModoEdicao(false);
    setClientes(
      clientes.map((cliente) =>
        cliente.id === id ? clienteAtualizado : cliente
      )
    );

    /*
    which means: 
    procure a id do cliente em 'clientes', 
    se for igual à do estado atual, altere (cliente atualizado); 
    se não for, mantenha o valor atual (cliente). 
    */
  };

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
          ) : (
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
