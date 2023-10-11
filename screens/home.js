import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button 
          title="Cadastrar Técnico"
          onPress={() => navigation.navigate('login')}
          color="black"
          style={styles.button}
        />
        <Button 
          title="Lista de Jogadores"
          onPress={() => navigation.navigate('list')}
          color="black"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
  },
  buttonContainer: {
    backgroundColor: '#0000CD', 
    padding: 100, 
    borderRadius: 10, 
  },
  button: {
    width: 150,
    padding: 10,
  },
});

export default Home;
