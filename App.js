import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_a2V5LWxhbWItNzcuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
      {/* Sign In component */}
      <SignedIn>
          <Text>You are Signed in</Text>
      </SignedIn>
      {/* Sign Out component */}
      <SignedOut>
        <Login/>
      </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingLeft: 20
  },
});
