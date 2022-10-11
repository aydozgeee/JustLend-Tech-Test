import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        width: `calc(100% - ${drawerWidth}px)`,
    },

}));
const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "MUI X", col2: "is awesome" },
    { id: 3, col1: "Material UI", col2: "is amazing" },
    { id: 4, col1: "MUI", col2: "" },
    { id: 5, col1: "Joy UI", col2: "is awesome" },
    { id: 6, col1: "MUI Base", col2: "is amazing" }
];

const columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 }
];


const Campaigns = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="Campaigns" >
            <h1 style={{ marginLeft: "10%" }}> Campaigns</h1>
            <h3 style={{ marginLeft: "10%", color: "#CECECE" }}>Subtitle about this section and maybe some help about this page</h3>

            <div>
                <div style={{ height: 300, width: "100%", marginTop: "10%", marginLeft: "10%" }}>
                    <DataGrid rows={rows} columns={columns} />
                </div>
            </div>
        </div>
    );
}

export default Campaigns;
