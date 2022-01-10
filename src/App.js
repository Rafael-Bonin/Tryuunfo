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
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    console.log(target.value);
    this.setState({ [target.name]: target.value });
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
