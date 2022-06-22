import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UserTable from "./subComponent/dataTable";



const drawerWidth = 280;
const ListView = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'left'
    }));

    return (
        <>
            <Box
                sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Grid container
                    spacing={{ xs: 2, sm: 2, md: 3 }}>
                    <Grid item xs={6} sm={6} md={6}>
                        <Item className="shadow-none">
                            <h2 className="text-3xl font-semibold mt-4">Customers</h2>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} className=" mt-5">
                        <Item className="shadow-none text-right">
                            <Button className="normal-case py-2 px-7 rounded-md"
                                variant="contained">+ Add</Button>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container className="mt-6">
                    <Item className="shadow-none">
                        <Grid item xs={12} sm={12} md={12}>
                            <Button color="primary" startIcon={<FileUploadIcon />}
                                className="normal-case mr-3" >Import</Button>
                            <Button color="primary" startIcon={<DownloadIcon />}
                                className="normal-case"
                            >Export</Button>
                        </Grid>
                    </Item>
                </Grid>
                <Grid container>
                <Item className="shadow-none">
                    <Grid item xs={12} sm={12} md={12} className="mt-3">
                        <UserTable />
                    </Grid>
                 </Item>
                </Grid>

            </Box>
        </>
    )
}

export default ListView;