import React from "react";

export const TelefonePopupForm = (obj) => {
  return (
    <form onSubmit={obj.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Novo número de telefone</label>
        <input
          className="form-control"
          id="numero_telefone"
          type="text"
          name="numero_telefone"
          placeholder="(99)99999-9999"
        />
      </div>

      <input type="text" name="clientId" id="clientId" value={obj.clientId} />

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Cadastrar
        </button>
      </div>
    </form>
  );
};
export default TelefonePopupForm;
