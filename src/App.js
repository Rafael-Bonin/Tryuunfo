import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.enableDisable = this.enableDisable.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick(event) {
    // 1 - faz com que o botao nao execute o comportamento padrao
    event.preventDefault();
    // 2 - recupera todos os states necessarios
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    // 3 - cria um objeto com a informacao atual de todos os states
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
      // 4 - adiciona o novo card ao state 'deck' e reseta os outros
    this.setState((fore) => ({
      deck: [...fore.deck, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
    }));
  }

  onInputChange({ target }) {
    this.setState({ [target.name]: target.value }, this.enableDisable); // o segundo parametro do setState e uma callback que tambem altera state e utiliza dos resultados da primeira.
  }

  enableDisable() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const maxTotal = 210;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const maxSingle = 90;
    const atr1 = cardAttr1 >= 0 && cardAttr1 <= maxSingle;
    const atr2 = cardAttr2 >= 0 && cardAttr2 <= maxSingle;
    const atr3 = cardAttr3 >= 0 && cardAttr3 <= maxSingle;
    const totalAttr = sumAttr <= maxTotal;
    const biggerThan = cardName.length > 0;
    const includesImage = cardImage.length > 0;
    const description = cardDescription.length > 0;
    if (biggerThan
      && atr1
      && atr2
      && atr3
      && totalAttr
      && includesImage
      && description) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          enableDisable={ this.enableDisable }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          cardImage={ cardImage }
          cardAttr3={ cardAttr3 }
          cardAttr2={ cardAttr2 }
          cardAttr1={ cardAttr1 }
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
        />
        <Card
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          cardImage={ cardImage }
          cardAttr3={ cardAttr3 }
          cardAttr2={ cardAttr2 }
          cardAttr1={ cardAttr1 }
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
        />
      </div>
    );
  }
}

export default App;
