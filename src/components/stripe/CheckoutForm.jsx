import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { setClearCartItems, setCloseCart } from '../../features/CartSlice';

import { Field } from './Field';
import { ResetButton } from './ResetButton';
import { ErrorMessage } from './ErrorMessage';
import { SubmitButton } from './SubmitButton';

export const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    name: '',
  });

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: '',
      name: '',
    });
    navigate('/');
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    if (error) {
      card.focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      const { id, billing_details } = payload.paymentMethod;
      const dataPurchase = {
        id,
        email: billing_details.email,
        name: billing_details.name,
        amount: Math.round(totalAmount * 100),
        description: 'Compra de libros',
      };
      try {
        const response = await fetch('http://localhost:3500/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPurchase),
        });

        const result = await response.json();
        if (result.status !== 'ok') {
          setError({
            message: `Error:${result.message.code} by ${result.message.decline_code}`,
          });
          return;
        }
        dispatch(setClearCartItems());
        dispatch(setCloseCart({ cartState: false }));
        setPaymentMethod(payload.paymentMethod);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return paymentMethod ? (
    <div className="mt-12 text-center bg-success/10 rounded-lg">
      <div
        className="  text-miBlack font-semibold mb-2 text-lg text-center"
        role="alert"
      >
        <p className="text-2xl">Muchas Gracias por su pago</p>
        <p>Pulse el boton para continuar comprando</p>
      </div>
      <ResetButton
        onClick={() => {
          reset();
        }}
      />
    </div>
  ) : (
    <>
      <form
        className="p-4 rouded shadow-lg shadow-primary-5400 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 ">
          Introduzca los datos para realizar el pago{' '}
        </h2>
        <fieldset className="FormGroup">
          <Field
            label="Name"
            id="name"
            type="text"
            placeholder="Jane Doe"
            required
            autoComplete="name"
            value={billingDetails.name}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, name: e.target.value });
            }}
          />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="janedoe@gmail.com"
            required
            autoComplete="email"
            value={billingDetails.email}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, email: e.target.value });
            }}
          />
        </fieldset>
        <fieldset className="FormGroup">
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={(e) => {
              setError(e.error);
              setCardComplete(e.complete);
            }}
          />
        </fieldset>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <SubmitButton
          className="bg-red-300"
          processing={processing}
          error={error}
          disabled={!stripe}
        >
          total a pagar: ${totalAmount}
        </SubmitButton>
      </form>
    </>
  );
};
