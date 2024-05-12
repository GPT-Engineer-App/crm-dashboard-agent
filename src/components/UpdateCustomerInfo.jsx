import React, { useState } from 'react';

const UpdateCustomerInfo = () => {
  const [customerInfo, setCustomerInfo] = useState({
    address: '',
    zipcode: '',
    phone: ''
  });

  const handleUpdate = () => {
    console.log('Updating customer info:', customerInfo);
    // Implement update logic here
  };

  return (
    <div id="update" className="p-4">
      <input
        type="text"
        placeholder="Address"
        value={customerInfo.address}
        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={customerInfo.zipcode}
        onChange={(e) => setCustomerInfo({ ...customerInfo, zipcode: e.target.value })}
        className="input input-bordered w-full max-w-xs mt-2"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={customerInfo.phone}
        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
        className="input input-bordered w-full max-w-xs mt-2"
      />
      <button onClick={handleUpdate} className="btn btn-success ml-2 mt-2">Update Info</button>
    </div>
  );
};

export default UpdateCustomerInfo;