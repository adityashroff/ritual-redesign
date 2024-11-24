import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material"; 
import { Android, Apple } from "@mui/icons-material"; 
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
          <a href="#about" className="footer-link">About Us</a>
          <a href="#careers" className="footer-link">Careers</a>
          <a href="#press" className="footer-link">Press</a>
        </Box>
        <Box className="footer-links">
          <Typography variant="h6" className="footer-title">
            Resources
          </Typography>
          <a href="#blog" className="footer-link">Blog</a>
          <a href="#support" className="footer-link">Support</a>
          <a href="#faq" className="footer-link">FAQs</a>
        </Box>
        <Box className="footer-links">
          <Typography variant="h6" className="footer-title">
            Contact
          </Typography>
          <a href="#contact" className="footer-link">Contact Us</a>
          <a href="#locations" className="footer-link">Locations</a>
        </Box>
      </Box>

      {/* Middle Section: Download App */}
      <Box className="footer-middle">
        <Typography variant="h6" className="footer-text">
          Get the Ritual App
        </Typography>
        <Box className="download-buttons">
          <Button
            href="https://play.google.com/store/apps/details?id=com.ritual"
            target="_blank"
            className="footer-download-button"
          >
            <Android /> Google Play
          </Button>
          <Button
            href="https://apps.apple.com/us/app/ritual/id1352281604"
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
          <a href="#facebook" className="social-icon">
            <Facebook />
          </a>
          <a href="#twitter" className="social-icon">
            <Twitter />
          </a>
          <a href="#instagram" className="social-icon">
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
