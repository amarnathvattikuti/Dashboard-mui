import  React,{useState} from 'react';
//import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avataricon from '../images/avatar-anika_visser.png';
import Ukflag from '../images/uk_flag.svg';
import Badge from '@mui/material/Badge';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DrawerCont from './subComponent/drawer';


const drawerWidth = 280;
const settings = ['Profile', 'Settings', 'Change organisation'];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = <DrawerCont />;

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { xl: `calc(100% - ${drawerWidth}px)` },
            ml: { xl: `${drawerWidth}px` },
          }}
          style={{
            backgroundColor: "white",
            boxShadow: "2px 2px 2px #e9e6e6"
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xl: 'flex' } }}>
              <IconButton
                color="default"
                aria-label="open drawer"
                edge="start"

                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: 'block', xl: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }} >
              <IconButton>
                <img src={Ukflag}
                  alt="uk-flag"
                  style={{ width: '20px' }} />
              </IconButton>
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton>
                <GroupOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new notifications"
                color="default"
                style={{ marginRight: "10px" }}
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={Avataricon} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  style={{ padding: "10px 30px" }}
                >
                  <Avatar alt="Remy Sharp" src={Avataricon} style={{ marginRight: "10px" }} /> Anika visser <br />
                  <span className="subTitle">Acme Inc</span>
                </MenuItem>
                <Divider
                  style={{
                    margin: "15px 0px",
                    border: "1px solid #1c2436 !important",
                    background: "#1c2436 !important"
                  }} />
                {settings.map((setting, index) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}
                    style={{ padding: "10px 30px" }}
                  >
                    {index === 0 ? <AccountCircleIcon style={{ marginRight: "10px" }} /> : null}
                    {index === 1 ? <SettingsIcon style={{ marginRight: "10px" }} /> : null}
                    {index === 2 ? <CompareArrowsOutlinedIcon style={{ marginRight: "10px" }} /> : null}
                    <Typography textAlign="center">{setting}</Typography>
                    { }

                  </MenuItem>
                ))}
                <Divider
                  style={{
                    margin: "15px 0px",
                    border: "1px solid #1c2436 !important",
                    background: "#1c2436 !important"
                  }} />
                <MenuItem
                  style={{ padding: "10px 30px" }}
                >
                  <LogoutOutlinedIcon style={{ marginRight: "10px" }} /> Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { xl: drawerWidth }, flexShrink: { xl: 0 } }}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', xl: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', xl: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;
