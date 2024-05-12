import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Refunds from './components/Refunds';
import UpdateCustomerInfo from './components/UpdateCustomerInfo';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Search />
        <Refunds />
        <UpdateCustomerInfo />
      </div>
    </>
  );
}

export default App;