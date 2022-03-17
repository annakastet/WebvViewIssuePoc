import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import { WebView } from "react-native-webview";

export default function App() {
  const PREPROD_URI = "insert here"
  const PROD_URI = "insert here"

  const [webViewProps, setPreprod] = useState({show: false})

  const resetViews = () => { setPreprod({show: false }) }

  console.log(webViewProps)
  return (
    <View style={styles.container}>
      <Button onPress={() => resetViews()} title="Go back" />
        {
            webViewProps.show ? <WebView
                    originWhitelist={['*']}
                    style={{flex: 1, backgroundColor: 'blue'}}
                    source={{ uri: webViewProps.uri }}
                /> :
                <View>
                    <Text>Open up App.js to start working on your app!</Text>
                    <StatusBar style="auto"/>
                    <Button onPress={() => setPreprod({show: true, uri: PREPROD_URI})} title="Click for Preprod"/>
                    <Button onPress={() => setPreprod({show: true, uri: PROD_URI})} title="Click for Prod"/>
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
