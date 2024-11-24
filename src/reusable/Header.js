import React, { useState, useEffect } from "react";
import {AppBar,Toolbar,Button,Box,IconButton,Drawer,List,ListItem,ListItemText,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/ritualbluelogo.jpeg";
import ritualImage from "../assets/images/ritualslideoutlogo.png";
import ritualBlueMobileLogo from "../assets/images/ritualbluemtlogo.png";
import "../styles/Header.css";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      className="header-appbar"
    >
      <Toolbar className="header-toolbar">
        {/* Logo with Sliding Image */}
        <div className="logo-container">
          <img src={logo} alt="Ritual Icon" className="logo-icon" />
          <img src={ritualImage} alt="Ritual Slideout" className="slideout-image" />
        </div>

        {/* Navbar for Desktop */}
        {!isMobile && (
          <Box component="nav" className="navbar">
            <Button className="navbar-link">Home</Button>
            <Button className="navbar-link">Features</Button>
            <Button className="navbar-link">Partners</Button>
            <Button className="navbar-link">Contact</Button>
          </Box>
        )}

{isMobile && (
  <img
    src={ritualBlueMobileLogo}
    alt="Ritual Mobile Logo"
    className="mobile-center-logo"
  />
)}

        {/* Download Ritual Button */}
        {!isMobile && (
          <Button variant="contained" className="download-button">
            Download Ritual
          </Button>
        )}

        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <IconButton
            edge="end"
            className="menu-button"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {["Home", "Features", "Partners", "Contact", "Download Ritual"].map(
                (text) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
