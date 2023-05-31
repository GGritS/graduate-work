import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useProductsContext } from "../../../../../context/products/ProductsContext";

export const ReportsBar: FC = () => {
  const { dateState, handleDateStateChange } = useProductsContext();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "0.5rem",
        background: "#fff",
        marginBottom: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <Box>
          <Typography variant="h4">Статистика</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography>Відображати статисику з: </Typography>
          <Box sx={{ width: "content" }}>
            <DatePicker
              selected={dateState.start}
              onChange={(e) => handleDateStateChange(e, "start")}
              dateFormat="dd/MM/yyyy"
            />
          </Box>
          <Typography>по</Typography>
          <Box sx={{ width: "content" }}>
            <DatePicker
              selected={dateState.end}
              onChange={(e) => handleDateStateChange(e, "end")}
              dateFormat="dd/MM/yyyy"
            />
          </Box>
          {/* <Button variant="contained" color="secondary">
            Отримати статистику
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};
