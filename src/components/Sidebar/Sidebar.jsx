import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom'; // Updated imports
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import BugReportIcon from '@mui/icons-material/BugReport';
import './style.css';

const drawerWidth = 240;

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleMenuItemClick = (index, path) => {
    setSelectedItem(index);
    navigate(path); // Redirect to the corresponding path
  };

  const menuItems = [
    { icon: <AccountCircleIcon />, text: 'Profile', path: '/profile' },
    { icon: <DashboardIcon />, text: 'Dashboard', path: '/dashboard' },
    { icon: <MonetizationOnIcon />, text: 'NFT', path: '/nft' },
    { icon: <BuildIcon />, text: 'App Tools', path: '/app-tools' },
    { icon: <SettingsIcon />, text: 'Settings', path: '/settings' },
    { icon: <HelpIcon />, text: 'Help', path: '/help' },
    { icon: <BugReportIcon />, text: 'Bug Report', path: '/bug-report' },
  ];

  return (
    <div className="sidebar" style={{ overflow: 'hidden' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        classes={{
          paper: 'drawerPaper',
        }}
      >
        <div className="drawerHeader">Sidebar</div>
        <List style={{ background: 'black' }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              className={`menu-item ${selectedItem === index ? 'selected' : ''}`}
              style={{ background: selectedItem === index ? 'yellow' : 'black' }}
              onClick={() => handleMenuItemClick(index, item.path)}
            >
              <ListItemIcon className="menu-icon" style={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} className="menu-text" />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Render the nested routes */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
