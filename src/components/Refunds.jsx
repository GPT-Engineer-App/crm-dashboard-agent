import React, { useState } from 'react';

const Refunds = () => {
  const [orderId, setOrderId] = useState('');

  const handleRefund = () => {
    console.log('Processing refund for order:', orderId);
    // Implement refund logic here
  };

  return (
    <div id="refunds" className="p-4">
      <input
        type="text"
        placeholder="Enter order ID for refund"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={handleRefund} className="btn btn-error ml-2">Refund</button>
    </div>
  );
};

export default Refunds;