const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/hotelBooking')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));


const bookingSchema = new mongoose.Schema({
    guestName: String,
    roomType: String,
    checkIn: Date,
    checkOut: Date,
});

const Booking = mongoose.model('Booking', bookingSchema);


app.post('/api/bookings', async (req, res) => {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json(newBooking);
});

app.get('/api/bookings', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

app.delete('/api/bookings/:id', async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
