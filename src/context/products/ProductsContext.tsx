import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  Product,
  ProductsContextProviderProps,
  ProductsContextProviderTypes,
} from ".";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { generateRandomId } from "../orders/helperFunctions/generateRandomId";

const ProductsContext = createContext<ProductsContextProviderTypes>(
  {} as ProductsContextProviderTypes
);

export const ProductsContextProvider: FC<ProductsContextProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = async (product: Omit<Product, "id" | "fid">) => {
    const id = products.length;

    try {
      await setDoc(doc(db, "products", generateRandomId()), {
        id,
        ...product,
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleEditProduct = async (product: Product) => {
    const updateProduct = doc(db, "products", product.fid);
    const { fid, ...pushedProduct } = product;
    await updateDoc(updateProduct, { ...pushedProduct });
  };
  const handleRemoveProduct = async (fid: string) => {
    const docRef = doc(db, "products", fid);

    deleteDoc(docRef).catch((error) => {
      console.error("Ошибка при удалении документа:", error);
    });
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (doc) => {
      const products = doc.docs.map((data: any) => ({
        ...data.data(),
        fid: data.id,
      })) as Product[];

      setProducts(products);
    });

    return () => {
      unsub();
    };
  }, []);

  const value: ProductsContextProviderTypes = {
    products,
    handleAddProduct,
    handleEditProduct,
    handleRemoveProduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
