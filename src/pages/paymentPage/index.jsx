import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { selectTotalAmount } from '../../features/CartSlice';

import { CheckoutForm } from '../../components/stripe/CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51ME1zdFPtsUdrCUWIkSElrJk10kSLnkL4mqsSDFhxvkB3612iN6VOSGAXF4k3Ze6cAdy7F0wklZ6xV8cNkP6sCJq00uyXs2GYy'
);

const PaymentPage = () => {
  const totalAmount = useSelector(selectTotalAmount);
  const navigate = useNavigate();

  return (
    <section className="bg-myWhite flexC flex-col w-full h-[calc(100vh-80px)]   ">
      <button
        className="bg-myBlack text-myWhite px-4 py-3 mb-8 rounded cursor-pointer hover:scale-105 hover:bg-cta"
        onClick={() => navigate(-1)}
      >
        Regresar al Carrito
      </button>

      <Elements stripe={stripePromise}>
        <CheckoutForm totalAmount={totalAmount} />
      </Elements>
    </section>
  );
};

export default PaymentPage;
