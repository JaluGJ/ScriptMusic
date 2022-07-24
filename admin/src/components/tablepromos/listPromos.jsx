import './listPromos.scss'
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

export default function List({ rows, columns, title, tipo }) {
    return (
        <div className="listPromos">
            <div className="topPromos">
                <h1 className="titlePromos"> {title} </h1>
                <Link to="/promo/new" style={{ textDecoration: "none" }}>
                    <button className="btnPromos">  
                        <AddBoxIcon /> Añadir {tipo}
                    </button>
                </Link>
            </div>
            <div className="bottomPromos">                   
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={40}
                        rowsPerPageOptions={[40]}                      
                    />
            </div>
        </div>
    )
}