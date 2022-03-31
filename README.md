# Webview Issue Poc

Run `yarn` to install dependencies.

Start your simulator (from for instance Android Studio)
And then run `yarn android`

Paste the preprod and prod urls in App.js in order to test the scenario

# Debugging WebView

[We have followed this guide](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Debugging.md)
1. Start your simulator
2. `yarn android`
3. Open [chrome://inspect/#devices](chrome://inspect/#devices) on Chrome (Reference: Remote debug Android devices)
4. Inside the Android app, open the desired link in the WebView. The WebView should appear in the list in [chrome://inspect/#devices](chrome://inspect/#devices). 
5. Click "Inspect". A DevTools window should appear. You might have to reload the url inside the DevTool windows to be able to see the network requests.

## Issues? 

If you encounter any issues running the Android app, I suggest you go back to the master branch and attempt to generate the native Android project yourself.
You can simply do this by running `expo run:android`. [Guide](https://docs.expo.dev/workflow/customizing/)
Then, add this to MainApplication.java
```java
  import android.webkit.WebView;

  @Override
  public void onCreate() {
    super.onCreate();
	  ...
    WebView.setWebContentsDebuggingEnabled(true);
  }
```
