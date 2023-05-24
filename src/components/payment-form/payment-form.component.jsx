import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { selectCartTotal } from "../../store/cart/cart.select";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from "./payment-form.styles";
import { resetCartItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.select";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
    console.log(response);
    const clientSecret = response.paymentIntent.client_secret;
    console.log(clientSecret);
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }

    dispatch(resetCartItem([]));
  };
  return (
    <div>
      {!cartItems[0] ? (
        <PaymentFormContainer style={{ marginTop: "300px" }}>
          <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment:</h2>
            <CardElement />
            <PaymentButton
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              isLoading={isProcessingPayment}
            >
              Pay Now
            </PaymentButton>
          </FormContainer>
        </PaymentFormContainer>
      ) : (
        <PaymentFormContainer style={{ marginTop: "0px" }}>
          <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment:</h2>
            <CardElement />
            <PaymentButton
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              isLoading={isProcessingPayment}
            >
              Pay Now
            </PaymentButton>
          </FormContainer>
        </PaymentFormContainer>
      )}
    </div>
  );
};

export default PaymentForm;
