import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getBookings, cancelBooking } from '../services/bookingService';
import BookingList from '../components/bookings/BookingList';
import BookingForm from '../components/bookings/BookingForm';
import BookingCalendar from '../components/bookings/BookingCalendar';
import { Box, Button, Typography, Tabs, Tab } from '@mui/material';

const BookingsPage = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings(user.token);
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  const handleCreate = () => {
    setShowForm(true);
  };

  const handleCancel = async (bookingId) => {
    try {
      await cancelBooking(bookingId, user.token);
      setBookings(bookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  const handleShowCalendar = (accommodationId) => {
    setSelectedAccommodation(accommodationId);
    setShowCalendar(true);
    setTabValue(1);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setShowForm(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Reservaciones
      </Typography>
      
      <Button 
        variant="contained" 
        onClick={handleCreate}
        sx={{ mb: 3 }}
      >
        Crear Nueva Reservación
      </Button>
      
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Lista de Reservaciones" />
        <Tab label="Calendario" />
      </Tabs>
      
      {tabValue === 0 ? (
        loading ? (
          <Typography>Cargando...</Typography>
        ) : (
          <BookingList 
            bookings={bookings} 
            onCancel={handleCancel} 
            onShowCalendar={handleShowCalendar} 
          />
        )
      ) : (
        <BookingCalendar 
          accommodationId={selectedAccommodation} 
          onSelectAccommodation={setSelectedAccommodation} 
        />
      )}
      
      <BookingForm
        open={showForm}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default BookingsPage;