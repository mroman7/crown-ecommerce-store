import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // we do price * 100 because Stripe accepts payment in Cents(Cents are less then dollar like e.g, Paisa in Rupees) instead of Dollars
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JUqtnGtkCjK4Eyfjte2MRTSEydCF35FZV2zjUUREmDB1qqCZusxPbrwjixfJ6wlkywcLUm4Ym7EEgEyJl9VXDlH00kNJKWSvU';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown E-Commerce Store"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            price={`Total Price: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;