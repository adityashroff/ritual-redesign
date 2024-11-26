import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material"; 
import { Android, Apple } from "@mui/icons-material"; 
import { Link } from "react-router-dom"; 
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer-container">
      {/* Top Section: Navigation Links */}
      <Box className="footer-top">
        <Box className="footer-links">
          <Typography variant="h6" className="footer-title">
            Company
          </Typography>
          <Link to="/about" className="footer-link">About Us</Link> 
          <Link to="/Business" className="footer-link">Business</Link> 
          <Link to="/AppPage" className="footer-link">Ritual App</Link> 
        </Box>
        <Box className="footer-links">
          <Typography variant="h6" className="footer-title">
            Resources
          </Typography>
          <Link to="https://ritual.co/blog" className="footer-link">Blog</Link> 
          <Link to="https://ritual.co/restaurants/help-centre" className="footer-link">Help Center</Link> 
          <Link to="https://ritual.co/faq" className="footer-link">FAQs</Link> 
        </Box>
        <Box className="footer-links">
          <Typography variant="h6" className="footer-title">
            For Customers
          </Typography>
          <Link to="https://ritual.co/eatlocal/welcome?_branch_match_id=1365876289150267572&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8wryyxJ1SvKLClNzNFLztf38Pd1DXB0d7WvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQB5Rhq0OwAAAA%3D%3D" className="footer-link">Ritual App</Link> {/* Updated Link */}
          <Link to="https://ritual.co/terms?_branch_match_id=1365876289150267572&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8wryyxJ1SvKLClNzNFLztf38Pd1DXB0d7WvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQB5Rhq0OwAAAA%3D%3D" className="footer-link">Terms Of Service</Link> {/* Updated Link */}
        </Box>
      </Box>

      {/* Middle Section: Download App */}
      <Box className="footer-middle">
        <Typography variant="h6" className="footer-text">
          Get the Ritual App Today!
        </Typography>
        <Box className="download-buttons">
          <Button
            href="https://play.google.com/store/apps/details?id=co.ritual.app&hl=en_CA"
            target="_blank"
            className="footer-download-button"
          >
            <Android /> Google Play
          </Button>
          <Button
            href="https://apps.apple.com/us/app/ritual-order-local-takeout/id938467045"
            target="_blank"
            className="footer-download-button"
          >
            <Apple /> App Store
          </Button>
        </Box>
      </Box>

      {/* Bottom Section: Social Media & Legal */}
      <Box className="footer-bottom">
        <Box className="social-media">
          <Typography className="footer-text">Follow Us:</Typography>
          <a href="https://www.facebook.com/ritual.co/" className="social-icon">
            <Facebook />
          </a>
          <a href="https://twitter.com/ritual_co?lang=en" className="social-icon">
            <Twitter />
          </a>
          <a href="https://www.instagram.com/ritual_co/?hl=en" className="social-icon">
            <Instagram />
          </a>
        </Box>
        <Typography className="footer-legal">
          &copy; {new Date().getFullYear()} Ritual. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
