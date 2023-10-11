import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function Agendamento() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  const agendarConsulta = () => {
    const dadosPaciente = {
      nome,
      cpf,
      dataNascimento,
      endereco,
    };

    console.log('Dados do Paciente:', dadosPaciente);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <TextInput
        placeholder="Nome do Técnico"
        value={nome}
        onChangeText={setNome}
        style={styles.inp1}
      />
      <TextInput 
      placeholder="Idade Ténico" 
      value={cpf} onChangeText={setCpf} 
      style={styles.inp2}/>
      <TextInput
        placeholder="Nacionalidade do Ténico"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.inp3}
      />
      <TextInput placeholder="Experiencia do Ténico" 
      value={endereco} 
      onChangeText={setEndereco} 
      style={styles.inp4}/>
      <Button title="Agendar" onPress={agendarConsulta} color="#9370DB"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#A020F0', 
    padding: 100, 
    borderRadius: 10, 
  },
  inp1: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "#9370DB",
    padding: 5,
    borderRadius: 13,

  },
  inp2: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "#9370DB",
    padding: 5,
    borderRadius: 13,
  },
  inp3: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "#9370DB",
    padding: 5,
    borderRadius: 13,
  },
  inp4: {
    marginBottom: 20,
    height: 50,
    backgroundColor: "#9370DB",
    padding: 5,
    borderRadius: 13,
  },
});

export default Agendamento;