import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const footballPlayers = [

  {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
  },
  {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
  },
  {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
  },
  {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
  },
  {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
  },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
  },
  {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
  },
  {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
  },
  {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
  },
];

function Consulta({ navigation }) {
  return (
    <View style={styles.container}>
       <View style={styles.buttonContainer}>
      <FlatList
        data={footballPlayers}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.text}>
            <Text>Nome: {item.name}</Text>
            <Text>Posição: {item.position}</Text>
            <Text>Idade: {item.age}</Text>
          </View>
        )}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    backgroundColor: '#4169E1',
    padding: 20,
  },
  text: {
    backgroundColor: 'white',
    margin: '20px',
    padding: 15,
    borderRadius: 13,
  },
  buttonContainer: {
    backgroundColor: '#0000CD', 
    padding: 100, 
    borderRadius: 10, 
  },
});

export default Consulta;
