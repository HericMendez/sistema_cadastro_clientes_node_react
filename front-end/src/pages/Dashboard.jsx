import { useEffect, useState } from "react";
import AddClienteForm from "../components/forms/AddClienteForm";
import EditaClienteForm from "../components/forms/EditaClienteForm";
import TabelaClientes from "../components/tables/TabelaClientes";
import connectApi from "../api";

const Dashboard = () => {

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
   await connectApi.get(`client/`)
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

    console.log('call api');
		let payload = generatePayload(cliente.nome, cliente.cpf);
    console.log(payload)
	connectApi.post(`/client/`, payload)
		.then(res => {
			console.log(res);
			setClientes([...clientes, res.data]);
		}).catch(err => {
			console.log(err);
		});

  };

  const editaCliente = (cliente) => {


    
    setModoEdicao(true);
    setClienteAtual({ id: cliente.id, nome: cliente.nome, cpf: cliente.cpf });

  };

  const atualizaCliente = (id, clienteAtualizado) => {
    console.log('call api');
		
		let payload = generatePayload(clienteAtualizado.nome, clienteAtualizado.cpf);;
		connectApi.patch(`/client/${id}`, payload)
		.then(res => {
			setClientes(clientes.map(cliente => (cliente.nome === id ? clienteAtualizado : cliente)))
			modoEdicao(false);
		}).catch(err => {
			console.log(err);
		});


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




  //não funciona
  const deletaCliente = (id) => {

   
   connectApi.delete(`/client/${id}` )
   .then(res => {
     setModoEdicao(false);
    setClientes(clientes.filter(cliente => cliente.nome !== id));

   }).catch(err => {
     console.log(err);
   });

  };
  function generatePayload(nome, cpf){
    return{
      nome: nome,
      cpf: cpf
    }
  }

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

export default Dashboard;

