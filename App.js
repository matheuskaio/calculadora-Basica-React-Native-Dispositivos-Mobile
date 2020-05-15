import React, {Component} from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';

class App extends Component {
  state = {n1: '', n2: '', resultado: 0};

  validacao(n1, n2) {
    if (n1 === '' || n2 === '') {
      return false;
    }
    return true;
  }

  limparCampos() {
    this.setState({n1: '', n2: ''});
  }
  soma() {
    if (this.validacao(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) + parseInt(this.state.n2),
      });
      this.limparCampos();
      return;
    }
    alert('Informe os valores');
  }

  subtracao() {
    if (this.validacao(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) - parseInt(this.state.n2),
      });
      this.limparCampos();
      return;
    }
    alert('Informe os valores');
  }

  divisao() {
    if (this.validacao(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) / parseInt(this.state.n2),
      });
      this.limparCampos();
      return;
    }
    alert('Informe os valores');
  }

  mult() {
    if (this.validacao(this.state.n1, this.state.n2)) {
      this.setState({
        resultado: parseInt(this.state.n1) * parseInt(this.state.n2),
      });
      this.limparCampos();
      return;
    }
    alert('Informe os valores');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Digite o primeiro valor"
          onChangeText={(text) => this.setState({n1: text})}
          keyboardType="numeric"
          value={this.state.n1}
        />
        <TextInput
          placeholder="Digite o segundo valor"
          onChangeText={(text) => this.setState({n2: text})}
          keyboardType="numeric"
          value={this.state.n2}
        />
        <View style={styles.operacoes}>
          <Button color="#000" onPress={this.soma.bind(this)} title="Soma" />
          <Button
            color="#000"
            onPress={this.subtracao.bind(this)}
            title="Subtração"
          />
          <Button
            color="#000"
            onPress={this.divisao.bind(this)}
            title="Divisão"
          />
          <Button color="#000" onPress={this.mult.bind(this)} title="Mul" />
        </View>
        <View style={styles.resultado}>
          <Text style={styles.txtTitulo}>
            Resultado: {this.state.resultado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // alignItems: 'center',
  },
  operacoes: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  txtTitulo: {
    fontSize: 22,
  },
});

export default App;
