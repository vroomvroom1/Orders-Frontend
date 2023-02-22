import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { FunctionComponent } from 'react';

interface RowProps {
    rowData: [],
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'orderType', headerName: 'OrderType', width: 150 },
    { field: 'customerName', headerName: 'CustomerName', width: 150 },
    { field: 'createdDate', headerName: 'CreatedDate', width: 150 },
    { field: 'createdByUsername', headerName: 'CreatedByUsername', width: 150 },
];

const Table: FunctionComponent<RowProps> = (props) => {
    return (
        <div style={{ height: 300, width: 800 }}>
            <DataGrid rows={props.rowData} columns={columns} checkboxSelection={true} components={{ Toolbar: GridToolbar }} />
        </div>
    )
}

export default Table;