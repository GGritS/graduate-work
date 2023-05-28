import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Paper } from "@mui/material";
import PRODUCTS from "../../productsData";

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
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={product}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {PRODUCTS.map((el) => (
              <MenuItem
                key={el.name}
                value={el.name}
                style={getStyles(el.name, product, theme)}
              >
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedProducts.map((product) => (
          <div key={product.id}>
            <Paper variant="outlined" square>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Ціна: {product.price} грн з одиницю</p>
              <img
                style={{ width: "250px", height: "200px" }}
                src={product.photo}
                alt="product photo"
              />
              <input
                value={product.quantity || ""}
                onChange={(event) => handleQuantityChange(event, product.id)}
              ></input>
              <Chip
                onClick={() => handleRemoveProduct(product.id)}
                label="Deletable"
              />
            </Paper>
          </div>
        ))}
        <button type="submit">Підтвердити замовлення</button>
      </form>
    </div>
  );
}
