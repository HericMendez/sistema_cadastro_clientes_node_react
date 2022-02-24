import React from 'react';

export const TelefonePopupForm = ({ onSubmit }, props) => {
  console.log(props)

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Novo número de telefone</label>
        <input 
        className="form-control"
         id="fone" 
         type="text"
         name="fone"
         
         placeholder='(99)99999-9999'
         />
      </div>
      
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default TelefonePopupForm;
