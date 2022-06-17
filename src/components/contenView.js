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
          <Item
            style={{ boxShadow: "none" }}
          >
            <h1>Good Morning</h1>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}
          style={{
            paddingTop: "55px"
          }}
        >
          <Item
            style={{ boxShadow: "none", textAlign: "right"}}
          >
            <Button variant="outlined" startIcon={<AssessmentIcon />}
              style={{
                textTransform: "none",
                borderRadius: "10px",
                padding: "10px 25px"
              }}
            >
              Reports
            </Button>

            <FormControl
              style={{ marginLeft: "15px" }}
            >
              <InputLabel id="period">period</InputLabel>
              <Select
                labelId="period"
                id="period"
                value={period}
                label="period"
                onChange={handleChange}
                style={{height:"45px", borderRadius: "10px"}}
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
        style={{
          backgroundColor: "#5048e5",
          color: "white",
          padding: "50px",
          borderRadius: "15px",
          marginTop: "40px"
        }}
      >
        <Grid item xs={12} md={3} >
          <Item
            style={{ boxShadow: "none", background: "transparent" }}
          >
            <img src={headGraphic}
              style={{ width: "90%" }}
              alt="headGrap" />
          </Item>
        </Grid>
        <Grid item xs={12} md={9}
          style={{ paddingLeft: "30px" }}
        >
          <Item
            style={{ boxShadow: "none", background: "transparent" }}
          >
            <Chip label="New"
              style={{
                backgroundColor: "#10b981", color: "white"
              }}
            />
            <h1 style={{ marginBottom: "0px", color: "#fff" }}
            >Welcome to Material Kit Pro v5!</h1>
            <p style={{ marginTop: "0px", color: "#fff" }}>
              Your dashboard has been improved! Explore new features like Notifications, Search, Jobs Platform and more.</p>
            <Button variant="contained"
              style={{
                backgroundColor: "#10b981",
                textTransform: "none"
              }}
            >Dismiss Banner</Button>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={3}
        style={{
          margin: "50px 0px"
        }}
      >
        <Grid item xs={12} md={6}
          style={{ padding: "30px 10px" }}
        >
          <Item>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Item
                  style={{ boxShadow: "none" }}
                >
                  <Donut />
                </Item>
              </Grid>
              <Grid item xs={12} md={8}>
                <Item
                  style={{ boxShadow: "none" }}
                >
                  <h2
                    style={{ color: "#5048e5" }}
                  >0.299 BTC</h2>
                  <p>Your crypto wallet</p>
                </Item>
              </Grid>
            </Grid>
            <Divider />
            <Grid xs={12} md={8}>
              <Item
                style={{ boxShadow: "none" }}
              >
                <Button startIcon={<ArrowForwardIcon />}
                  style={{ textTransform: "none" }}
                >
                  See all activity
                </Button>
              </Item>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}
          style={{ padding: "30px 10px" }}
        >
          <Item>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Item
                  style={{ boxShadow: "none" }}
                >
                  <Donut />
                </Item>
              </Grid>
              <Grid item xs={12} md={8}>
                <Item
                  style={{ boxShadow: "none" }}
                >
                  <h2
                    style={{ color: "#10b981" }}
                  >$21,500.00</h2>
                  <p>Your private wallet</p>
                </Item>
              </Grid>
            </Grid>
            <Divider />
            <Grid item xs={12} md={8}>
              <Item
                style={{ boxShadow: "none" }}
              >
                <Button startIcon={<ArrowForwardIcon />}
                  style={{ textTransform: "none" }}
                >
                  Withdraw money
                </Button>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      <Grid>
        <Item
          style={{ boxShadow: "none" }}
        >
          <LatestTrans />
        </Item>
      </Grid>
      <Grid style={{ margin: "50px 0px" }}>
        <Item
          style={{ boxShadow: "none" }}
        >
          <Cards />
        </Item>
      </Grid>

    </Box>
  )
}

export default ContentView;