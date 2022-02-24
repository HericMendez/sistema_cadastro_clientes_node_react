import React from 'react';

export const EnderecoPopupForm = ({ onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Novo Endereço</label>
        <input 
        className="form-control"
         id="name"
         name="rua" 
         type="text"
         placeholder='Endereço (Rua/Av., nº,complemento, bairro, '
         />
      </div>
      <div className="form-group">
        <label>Cidade</label>
        <input
          type="text"
          className="form-control"
          id="cidade"
          name="cidade" 
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label>Estado</label>
        <input
          type="text"
          className="form-control"
          id="estado"
          name="estado" 
          placeholder=""
        />
      </div>
      <label>
        <input type="checkbox"
        id="check"
        name="check" />
             Este é meu endereço principal
      </label>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Cadastrar
        </button>
      </div>
    </form>
  );
};
export default EnderecoPopupForm;
