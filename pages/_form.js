import React from 'react';

const Form = ({ value, loading, error, buttonAction, changeUser }) => (
  <div className="formContainer">
    <input
      type="text"
      className="userInput"
      value={value}
      placeholder="Digite o CNPJ"
      onChange={(e) => changeUser(e.target.value)}
    />
    <button className="searchButton" onClick={buttonAction}>
      Buscar{' '}
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default Form;
