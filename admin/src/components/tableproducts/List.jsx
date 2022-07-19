import "./List.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
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
                <div className="posData">                    
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={30}
                        rowsPerPageOptions={[5]}                      
                    />
                </div>
            </div>
        </div>
    );
}
