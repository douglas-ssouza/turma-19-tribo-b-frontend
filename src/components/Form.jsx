import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Pessoal</legend>
          <label htmlFor="input-name">
            Nome:
            <input type="text" id="input-name"/>
          </label>
          <br />
          <label htmlFor="input-email">
            Email:
            <input type="email" id="input-email"/>
          </label>
          <br />
          <label htmlFor="input-age">
            Idade:
            <input type="number" id='input-age' />
          </label>
          <br />
        </fieldset>
        <fieldset>
          <legend>Profissional</legend>
          <label htmlFor="description">
            Descrição:
            <textarea
              id="description"
              cols="50"
              rows="3"
            ></textarea>
          </label>
          <br />
          <select defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>Selecione seu estado</option>
            <option value="sp">São Paulo</option>
            <option value="rs">Rio Grande do Sul</option>
            <option value="to">Tocantins</option>
            <option value="ac">Acre</option>
            <option value="ms">Mato Grosso do Sul</option>
          </select>
          <br />
          <label htmlFor="check-emails">
            <input type="checkbox" id='check-emails' />
            Deseja receber emails irritantes
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Form;

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
