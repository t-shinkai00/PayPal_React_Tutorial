import React, { useRef, useEffect } from "react";

export default function PayPal(props) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: String(props.value),
                  currency_code: "JPY",
                },
                description: "Purchase Unit Test",
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Order Successful: " + order);
        },
        onError: (err) => {
          alert(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <h1>{props.value}円の寄付を行います</h1>
      <div ref={paypal}></div>
    </div>
  );
}
