import React, { useEffect, useState } from 'react';
import {Elements, PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SetupForm from './SetupForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JvASxI4vWfsmwHSjVas9wX0RFwNexfIrAhFkGPSPVd33Q0x7bmZMNIX57SBKfRVxwt4Ns4WWPYC5utqdCopsOFg00903vER2O');

function App() {
  const [options, setOptions] = useState({
    // passing the client secret obtained in step 2
    clientSecret: 'seti_1Ksmx1I4vWfsmwHSHIBfNxv2_secret_LZwqF0ljidimsRSl0Y9H5NY6isfCQgp',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  });

  return (
    <>
    {
      options?.clientSecret &&
        <Elements stripe={stripePromise} options={options}>
          <SetupForm />
      </Elements>
    }
    </>
  );
};

export default App;