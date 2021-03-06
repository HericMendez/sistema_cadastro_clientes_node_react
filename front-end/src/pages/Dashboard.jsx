import { useEffect, useState } from "react";
import AddClienteForm from "../components/forms/AddClienteForm";
import EditaClienteForm from "../components/forms/EditaClienteForm";
import TabelaClientes from "../components/tables/TabelaClientes";
import * as Payload from "./payload";

import connectApi from "../api";

const Dashboard = () => {
  useEffect(() => {
    getClientApi();
    getEndApi();
    getFoneApi();


  }, []);
  const initialFormState = { id: "", nome: "", cpf: "" };

  let clientsData = [];
  const [clientes, setClientes] = useState(clientsData);

  let enderecoData = [];
  const [enderecos, setEnderecos] = useState(enderecoData);

  let fonesData = [];
  const [telefones, setTelefones] = useState(fonesData);

  const [modoEdicao, setModoEdicao] = useState(false);
  const [clienteAtual, setClienteAtual] = useState(initialFormState);

  async function getClientApi() {
    await connectApi
      .get(`/client/`)
      .then((res) => {
        if (res.data == null) clientsData = [];
        else clientsData = res.data;

        setClientes(clientsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getEndApi() {
    await connectApi
      .get(`/enderecos/`)
      .then((res) => {
        if (res.data == null) enderecoData = [];
        else enderecoData = res.data;

        setEnderecos(enderecoData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getFoneApi() {
    await connectApi
      .get(`/telefones/`)
      .then((res) => {
        if (res.data == null) fonesData = [];
        else fonesData = res.data;
        setTelefones(fonesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const addCliente = (cliente) => {

    let payload = Payload.clientPayload(cliente.nome, cliente.cpf);

    connectApi
      .post(`/client/`, payload)
      .then((res) => {
        setClientes([...clientes, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addEndereco = (endereco) => {
    let payload = Payload.enderecoPayload(
      endereco.rua,
      endereco.cidade,
      endereco.estado,
      endereco.principal,
      endereco.clientId
    );

    connectApi
      .post(`/enderecos/`, payload)
      .then((res) => {
        setEnderecos([...enderecos, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTelefone = (numero_telefone) => {
    let payload = Payload.telefonePayload(
      numero_telefone.numero_telefone,
      numero_telefone.clientId
    );
    console.log(payload);
    connectApi
      .post(`/telefones/`, payload)
      .then((res) => {
        setTelefones([...telefones, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editaCliente = (cliente) => {
    setModoEdicao(true);
    setClienteAtual({ id: cliente.id, nome: cliente.nome, cpf: cliente.cpf });
  };

  const atualizaCliente = (id, clienteAtualizado) => {
    console.log("call api");

    let payload = Payload.clientPayload(
      clienteAtualizado.nome,
      clienteAtualizado.cpf
    );
    connectApi
      .patch(`/client/${id}`, payload)
      .then((res) => {
        setClientes(
          clientes.map((cliente) =>
            cliente.nome === id ? clienteAtualizado : cliente
          )
        );
        modoEdicao(false);
      })
      .catch((err) => {
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
    se for igual ?? do estado atual, altere (cliente atualizado); 
    se n??o for, mantenha o valor atual (cliente). 
    */
  };

  const deletaCliente = (id) => {
    connectApi
      .delete(`/client/${id}`)
      .then((res) => {
        setModoEdicao(false);
        setClientes(clientes.filter((cliente) => cliente.nome !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletaEndereco = (id) => {
    connectApi
      .delete(`/enderecos/${id}`)
      .then((res) => {
        setModoEdicao(false);
        setEnderecos(enderecos.filter((endereco) => endereco.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletaTelefone = (id) => {
    connectApi
      .delete(`/telefones/${id}`)
      .then((res) => {
        setModoEdicao(false);
        setClientes(
          enderecos.filter((telefone) => telefone.numero_telefone !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Betha Sistemas - Cadastro de Clientes</h1>
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
            enderecos={enderecos}
            editaCliente={editaCliente}
            deletaCliente={deletaCliente}
            addEndereco={addEndereco}
            addTelefone={addTelefone}
            deletaEndereco={deletaEndereco}
            deletaTelefone={deletaTelefone}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
