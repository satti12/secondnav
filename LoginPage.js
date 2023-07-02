import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login authentication logic here
    // For simplicity, we'll navigate to the "Home" page on successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Page</Text>
      <Text style={styles.label}>Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Enter your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', // Center the content horizontally
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    label: {
      marginBottom: 10,
      fontSize: 16,
      paddingLeft: 20,
      alignSelf: 'flex-start', // Align the labels to the left
    },
    input: {
      width: '90%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      paddingHorizontal: 10,
      alignSelf: 'center', // Center the input fields horizontally
    },
    button: {
      width: '150%', // Adjust the width of the button
      height: 50, // Adjust the height of the button
      marginBottom: 10,
    },
  });
  
export default LoginPage;
