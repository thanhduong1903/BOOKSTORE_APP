import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';

function ResetPassWord({ route }) {
    const { Url } = route.params;
    const webviewRef = useRef(null);
    let timer;   
    useEffect(() => {
        timer = setTimeout(() => {
            if (webviewRef.current) {
                webviewRef.current.reload();
            }
        }, 100); 
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <WebView
            ref={webviewRef}
            originWhitelist={['*']}
            source={{ uri: Url }}
            style={{ marginTop: 20 }}
            javaScriptEnabled={true}
        />
    );
}

export default ResetPassWord;
