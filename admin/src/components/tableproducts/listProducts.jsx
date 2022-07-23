import "./listProducts.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

export default function List({ rows, columns, title, tipo }) {
    return (
        <div className="listProducts">
            <div className="topProducts">
                <h1 className="titleProducts"> {title} </h1>
                <Link to="/products/new" style={{ textDecoration: "none" }}>
                    <button className="btnProducts">  
                        <AddBoxIcon /> Añadir {tipo}
                    </button>
                </Link>
            </div>
            <div className="bottomProducts">                   
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={40}
                        rowsPerPageOptions={[40]}                      
                    />
            </div>
        </div>
    );
}
