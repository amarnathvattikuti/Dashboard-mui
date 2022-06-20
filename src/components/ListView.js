import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UserTable from "./subComponent/dataTable";


const drawerWidth = 280;
const ListView = () => {

    return (
        <>
            <Box
                sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h2 className="text-3xl font-semibold mt-3">Customers</h2>
                    </Grid>
                    <Grid item xs={12} md={6} className="text-right mt-5">
                        <Button className="normal-case py-2 px-7 rounded-md"
                            variant="contained">+ Add</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" startIcon={<FileUploadIcon />}
                          className="normal-case mr-3" >Import</Button>
                        <Button color="primary" startIcon={<DownloadIcon />}
                           className="normal-case"
                        >Export</Button>
                    </Grid>
                    <Grid item xs={12} className="mt-3">
                        <UserTable />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default ListView;