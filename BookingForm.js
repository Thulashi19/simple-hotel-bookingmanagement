import React, { useState } from 'react';
import axios from 'axios';

function BookingForm({ onBookingAdded }) {
    const [guestName, setGuestName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBooking = { guestName, roomType, checkIn, checkOut };
        await axios.post('http://localhost:5000/api/bookings', newBooking);
        onBookingAdded();
    };
    const handleRoomTypeChange = (e) => {
        setRoomType(e.target.value);
    };
    
    return (
       
       
        <div style={{justifyContent:'center',display:'flex',alignItems: 'center'}}>
        <form onSubmit={handleSubmit} style ={{border: '2px solid black', borderRadius: '8px',width:'300px',height:'280px',padding:'30px',textAlign:'center'}}>
        <h2 >Booking Form</h2>
        <label>Name:</label>
            <input type="text" placeholder="Guest Name" value={guestName} onChange={(e) => setGuestName(e.target.value)} required style={{width:'190px',borderRadius:'5px',textAlign:'center',marginLeft:'32px'}} /><br/><br/>
            <label>RoomType:</label>
            <select value={roomType} onChange={handleRoomTypeChange} style={{width:'190px',borderRadius:'5px',textAlign:'center',marginLeft:'05px'}}>
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="suite">Suite</option>
                </select><br/><br/>
            <label>From:</label>
            <input type="date" placeholder="Check-In Date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required style={{width:'190px',borderRadius:'5px',textAlign:'center',marginLeft:'40px'}}/><br/><br/>
            <label>To:</label>
            <input type="date" placeholder="Check-Out Date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required style={{width:'190px',borderRadius:'5px',textAlign:'center',marginLeft:'59px'}}/><br/><br/>
            <button type="submit" style={{borderRadius:'5px',background:'lightblue',cursor:'pointer',marginLeft:'50px'}}>Add Booking</button>
        </form>
        </div>
    );
}

export default BookingForm;
