import React, { useState } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import headGraphic from '../images/banner-illustration.png';
import { Chip } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import Donut from "./charts/donutChart";
import LatestTrans from "./subComponent/LatestTrans";
import Cards from "./subComponent/cards";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#131313fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));


const drawerWidth = 280;

const ContentView = () => {

  const [period, setPeriod] = useState('Last week');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  }

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item className="shadow-none">
            <h1 className="text-3xl font-bold mt-8">Good Morning</h1>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} className="pt-7">
          <Item className="shadow-none text-right">
            <Button variant="outlined" startIcon={<AssessmentIcon />}
              className="normal-case py-3 px-7 rounded-lg" >
              Reports
            </Button>

            <FormControl className="ml-4 mt-1">
              <InputLabel id="period">period</InputLabel>
              <Select
                labelId="period"
                id="period"
                value={period}
                label="period"
                onChange={handleChange}
                className="rounded-lg h-12"
              >
                <MenuItem value="Last week">Last week</MenuItem>
                <MenuItem value="Last Month">Last Month</MenuItem>
                <MenuItem value="Last Year">Last Year</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
      </Grid>
      <Grid container
        className="bg-primary text-white p-10 rounded-lg mt-8">
        <Grid item xs={12} md={3} >
          <Item className="shadow-none bg-transparent" >
            <img src={headGraphic} className="w-90" alt="headGrap" />
          </Item>
        </Grid>
        <Grid item xs={12} md={9} className="pl-3" >
          <Item className="shadow-none bg-transparent">
            <Chip label="New" className="bg-success text-white" />
            <h1 className="mb-2 mt-4 text-white text-3xl font-bold">
              Welcome to Material Kit Pro v5!</h1>
            <p className="mt-0 text-white">
              Your dashboard has been improved! Explore new features like Notifications, Search, Jobs Platform and more.</p>
            <Button variant="contained" className="bg-success text-white normal-case mt-6"
            >Dismiss Banner</Button>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="my-10 px-3 md:px-5">
        <Grid item xs={12} md={6} className="py-3 px-4 ml-3 lg:ml-0 md:px-3">
          <Item>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Item className="shadow-none">
                  <Donut />
                </Item>
              </Grid>
              <Grid item xs={12} md={8}>
                <Item className="shadow-none pt-7">
                  <h2 className="text-center md:text-left text-primary font-bold text-3xl" >0.299 BTC</h2>
                  <p className="text-center md:text-left">Your crypto wallet</p>
                </Item>
              </Grid>
            </Grid>
            <Divider />
            <Grid xs={12} md={8}>
              <Item className="shadow-none text-center md:text-left">
                <Button startIcon={<ArrowForwardIcon />}
                  className="normal-case"
                >
                  See all activity
                </Button>
              </Item>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} className="py-3 px-4 ml-3 lg:ml-0 md:px-3">
          <Item>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Item className="shadow-none">
                  <Donut />
                </Item>
              </Grid>
              <Grid item xs={12} md={8}>
                <Item className="shadow-none pt-7">
                  <h2 className="text-center md:text-left text-success font-bold text-3xl">$21,500.00</h2>
                  <p className="text-center md:text-left">Your private wallet</p>
                </Item>
              </Grid>
            </Grid>
            <Divider />
            <Grid item xs={12} md={8}>
              <Item className="shadow-none text-center md:text-left" >
                <Button startIcon={<ArrowForwardIcon />}
                  className="normal-case"
                >
                  Withdraw money
                </Button>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Item className="shadow-none" >
          <LatestTrans />
        </Item>
      </Grid>
      <Grid item xs={12} className="my-12 mx-0">
        <Item className="shadow-none">
          <Cards />
        </Item>
      </Grid>

    </Box>
  )
}

export default ContentView;