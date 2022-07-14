import "./List.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { DataGrid } from '@mui/x-data-grid';


export default function List({ rows, columns, title }) {
    return (
        <div className="list">
            <div className="top">
                <h1 className="title"> {title} </h1>
                <Link to="/products/new" style={{ textDecoration: "none" }}>
                    <button className="btn">
                        {" "}
                        <AddBoxIcon /> Añadir Producto{" "}
                    </button>
                </Link>
            </div>
            <div className="bottom">
                {/* <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((e) =>  {
                                        return (
                                            <TableCell>{ e }</TableCell>
                                        )
                                    }
                                    )
                                }
                                <TableCell>Editar/Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.model}</TableCell>
                                    <TableCell >{row.brand}</TableCell>
                                    <TableCell ><img src={row.image} alt="" width='35px' height='35px'/></TableCell>
                                    <TableCell >{row.price}</TableCell>
                                    <TableCell >{row.category}</TableCell>
                                    <TableCell >{row.type}</TableCell>
                                    <TableCell >{row.stock}</TableCell>
                                    <TableCell > {row.id} </TableCell>
                                    <TableCell > <ModeEditIcon/> </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}
                <div style={{ height: 800, width: '90%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={12}
                        rowsPerPageOptions={[5]}                      
                    />
                </div>
            </div>
        </div>
    );
}
