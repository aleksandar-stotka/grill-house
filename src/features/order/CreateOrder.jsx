import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';
import emailjs from 'emailjs-com';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  // Debugging cart data before submitting the form
  console.log("Cart Data before submitting:", cart);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* Form to handle order submission */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />

          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? 'Placing order....'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// Action to handle order creation and sending email
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Debugging form data to ensure cart is included
  console.log("Received Form Data:", data);

  // Check if cart is available
  if (!data.cart) {
    console.error("Cart data is missing");
    return { cart: "Cart data is missing" }; // Return an error if cart is missing
  }

  const order = {
    ...data,
    cart: JSON.parse(data.cart), // Parse the cart string to get the object
    priority: data.priority === 'true',
  };

  console.log("Order Data:", order);  // Debugging line to check the order object

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please provide us with your correct phone number. We might need it to contact you.';
  }

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Send email notification using emailjs after order is created
  try {
    sendMail(order, newOrder); // Call the sendMail function here
  } catch (error) {
    console.error('Failed to send email:', error);
  }

  // Clear cart after order is placed
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

// Send email function
function sendMail(order, newOrder) {
  const emailParams = {
    customer_name: order.customer,
    phone: order.phone,
    address: order.address,
    total_price: formatCurrency(order.totalPrice),
    cart_details: JSON.stringify(order.cart),
    priority: order.priority ? 'Yes' : 'No',
    order_id: newOrder.id,
  };

  // Send email via EmailJS
  emailjs.send("service_ftt9gs7", "template_wfhjoqw", emailParams)
    .then((result) => {
      console.log("Email sent successfully:", result);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

// Initialize emailjs with your public key
(function () {
  emailjs.init('nbS0nW_kNhiWrfjfW'); // Replace with your actual Public Key
})();

export default CreateOrder;
