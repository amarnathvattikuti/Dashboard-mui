import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CustomerData from './userData';
import Divider from '@mui/material/Divider';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#131313fa' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function LatestTrans() {

  const data = CustomerData;

  const newData = data.slice(0, 5).map((item) => {
    return (
      <>
        <table
          style={{
            padding: "10px 15px",
            borderTop: "1px solid #ccc",
            width: "100%"
          }} key={item.id}
        >
          <tr style={{ borderBottom: "1px solid #efefef" }}>
            <td style={{
              width: "50px",
              background: "#e5e7eb",
              borderRadius: "15px",
              textAlign: "center"
            }}>
              {(item.date).slice(0, 6)}
            </td>
            <td style={{ width: "310px", paddingLeft: "20px" }}>
              {item.name} <br /> <span
                style={{ color: "#a6aab2" }}
              >{item.paymentMode}</span>
            </td>
            <td style={{ width: "130px" }}>
              {item.Status === 'Success' ?
                <Chip label="Success"
                  style={{ background: "#14b8a6", color: "white" }}
                /> : null}
              {item.Status === 'On hold' ?
                <Chip label="on hold" color="primary"
                  style={{ background: "#ffb020", color: "white" }}
                /> : null}
              {item.Status === 'fail' ? <Chip label="Failed"
                variant="outlined"
                style={{ background: "red", color: "white" }}
              /> : null}
            </td>
            <td>

              {item.Status === "Success" ?
                <span style={{ color: "#14b8a6" }}>${item.spent}.00</span> : null
              }
              {item.Status === "On hold" ?
                <span style={{ color: "#ffb020" }}>${item.spent}.00</span> : null
              }
              {item.Status === "fail" ?
                <span style={{ color: "red" }}>${item.spent}.00</span> : null
              }
            </td>
          </tr>
        </table>
      </>
    )
  })


  const mailData = data.slice(0, 5).map((element) => {
    return (
      <>
        <table key={element.id}
          style={{
            padding: "10px 20px",
            width: "100%"
          }}
        >
          <tr>
            <td>
              <img src={element.image} alt="pic"
                style={{
                  width: "35px",
                  borderRadius: "50%"
                }}
              />
            </td>
            <td
              style={{
                paddingLeft: "5px",
                width: "180px"
              }}
            >
              <span
                style={{ color: "#3d4241" }}
              >{element.name}</span><br />{element.description}</td>
            <td
              style={{
                color: "#5a6160",
                fontWeight: 300,
                fontSize: "10px",
                textAlign: "right"
              }}
            >{(element.date).slice(0, 10)}</td>
          </tr>
        </table>
      </>
    )
  })


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Item>
            <h2>Latest Transactions</h2>

            <Grid container item xs={12}
              style={{
                background: "#efefef", padding: "7px 10px"
              }}
            >
              <Grid item xs={12} md={9}>Transaction</Grid>
              <Grid item xs={12} md={3}
                style={{ textAlign: "left" }}
              >Amount</Grid>
            </Grid>
            {newData}
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h2>inbox</h2>

            {mailData}
             <Divider/>
            <Button size="small"
            style={{textTransform: "none", padding: "20px 10px"}}
            >Go to chat</Button>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
