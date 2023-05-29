import { Button, Modal, Paper } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { FC, useMemo, useState } from "react";

type User = {
  title: string;
};

type Row = {
  name: string;
  age: number;
  dataToInner: User;
};

type InnerRow = {
  test: string;
  value: string;
};

const OpenModalButton: FC<{ data: User }> = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data);

  const { columns, rows } = useMemo<{
    rows: GridRowsProp<InnerRow>;
    columns: GridColDef<InnerRow>[];
  }>(() => {
    return {
      columns: [
        {
          field: "test",
          headerName: "Test",
          flex: 1,
        },
        {
          field: "value",
          headerName: "Value",
          width: 150,
        },
      ],
      rows: [
        {
          id: 1,
          test: "inner test1",
          value: data.title,
        },
        {
          id: 2,
          test: "aasdm1",
          value: data.title,
        },
      ],
    };
  }, []);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper sx={{ height: "400px" }}>
          <DataGrid<InnerRow> columns={columns} rows={rows} />
        </Paper>
      </Modal>
    </>
  );
};

const DataGridOuter: FC = () => {
  const { columns, rows } = useMemo<{
    rows: GridRowsProp<Row>;
    columns: GridColDef<Row>[];
  }>(() => {
    return {
      columns: [
        {
          field: "name",
          headerName: "Name",
          flex: 1,
        },
        {
          field: "age",
          headerName: "Age",
          width: 150,
        },

        {
          field: "open-modal",
          headerName: "Open inner data grid",
          width: 150,
          align: "center",
          renderCell: (params) => (
            <OpenModalButton data={params.row.dataToInner} />
          ),
        },
      ],
      rows: [
        {
          id: 1,
          name: "Ivan",
          age: 123,
          // data to inner grid
          dataToInner: {
            title: "to inner title 1",
          },
        },
        {
          id: 2,
          name: "Denis",
          age: 42,
          dataToInner: {
            title: "to inner title 2",
          },
        },
      ],
    };
  }, []);

  return <DataGrid<Row> columns={columns} rows={rows} />;
};
