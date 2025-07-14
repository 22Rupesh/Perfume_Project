import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useCart } from '../CartContext';

const Checkout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) setDarkMode(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear cart
      setCartItems([]);
      
      // Show success message
      alert('Order placed successfully! Thank you for your purchase.');
      
      // Navigate to home page
      navigate('/');
      
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBackToCart = () => {
    navigate('/product-cart');
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#220104] font-sans text-[#3b220c] dark:text-[#f6d110] min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg mb-4">Your cart is empty.</p>
            <button
              onClick={handleContinueShopping}
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded shadow transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white p-6 rounded shadow dark:bg-[#2c0a0a]">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 py-3 border-b dark:border-gray-600">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-contain"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm opacity-75">${item.price}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t dark:border-gray-600">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total: ${calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="bg-white p-6 rounded shadow dark:bg-[#2c0a0a]">
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                    disabled={isProcessing}
                    className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                    disabled={isProcessing}
                    className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isProcessing}
                    className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    disabled={isProcessing}
                    className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleInputChange}
                      required
                      disabled={isProcessing}
                      className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleInputChange}
                      required
                      disabled={isProcessing}
                      className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={customerInfo.country}
                    onChange={handleInputChange}
                    required
                    disabled={isProcessing}
                    className="w-full p-3 border rounded dark:bg-[#3c1515] dark:border-gray-600 dark:text-[#f6d110] disabled:opacity-50"
                  />
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={handleBackToCart}
                    disabled={isProcessing}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded shadow transition-colors disabled:opacity-50"
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded shadow transition-colors disabled:opacity-50 flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout; 