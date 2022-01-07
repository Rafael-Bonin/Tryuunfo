import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Name
          <input data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name=""
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="attribute1">
          Attribute 1
          <input data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="attribute2">
          Attribute 2
          <input data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="attribute3">
          Attribute 3
          <input data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image">
          Image
          <input data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rarity">
          Rarity
          <select data-testid="rare-input" name="" id="">
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Ultra Rare</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Is it Super Trunfo?
          <input data-testid="trunfo-input" type="checkbox" name="" id="" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}
