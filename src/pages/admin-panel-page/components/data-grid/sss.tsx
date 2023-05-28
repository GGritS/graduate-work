// import { FC, memo, MouseEvent, useMemo, useState } from "react";

// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

// // import { ParseProductResponse, ParseReport } from "../../../../api/types";
// // import { noop } from "../../../../utils/noop";
// // import { getDateFromISOString } from "../../../../utils/string";

// // import { TrashCanIcon } from "../../../Icons";
// // import { VariantReportsTablePopup } from "../../../popups";
// // import { useStyles } from "./useStyles";

// export type ReportsTableProps = {
//   report: ParseReport;
//   onDelete?: (id: number, onLoadEnd: () => void) => void;
// };

// type ProductRow = Pick<
//   ParseProductResponse,
//   "productCompetitors" | "variantResults"
// > & {
//   id: number;
//   title: string;
//   vendor: string;
//   updateCount: number;
// };

// export type OpenModalButtonProps = Pick<
//   ProductRow,
//   "variantResults" | "productCompetitors"
// >;

// export const OpenModalButton: FC<OpenModalButtonProps> = memo(
//   ({ variantResults, productCompetitors }) => {
//     const [open, setOpen] = useState(false);

//     const openPopup = () => {
//       setOpen(true);
//     };

//     const closePopup = () => {
//       setOpen(false);
//     };

//     return (
//       <>
//         <Modal open={open} closePopup={closePopup}>
//           <VariantReportsTablePopup
//             productCompetitors={productCompetitors}
//             variantResults={variantResults}
//           />
//         </Modal>
//         <Button onClick={openPopup}>Open</Button>
//       </>
//     );
//   }
// );

// export const ProductReportsAccordion: FC<ReportsTableProps> = ({
//   report,
//   onDelete = noop,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const { columns, rows } = useMemo<{
//     rows: GridRowsProp<ProductRow>;
//     columns: GridColDef<ProductRow>[];
//   }>(() => {
//     return {
//       columns: [
//         {
//           field: "title",
//           headerName: "Title",
//           flex: 1,
//         },
//         {
//           field: "vendor",
//           headerName: "Vendor",
//           width: 150,
//         },

//         {
//           field: "updateCount",
//           headerName: "Update count",
//           align: "center",
//           width: 100,
//         },

//         {
//           field: "open-modal",
//           headerName: "Show results",
//           width: 150,
//           align: "center",
//           renderCell: (params) => (
//             <OpenModalButton
//               productCompetitors={params.row.productCompetitors}
//               variantResults={params.row.variantResults}
//             />
//           ),
//         },
//       ],
//       rows: report.data.map<ProductRow>((p, i) => ({
//         id: i,
//         title: p.title,
//         vendor: p.vendor,
//         variantResults: p.variantResults,
//         updateCount: p.variantResults.reduce(
//           (acc, pv) =>
//             acc +
//             pv.parsedCompetitors.filter((c) => c.action === "updated").length,
//           0
//         ),
//         productCompetitors: p.productCompetitors,
//       })),
//     };
//   }, [report]);

//   const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
//     e.stopPropagation();
//     setLoading(true);

//     onDelete(report.id, () => setLoading(false));
//   };

//   return (
//     <Accordion sx={{ width: "100%" }} TransitionProps={{ unmountOnExit: true }}>
//       <AccordionSummary>
//         <Box className={styles.accordionSummary}>
//           <Typography>
//             Report from {getDateFromISOString(report.created_at)}
//           </Typography>
//           {loading ? (
//             <CircularProgress className={styles.circularProgress} size="34px" />
//           ) : (
//             <IconButton size="small" onClick={handleDelete} color="error">
//               <TrashCanIcon />
//             </IconButton>
//           )}
//         </Box>
//       </AccordionSummary>
//       <AccordionDetails sx={{ height: "400px" }}>
//         <DataGrid<ProductRow>
//           className={styles.table}
//           columns={columns}
//           rows={rows}
//           pageSizeOptions={[10, 25, 50]}
//         />
//       </AccordionDetails>
//     </Accordion>
//   );
// };
