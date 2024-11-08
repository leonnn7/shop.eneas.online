import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: state.items.map(item => ({
            price: item.stripeProductId,
            quantity: item.quantity
          }))
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-gray-800 shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <ShoppingCart className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 className="text-lg font-medium text-white">Your Services</h2>
                </div>
                <button
                  onClick={onClose}
                  className="ml-3 h-7 w-7 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="mt-8">
                {state.items.length === 0 ? (
                  <p className="text-center text-gray-400">No services selected</p>
                ) : (
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-700">
                      {state.items.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="flex-1 ml-4">
                            <div className="flex justify-between text-base font-medium text-white">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center">
                                <button
                                  onClick={() => dispatch({
                                    type: 'UPDATE_QUANTITY',
                                    payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                                  })}
                                  className="text-white bg-gray-700 px-2 py-1 rounded-l"
                                >
                                  -
                                </button>
                                <span className="px-4 py-1 bg-gray-700 text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => dispatch({
                                    type: 'UPDATE_QUANTITY',
                                    payload: { id: item.id, quantity: item.quantity + 1 }
                                  })}
                                  className="text-white bg-gray-700 px-2 py-1 rounded-r"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                                className="text-red-500 hover:text-red-400"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {state.items.length > 0 && (
              <div className="border-t border-gray-700 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-white">
                  <p>Total</p>
                  <p>${state.total.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-400">
                  All prices include applicable taxes
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;