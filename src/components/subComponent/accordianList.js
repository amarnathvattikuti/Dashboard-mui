import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';


const AccordianList = () => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <PeopleIcon 
                        style={{marginRight: "25px"}}
                        />
                    <Typography>
                        
                        Customers
                        </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {['List', 'Details', 'Edit'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>                            
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ShoppingBagIcon 
                        style={{marginRight: "25px"}}
                        />
                    <Typography>                      
                        Products
                        </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {['List', 'Create'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>                            
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ShoppingCartIcon 
                        style={{marginRight: "25px"}}
                        />
                    <Typography>                      
                        Orderss
                        </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {['List', 'Details'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>                            
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ReceiptIcon 
                        style={{marginRight: "25px"}}
                        />
                    <Typography>                      
                        Invoices
                        </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {['List', 'Details'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>                            
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordianList;