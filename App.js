import React, {Component} from 'react';
import styled from 'styled-components/native';
import imgCronometro from './assets/cronometro.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null,
    };
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'VAI'});
    } else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1});
      }, 100);

      this.setState({botao: 'PARAR'});
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI',
    });
  }

  render() {
    return (
      <Container>
        <TitleText>Iago's Time</TitleText>

        <CronometroImg source={imgCronometro} />

        <Timer> {this.state.numero.toFixed(1)} </Timer>

        <BtnArea>
          <Button onPress={this.vai}>
            <BtnTexto> {this.state.botao} </BtnTexto>
          </Button>

          <Button onPress={this.limpar}>
            <BtnTexto>LIMPAR</BtnTexto>
          </Button>
        </BtnArea>

        <AreaUltima>
          <TextoCorrida>
            {this.state.ultimo > 0
              ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's'
              : ''}
          </TextoCorrida>
        </AreaUltima>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2f8f55;
`;

const Timer = styled.Text`
  margin-top: -160px;
  color: #ffffff;
  font-size: 65px;
  font-weight: bold;
`;

const CronometroImg = styled.Image``;

const BtnArea = styled.View`
  flex-direction: row;
  margin-top: 70px;
  height: 40px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  border-radius: 9px;
  margin: 17px;
  height: 40px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const BtnTexto = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2f8f55;
`;

const AreaUltima = styled.View`
  margin-top: 40px;
`;

const TextoCorrida = styled.Text`
  font-size: 25px;
  font-style: italic;
  color: #ffffff;
`;

const TitleText = styled.Text`
  font-size: 45px;
  font-style: italic;
  color: #ffffff;
  padding-bottom: 20px;
  margin-bottom: 18px;
`;

export default App;
