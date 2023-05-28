import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, Paper, TextField } from "@mui/material";
import PRODUCTS from "../../productsData";
import { GridDeleteIcon } from "@mui/x-data-grid";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, product: readonly string[], theme: Theme) {
  return {
    fontWeight:
      product.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function OrderSelect() {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedProducts.forEach((product) => {
      const { quantity, price } = product;
      totalPrice += quantity * price;
    });
    return totalPrice;
  };
  const theme = useTheme();
  const [product, setProduct] = React.useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = React.useState<
    typeof PRODUCTS
  >([]);

  const handleChange = (event: SelectChangeEvent<typeof product>) => {
    const {
      target: { value },
    } = event;
    setProduct(typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
    const selected = PRODUCTS.filter((el) => product.includes(el.name));
    setSelectedProducts(selected);
  }, [product]);

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const { value } = event.target;
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: Number(value),
          };
        }
        return product;
      })
    );
  };

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      const updatedProductNames = updatedProducts.map(
        (product) => product.name
      );
      setProduct(updatedProductNames);
      return updatedProducts;
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedProducts);
    setSelectedProducts([]);
    setProduct([])
  };

  return (
    <>
      <form style={{ width: '100%', textAlign: 'center' }} onSubmit={handleFormSubmit}>
        <FormControl fullWidth  >
          <InputLabel style={{ marginTop: '15px' }} size='normal'>Продукти</InputLabel>
          <Select
            style={{ marginTop: '15px' }}
            labelId="demo-multiple-label"
            id="demo-multiple-chip"
            multiple
            fullWidth
            value={product}
            onChange={handleChange}
            input={<OutlinedInput fullWidth id="select-multiple-chip" label="Продукти" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <div key={value} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Chip label={value} />
                  </div>
                ))}
              </Box>
            )}
            MenuProps={MenuProps}>
            {PRODUCTS.map((el) => (
              <MenuItem
                key={el.name}
                value={el.name}
                style={getStyles(el.name, product, theme)} >
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: "#f5f5f5",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{product.name}</h3>
            <p style={{ marginBottom: "10px" }}>{product.description}</p>
            <p style={{ marginBottom: "10px" }}>Ціна: {product.price} грн з одиницю</p>
            <img
              style={{ width: "250px", height: "200px", marginBottom: "10px" }}
              src={product.photo}
              alt="product photo"
            />
            <TextField
              value={product.quantity || ""}
              onChange={(event) => handleQuantityChange(event, product.id)}
              variant="outlined"
              label="Кількість"
              type="number"
              style={{ width: "70%", marginBottom: "10px" }}
            />
            <Button
              onClick={() => handleRemoveProduct(product.id)}
              variant="outlined"
              startIcon={<GridDeleteIcon />}
              style={{ width: "70%", cursor: 'pointer' }}
            >
              Видалити замовлення
            </Button>
          </div>
        ))}
        {product.length > 0 && <>
          <h4>Загальна сума: {calculateTotalPrice()} грн</h4>
          <button type="Прод">Підтвердити замовлення</button>
        </>}
      </form >
    </>
  );
}
