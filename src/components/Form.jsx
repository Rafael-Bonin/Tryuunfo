import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Name
          <input
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            type="text"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="3"
          />
        </label>
        <label htmlFor="attribute1">
          Attribute 1
          <input
            name="cardAttr1"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute2">
          Attribute 2
          <input
            name="cardAttr2"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attribute3">
          Attribute 3
          <input
            name="cardAttr3"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            name="cardImage"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Rarity
          <select
            data-testid="rare-input"
            name="cardRare"
            id=""
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Ultra Rare</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          { !hasTrunfo ? (
            <div>
              <p>Is it Super Trunfo?</p>
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                id=""
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </div>
          ) : (
            <p>Voc?? j?? tem um Super Trunfo em seu baralho</p>
          ) }
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
