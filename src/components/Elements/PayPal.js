import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/router'
import axios from 'axios';
function PayPal({ amount = '10.0', card }) {
    const baseUrl = 'https://back.rug100.com/'
    const router = useRouter()
    console.log('amount', amount?.replace('$', ''));

    return (
        <PayPalScriptProvider options={{
            "client-id": "Ae1byoUcQp5kYFLm4DCNQrY1YFbacSCHAibfHfF2vdkg8xu01UcmYKK1yCIuXR94EuzKxrnUWzTgNj6z",
        }}>
            <PayPalButtons
                style={{ layout: "horizontal", color: 'blue', }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount?.replace('$', ''),
                                },

                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {

                    axios.post(baseUrl + 'paypal/smart-button/capture-order', { orderData: data }, { withCredentials: true }).then(res => console.log("dsvlnshdv")).catch(er =>
                        console.log("d;vlmdsv", er))
                    // return actions.order.capture().then((details) => {
                    //     console.log("[pay_token]", details);
                    //     console.log("[pay_token]", data);
                    //     const name = details.payer.name.given_name;
                    //     router.push('/profile')
                    //     // setTimeout(() => {
                    //     //       alert(`Transaction completed by ${name}  token ${data.facilitatorAccessToken}`);
                    //     // }, 3000);

                    // });
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PayPal
