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
            className="my-4 mx-2" alt="logo" />
            <ListItemButton
             className="w-60 bg-lightdark m-auto py-4 px-5 h-20 rounded-md block"
            >
                <h4 className="w-100 font-semibold text-white">Acme Inc </h4>
                <p className="text-secondary text-sm opacity-70">Your tier : premium</p>
            </ListItemButton>
            <Divider className="py-5 border-lightdark"/>
            <div className="font-semibold pt-6 pl-6 text-xs text-secondary opacity-50">
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
                                            className="bg-success text-white"
                                        /> : null
                                }
                            </ListItemButton>
                        </ListItem>
                    )
                }
                )}
            </List>

            <List>
                <div className="py-4 pl-5 text-xs text-secondary opacity-60">
                    MANAGEMENT
                </div>
                <AccordianList />
            </List>
        </div>
    );
}

export default DrawerCont;