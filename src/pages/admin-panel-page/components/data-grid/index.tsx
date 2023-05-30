import { Button, Modal, Paper } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { FC, useMemo, useState } from "react";
import { useOrdersContext } from "../../../../context/orders/OrdersContext";
import { CustomerOrder, Order } from "../../../../context/orders";

type UserOrder = { data: CustomerOrder[] };

type Row = Omit<Order, "orderTime" | "totalPrice"> & {
  id: number;
  orderedTime: string;
  totalPrice: string;
};

type InnerRow = Omit<CustomerOrder, "price" | "quantity"> & {
  id: number;
  totalPrice: string;
  price: string;
  quantity: string;
};

const OpenModalButton: FC<UserOrder> = ({ data }) => {
  const [open, setOpen] = useState(false);
  // console.log(data);

  const { columns, rows } = useMemo<{
    rows: GridRowsProp<InnerRow>;
    columns: GridColDef<InnerRow>[];
  }>(() => {
    return {
      columns: [
        {
          field: "id",
          headerName: "id",
          width: 60,
        },
        {
          field: "name",
          headerName: "Назва продукту",
          width: 200,
        },
        {
          field: "quantity",
          headerName: "Кількість (шт.)",
          width: 200,
        },
        {
          field: "price",
          headerName: "Ціна продукту (за шт.)",
          width: 200,
        },
        {
          field: "totalPrice",
          headerName: "Ціна за всю кілкість товару ",
          width: 200,
        },
      ],
      rows: data.map((customerOrder, index) => {
        return {
          id: index,
          name: customerOrder.name,
          price: `${customerOrder.price} грн.`,
          quantity: `${customerOrder.quantity} шт.`,
          totalPrice: `${customerOrder.quantity * customerOrder.price} грн.`,
        };
      }),
    };
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Подробиці...
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper sx={{ height: "400px" }}>
          <DataGrid<InnerRow> columns={columns} rows={rows} />
        </Paper>
      </Modal>
    </>
  );
};

export const DataGridOuter: FC = () => {
  const { orders } = useOrdersContext();

  const convertTotDate = (seconds: number | undefined) => {
    if (!seconds) return "Error date";
    return new Date(seconds * 1000).toLocaleDateString();
  };

  const { columns, rows } = useMemo<{
    rows: GridRowsProp<Row>;
    columns: GridColDef<Row>[];
  }>(() => {
    return {
      columns: [
        {
          field: "id",
          headerName: "id",
          width: 60,
        },
        {
          field: "customerName",
          headerName: "Ім'я замовника",
          flex: 1,
          minWidth: 250,
        },
        {
          field: "customerAddress",
          headerName: "Адресса замовника",
          width: 250,
        },
        {
          field: "customerOrders",
          headerName: "Відкрити подробиці замовлення",
          width: 200,
          align: "center",
          renderCell: (params) => (
            <OpenModalButton data={params.row.customerOrders} />
          ),
        },
        {
          field: "customerPhoneNumber",
          headerName: "Номер телефону замовника",
          width: 200,
        },
        {
          field: "orderedTime",
          headerName: "Дата замовлення",
          width: 100,
        },
        {
          field: "totalPrice",
          headerName: "Вся сумма за товар",
          width: 200,
        },
      ],
      rows: orders.map((order, index) => {
        return {
          id: index,
          customerName: order.customerName,
          customerAddress: order.customerAddress,
          customerPhoneNumber: order.customerPhoneNumber,
          customerOrders: order.customerOrders,
          totalPrice: `${order.totalPrice} грн.`,
          orderedTime: convertTotDate(order.orderTime?.seconds),
        };
      }),
    };
  }, []);

  return (
    <>
      {orders ? (
        <DataGrid<Row>
          columns={columns}
          rows={rows}
          components={{
            Toolbar: () => {
              return <GridToolbar />;
            },
          }}
        />
      ) : (
        <div>loading</div>
      )}
    </>
  );
};
