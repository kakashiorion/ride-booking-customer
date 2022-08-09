import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import CustomerData from "./src/test";

const serverURL = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: serverURL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View style={[styles.container]}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <CustomerData />
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
