import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAccommodations } from '../services/accommodationService';
import AccommodationList from '../components/accommodations/AccommodationList';
import AccommodationForm from '../components/accommodations/AccommodationForm';
import { Box, Button, Typography } from '@mui/material';

const AccommodationsPage = () => {
  const { user } = useAuth();
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAccommodation, setEditingAccommodation] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const data = await getAccommodations(user.token);
        setAccommodations(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
        setLoading(false);
      }
    };

    if (user) {
      fetchAccommodations();
    }
  }, [user]);

  const handleCreate = () => {
    setEditingAccommodation(null);
    setShowForm(true);
  };

  const handleEdit = (accommodation) => {
    setEditingAccommodation(accommodation);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (newAccommodation) => {
    if (editingAccommodation) {
      setAccommodations(accommodations.map(acc => 
        acc.id === newAccommodation.id ? newAccommodation : acc
      ));
    } else {
      setAccommodations([...accommodations, newAccommodation]);
    }
    setShowForm(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Alojamientos
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleCreate}
        sx={{ mb: 3 }}
      >
        Crear Nuevo Alojamiento
      </Button>
      
      {loading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <AccommodationList 
          accommodations={accommodations} 
          onEdit={handleEdit} 
        />
      )}
      
      <AccommodationForm
        open={showForm}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={editingAccommodation}
      />
    </Box>
  );
};

export default AccommodationsPage;