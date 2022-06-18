import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartIcon from '@mui/icons-material/PieChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Logo from '../subComponent/logo.PNG';
import AccordianList from '../subComponent/accordianList';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';



const DrawerCont = () => {
    const navigate = useNavigate();

    const generalItems = [
        {
            text: 'Overview',
            onClick: () => navigate('/')
        },
        {
            text: 'Analytics',
            onClick: () => navigate('/')
        },
        {
            text: 'Finance',
            onClick: () => navigate('/')
        },
        {
            text: 'Logistics',
            onClick: () => navigate('/')
        },
        {
            text: 'Account',
            onClick: () => navigate('/')
        }
    ];


    return (
        <div>
            <img src={Logo}
            className="logo" alt="logo" />
            <ListItemButton
                style={{
                    backgroundColor: "#1a212f",
                    width: "240px",
                    margin: "auto",
                    height: "70px",
                    borderRadius: "10px"
                }}
            >
                <h4
                    style={{ position: "absolute", top: "-7px" }}
                >Acme Inc </h4>
                <span style={{
                    fontSize: "13px",
                    position: "absolute",
                    top: "38px",
                    color: "#9fa0a4"
                }}>your tier: premium</span>
            </ListItemButton>
            <Divider
                style={{
                    border: "1px solid #1e2534",
                    margin: "30px 0px",
                    background: "#1c2436 !important"
                }} />
            <div
                style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    paddingLeft: "30px",
                    paddingTop: "20px",
                    fontWeight: "600"
                }}>
                GENERAL
            </div>
            <List>
                {generalItems.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                        <ListItem key={text} disablePadding onClick={onClick}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 ? <HomeIcon /> : ""}
                                    {index === 1 ? <BarChartOutlinedIcon /> : ""}
                                    {index === 2 ? <PieChartIcon /> : ""}
                                    {index === 3 ? <LocalShippingIcon /> : ""}
                                    {index === 4 ? <AccountCircleIcon /> : ""}
                                </ListItemIcon>
                                <ListItemText primary={text}>

                                </ListItemText>
                                {
                                    index === 3 ?
                                        <Chip label="New" size="small"
                                            style={{
                                                backgroundColor: "#10b981",
                                                color: "white",
                                                marginTop: "5px",
                                                fontWeight: "600",
                                                paddingTop: "3px"
                                            }}
                                        /> : null
                                }
                            </ListItemButton>
                        </ListItem>
                    )
                }
                )}
            </List>

            <List>
                <div
                    style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        paddingLeft: "20px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontWeight: "600"
                    }}>
                    MANAGEMENT
                </div>
                <AccordianList />
            </List>
        </div>
    );
}

export default DrawerCont;