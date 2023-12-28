import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../Redux/CartSlice';


function PaymentScreen({ route }) {
    const { paymentUrl } = route.params;
    const dispatch = useDispatch(); 
    const webviewRef = useRef(null);
    let timer;   
    useEffect(() => {
        timer = setTimeout(() => {
            if (webviewRef.current) {
                webviewRef.current.reload();
                dispatch(clearCart());
            }
        },1000); // Thời gian chờ là 10 giây
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <WebView
            ref={webviewRef}
            originWhitelist={['*']}
            source={{ uri: paymentUrl }}
            style={{ marginTop: 20 }}
            javaScriptEnabled={true}
        />
    );
}

export default PaymentScreen;
