import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
// import PRODUCTS from "../../../../productsData";
import { FC } from "react";
import { CustomerData, ProductCardValue } from "../../../../types";
import { calculateTotalPrice } from "./calculateTotalPrice";
import { ProductCard } from "../product-card";
import { Product } from "../../../../context/products";

type OrderSelectProps = {
  handleChangeSelectedProducts: (event: SelectChangeEvent<string[]>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  productTitles: string[];
  selectedProducts: ProductCardValue[];
  setProduct: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedProducts: React.Dispatch<React.SetStateAction<ProductCardValue[]>>;
  handleAddSelectedProduct: (id: number) => void;
  products: Product[];
  customerData: CustomerData;
};

export const OrderSelect: FC<OrderSelectProps> = ({
  handleChangeSelectedProducts,
  handleFormSubmit,
  productTitles,
  selectedProducts,
  setProduct,
  setSelectedProducts,
  handleAddSelectedProduct,
  products,
  customerData,
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
            value={productTitles}
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
            {products.map((product, index) => (
              <MenuItem
                key={index}
                value={product.name}
                onClick={() => handleAddSelectedProduct(index)}
              >
                {product.name}
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
        {productTitles.length > 0 && (
          <>
            <h4>
              Загальна сума замовлення: {calculateTotalPrice(selectedProducts)}
              грн
            </h4>
            <Button
              variant="contained"
              disabled={
                productTitles.length <= 0 ||
                customerData.address === "" ||
                customerData.firstName === "" ||
                customerData.phoneNumber === ""
              }
              color="secondary"
              type="submit"
            >
              Підтвердити замовлення
            </Button>
          </>
        )}
      </form>
    </>
  );
};
