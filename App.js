import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./components/config";
import { useState } from 'react';

export default function App() {
  const [useData, setUserData] = useState({});
  function signUp () {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setUserData(user);
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
  }
  return (
    <View style={styles.container}>
      <Text>Autenticacion con Firebase</Text>
      <StatusBar style="auto" />
      <View>
        <Text>Name: 
          <Text>
            { useData.displayName }
          </Text>
        </Text>
        <Text>Email: 
          <Text>
            { useData.email }
          </Text>
        </Text>
      </View>
      <GoogleButton
        onClick={signUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
