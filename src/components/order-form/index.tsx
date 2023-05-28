import React from 'react';
import { TextField, Button } from '@mui/material';


interface OrderFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} onSubmit={handleSubmit}>
      <TextField
        label="Ім'я"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        style={{
          width: '100%',
        }}
      />
      <TextField
        label="Прізвище"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        style={{
          width: '100%',
        }}
      />
      <TextField
        label="Номер телефону"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        style={{
          width: '100%',
        }}
      />
      {/* <Button variant="contained" color="primary" type="submit">
        Submit
      </Button> */}
    </form>
  );
};

export default OrderForm;
