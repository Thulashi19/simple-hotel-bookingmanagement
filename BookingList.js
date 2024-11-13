import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingList() {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        const res = await axios.get('http://localhost:5000/api/bookings');
        setBookings(res.data);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        fetchBookings();
    };

    return (
        <div>
            <h2 style={{textDecoration:'underline',marginLeft:'20px'}}>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.guestName} - {booking.roomType} - {new Date(booking.checkIn).toLocaleDateString()} to {new Date(booking.checkOut).toLocaleDateString()}
                        <button onClick={() => handleDelete(booking._id)} style={{borderRadius:'5px',background:'pink',marginLeft:'30px',cursor:'pointer'}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingList;
