export function clientPayload(nome, cpf) {
  return {
    nome: nome,
    cpf: cpf,
  };
}
export function enderecoPayload(rua, cidade, estado, principal, clientId) {
  return {
    rua: rua,
    cidade: cidade,
    estado: estado,
    principal: principal,
    clientId: clientId
  };
}

export function telefonePayload(telefone) {
  return {
    telefone: telefone,
  };
}
