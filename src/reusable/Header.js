import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
    <AppBar position="static" className="header-appbar">
      <Toolbar className="header-toolbar">
        {/* Logo with Sliding Image */}
        <div className="logo-container">
          <img src={logo} alt="Ritual Icon" className="logo-icon" />
          <img src={ritualImage} alt="Ritual Slideout" className="slideout-image" />
        </div>

        {/* Navbar for Desktop */}
        {!isMobile && (
          <Box component="nav" className="navbar">
            <Link to="/" className="navbar-link">
              <Button>Home</Button>
            </Link>
            <Link to="/About" className="navbar-link">
              <Button>About Us</Button>
            </Link>
            <Link to="/business" className="navbar-link">
              <Button>Business</Button>
            </Link>
            <Link to="/apppage" className="navbar-link">
              <Button>Ritual App</Button>
            </Link>
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
  <Button
    variant="contained"
    className="download-button"
    href="https://ritual.co/order/get-started/RITUALWELCOME?_branch_match_id=874692517667835832&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8wryyxJ1SvKLClNzNFLztf38Pd1DXB0d7WvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQB5Rhq0OwAAAA%3D%3D&promo=RITUALWELCOME"
    target=""
    rel="noopener noreferrer"
  >
    Download Ritual App
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
          <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              {["Home", "About Us", "Business", "Ritual App", "Download Ritual"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <Link to={text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`}>
                      <ListItemText primary={text} />
                    </Link>
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
