import './App.css';

import React from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

function App() {
    const handleBookingAdded = () => {
        window.location.reload();
    };

    return (
        <div>
            <h1 style={{textAlign:'center',color:'maroon',padding:'20px' ,textDecoration:'underline'}}>MAGIL HOTEL</h1>
            <BookingForm onBookingAdded={handleBookingAdded} />
            <BookingList />
        </div>
    );
}

export default App;

