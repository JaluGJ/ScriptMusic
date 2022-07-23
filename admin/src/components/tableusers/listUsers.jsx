import "./listUsers.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

export default function List({ rows, columns, title, tipo }) {
    return (
        <div className="listUsers">
            <div className="topUsers">
                <h1 className="titleUsers"> {title} </h1>
                <Link to="/users/new" style={{ textDecoration: "none" }}>
                    <button className="btnUsers">  
                        <AddBoxIcon /> Añadir {tipo}
                    </button>
                </Link>
            </div>
            <div className="bottomUsers">                   
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