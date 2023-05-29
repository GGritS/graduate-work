import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import PRODUCTS from "../../../../productsData";
import { FC } from "react";
import { ProductCardValue } from "../../../../types";
import { calculateTotalPrice } from "./calculateTotalPrice";
import { ProductCard } from "../product-card";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// function getStyles(name: string, product: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       product.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

type OrderSelectProps = {
  handleChangeSelectedProducts: (event: SelectChangeEvent<string[]>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  product: string[];
  selectedProducts: ProductCardValue[];
  setProduct: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedProducts: React.Dispatch<React.SetStateAction<ProductCardValue[]>>;
  handleAddSelectedProduct: (id: number) => void;
};

export const OrderSelect: FC<OrderSelectProps> = ({
  handleChangeSelectedProducts,
  handleFormSubmit,
  product,
  selectedProducts,
  setProduct,
  setSelectedProducts,
  handleAddSelectedProduct,
}) => {
  return (
    <>
      <form
        style={{ width: "100%", textAlign: "center" }}
        onSubmit={handleFormSubmit}
      >
        <FormControl fullWidth>
          <InputLabel style={{ marginTop: "15px" }} size="normal">
            Продукти
          </InputLabel>
          <Select
            style={{ marginTop: "15px" }}
            labelId="demo-multiple-label"
            id="demo-multiple-chip"
            multiple
            fullWidth
            value={product}
            onChange={handleChangeSelectedProducts}
            input={
              <OutlinedInput
                fullWidth
                id="select-multiple-chip"
                label="Продукти"
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <div
                    key={value}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Chip label={value} />
                  </div>
                ))}
              </Box>
            )}
            // MenuProps={MenuProps}
          >
            {PRODUCTS.map((el) => (
              <MenuItem
                key={el.name}
                value={el.name}
                onClick={() => handleAddSelectedProduct(el.id - 1)}
                // style={getStyles(el.name, product, theme)}
              >
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            setProduct={setProduct}
            setSelectedProducts={setSelectedProducts}
          />
        ))}
        {product.length > 0 && (
          <>
            <h4>
              Загальна сума замовлення: {calculateTotalPrice(selectedProducts)}
              грн
            </h4>
            <Button variant="contained" color="secondary" type="submit">
              Підтвердити замовлення
            </Button>
          </>
        )}
      </form>
    </>
  );
};
