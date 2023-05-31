import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  DateSate,
  PreparedDateSate,
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
  const [dateState, setDateState] = useState<DateSate>({
    end: null,
    start: null,
  });
  const [preparedDate, setPreparedDate] = useState<PreparedDateSate>({
    end: null,
    start: null,
  });
  const [isWrongDateOrder, setIsWrongDateOrder] = useState<boolean>(false);

  const handleDateStateChange = (date: Date | null, params: string) => {
    setDateState({ ...dateState, [params]: date });
  };
  const prepareDate = () => {
    if (!!dateState.end && !!dateState.start) {
      const preparedStartDate = dateState.start.toLocaleDateString();
      const preparedEndDate = dateState.end.toLocaleDateString();
      setPreparedDate({ end: preparedEndDate, start: preparedStartDate });
    } else return;
  };

  useEffect(() => {
    if (dateState.start && dateState.end && dateState.end < dateState.start) {
      setIsWrongDateOrder(true);
    } else {
      setIsWrongDateOrder(false);
      prepareDate();
    }
    // eslint-disable-next-line
  }, [dateState]);

  const handleAddProduct = async (product: Omit<Product, "id" | "fid">) => {
    const id = products.length + 1;

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
    // eslint-disable-next-line
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
    handleDateStateChange,
    dateState,
    isWrongDateOrder,
    preparedDate,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// eslint-disable-next-line
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
