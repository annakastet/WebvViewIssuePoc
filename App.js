import {StatusBar} from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

import {InAppBrowser} from 'react-native-inappbrowser-reborn'

export default function App() {
  const PREPROD_URI = "insert here"
  const PROD_URI = "insert here"

  const [webViewProps, setWebView] = useState({show: false})

  const resetViews = () => { setWebView({show: false }) }

  async function openBrowser(url) {
    try {
      if (await InAppBrowser.isAvailable()) {
        const result = InAppBrowser.open(url)
        Alert.alert(JSON.stringify(result))
      } else {
        console.log("In app browser not available")
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  console.log(webViewProps)
  if (webViewProps.show) { openBrowser(webViewProps.uri).then(() => resetViews()) }
  return (
    <View style={styles.container}>
        {
                <View>
                    <Text>Open up App.js to start working on your app!</Text>
                    <StatusBar style="auto"/>
                    <Button onPress={() => setWebView({show: true, uri: PREPROD_URI})} title="Click for Preprod"/>
                    <Button onPress={() => setWebView({show: true, uri: PROD_URI})} title="Click for Prod"/>
                </View>
        }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
