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

const OpenModalButton: FC<{ data: User }> = () => {
  const [open, setOpen] = useState(false);
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
          test: "inner test",
          value: "inner value",
        },
        {
          id: 2,
          test: "aasdm",
          value: "inner value",
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

export const DataGridOuter: FC = () => {
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
          name: "asd",
          age: 123,
          // data to inner grid
          dataToInner: {
            title: "to inner title 1",
          },
        },
        {
          id: 2,
          name: "aasdm",
          age: 42,
          dataToInner: {
            title: "to inner title 12",
          },
        },
      ],
    };
  }, []);

  return <DataGrid<Row> columns={columns} rows={rows} />;
};
