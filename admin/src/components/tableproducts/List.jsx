import "./List.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


export default function List({ rows, columns, title, tipo }) {
    return (
        <div className="list">
            <div className="top">
                <h1 className="title"> {title} </h1>
                <Link to="/products/new" style={{ textDecoration: "none" }}>
                    <button className="btn">  
                        <AddBoxIcon /> Añadir {tipo}
                    </button>
                </Link>
            </div>
            <div className="bottom">                   
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={30}
                        rowsPerPageOptions={[6]}                      
                    />
            </div>
        </div>
    );
}
