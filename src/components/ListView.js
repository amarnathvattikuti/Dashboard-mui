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
                        <h2>Customers</h2>
                    </Grid>
                    <Grid item xs={12} md={6}
                        style={{
                            textAlign: "right",

                            marginTop: "25px"
                        }}
                    >
                        <Button
                            style={{
                                textTransform: 'none',
                                padding: "7px 25px",
                                borderRadius: "10px"
                            }}
                            variant="contained">+ Add</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" startIcon={<FileUploadIcon />}
                            style={{
                                textTransform: "none",
                                marginRight: "30px"
                            }}
                        >Import</Button>
                        <Button color="primary" startIcon={<DownloadIcon />}
                            style={{ textTransform: "none" }}
                        >Export</Button>
                    </Grid>
                    <Grid item xs={12}
                        style={{marginTop: "30px"}}
                    >
                        <UserTable />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default ListView;