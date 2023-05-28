import React from "react";
import { Box, TextField } from "@mui/material";
import { CustomerData } from "../../types";

interface OrderFormProps {
  changeCustomerData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customerData: CustomerData;
}

const OrderForm: React.FC<OrderFormProps> = ({
  changeCustomerData,
  customerData,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        label="ПІБ"
        name="firstName"
        value={customerData.firstName}
        onChange={changeCustomerData}
        fullWidth
        margin="normal"
        required
        style={{
          width: "100%",
        }}
      />
      <TextField
        label="Повна адресса, для відправки замовлення"
        name="address"
        value={customerData.address}
        onChange={changeCustomerData}
        fullWidth
        margin="normal"
        required
        style={{
          width: "100%",
        }}
      />
      <TextField
        label="Номер телефону"
        name="phoneNumber"
        value={customerData.phoneNumber}
        onChange={changeCustomerData}
        fullWidth
        margin="normal"
        required
        style={{
          width: "100%",
        }}
      />
    </Box>
  );
};

export default OrderForm;
