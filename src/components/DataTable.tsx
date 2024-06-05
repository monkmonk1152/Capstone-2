import { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

// Define columns for the DataGrid
const columns: GridColDef[] = [
    { field: 'contact_name', headerName: "Contact name", flex: 1 },
    { field: 'email', headerName: "Email", flex: 1 },
    { field: 'phone_number', headerName: "Phone Number", flex: 1 },
    { field: 'job_title', headerName: "Job Title", flex: 1 },
    { field: 'breed', headerName: "Breed", flex: 1 },
    { field: 'dog_name', headerName: "Dog Name", flex: 1 },
];

function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteData = async () => {
        await server_calls.delete(selectionModel[0]); // Wait for the delete operation to complete
        getData(); // Refresh data after deletion
        console.log(`Selection model: ${selectionModel}`);
    };

    return (
        <>
            <Modal
                name={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row bg-yellow-400">
                <button
                    className="p-3 bg-slate-400 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={handleOpen}
                >
                    Create New Contact
                </button>
                <Button onClick={handleOpen} className="p-3 bg-slate-400 rounded m-3 hover:bg-slate-800 hover:text-white">Update</Button>
                <Button onClick={deleteData} className="p-3 bg-slate-400 rounded m-3 hover:bg-slate-800 hover:text-white">Delete</Button>
            </div>
            <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{ height: 400, width: '100%' }}>
                <h2 className="p-3 bg-blue-500 my-2 rounded">My Contacts</h2>
                <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
                    checkboxSelection={true}
                    onSelectionModelChange={(item: any) => {
                        setSelectionModel(item.selectionModel);
                    }}
                />
            </div>
        </>
    );
}

export default DataTable;
