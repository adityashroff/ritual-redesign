  import React from 'react';
  import SearchIcon from '@mui/icons-material/Search';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import { Box, InputBase, IconButton } from '@mui/material';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";
  import '../styles/Homepage.css';

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  const Homepage = () => {
    return (
      <>
        <div className="homepage-container">
          {/* Title */}
          <h1 className="homepage-title">
            Order Smart, Save Time, Enjoy More <br />– Ritual Reimagined
          </h1>

          {/* Updated Search Bar */}
          <div className="homepage-search">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '25px',
                padding: '4px 12px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                width: '80%',
                maxWidth: '600px',
              }}
            >
              <IconButton sx={{ color: 'gray' }}>
                <LocationOnIcon />
              </IconButton>
              <InputBase
                placeholder="Search for restaurants or cuisines"
                sx={{
                  flex: 1,
                  marginLeft: '8px',
                  fontSize: '1rem',
                }}
              />
              <IconButton sx={{ color: 'gray' }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </div>

          {/* Center Image */}
          <div className="homepage-center-image">
            <img
              src={require('../assets/images/center.jpg')}
              alt="Central Visual"
              className="center-image"
            />
          </div>

          {/* Corner Images */}
          <div className="corner-images">
            <img
              src={require('../assets/images/lefttopcorner.jpg')}
              alt="Top Left Corner"
              className="corner-image top-left"
            />
            <img
              src={require('../assets/images/leftcorner.jpg')}
              alt="Top Right Corner"
              className="corner-image top-right"
            />
            <img
              src={require('../assets/images/righttopcorner.jpg')}
              alt="Bottom Left Corner"
              className="corner-image bottom-left"
            />
            <img
              src={require('../assets/images/rightcorner.jpg')}
              alt="Bottom Right Corner"
              className="corner-image bottom-right"
            />
          </div>
        </div>

        {/* Redesigned Section - Moved outside homepage-container */}
        <div className="homepage-values">
          <div className="values-section">
            <div className="values-content">
              <h2>Our value to customers</h2>
              <p>
                Ritual brings people together with the best takeout spots near work or home.
                We provide a convenient way to order ahead and skip the line, saving you
                time and money.
              </p>
            </div>
            <div className="values-image">
              <img
                src={require('../assets/images/ourvalues1.jpg')}
                alt="Our value to customers"
                className="rounded-image"
              />
            </div>
          </div>

          <div className="values-section">
            <div className="values-image">
              <img
                src={require('../assets/images/ourvalues2.jpg')}
                alt="Our value to restaurants"
                className="rounded-image"
              />
            </div>
            <div className="values-content">
              <h2>Our value to restaurants</h2>
              <p>
                The food ordering landscape has changed drastically since we began Ritual.
                Ritual offers an affordable way to reach new customers and digitally serve their existing customers.
              </p>
            </div>
          </div>
          
          <div className="values-section">
            <div className="values-content">
              <h2>Building Community</h2>
              <p>
                Ritual supports local communities by helping people discover nearby eateries,
                fostering a sense of connection through food. Together, we create meaningful
                relationships and support small businesses.
              </p>
            </div>
            <div className="values-image">
              <img
                src={require('../assets/images/ourvalues3.jpg')}
                alt="Building Community"
                className="rounded-image"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="values-section">
            <div className="values-image">
              <img
                src={require('../assets/images/ourvalues4.jpg')}
                alt="Sustainability"
                className="rounded-image"
              />
            </div>
            <div className="values-content">
              <h2>Sustainability</h2>
              <p>
                We are committed to sustainability by reducing food waste and encouraging
                eco-friendly practices. Ritual aims to create a greener future for
                everyone.
              </p>
            </div>
          </div>
          <div className="homepage-gallery">
    <h2 className="gallery-title">Discover More</h2>
    <p className="gallery-subtitle">
      Explore the vibrant community of Ritual users and their favorite local spots.
    </p>
    <button className="learn-more-button">Learn More</button>

    {/* Image Carousel */}
    <div className="carousel-container">
      {/* Carousel library (react-slick or any alternative) */}
      <Slider {...carouselSettings}>
        <img
          src={require('../assets/images/carousel1.jpg')}
          alt="Gallery pic 1"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel2.jpg')}
          alt="Gallery pic 2"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel3.jpg')}
          alt="Gallery pic 3"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel4.jpg')}
          alt="Gallery pic 4"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel5.jpg')}
          alt="Gallery pic 5"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel6.jpg')}
          alt="Gallery pic 6"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel7.jpg')}
          alt="Gallery pic 7"
          className="carousel-image"
        />
        <img
          src={require('../assets/images/carousel8.jpg')}
          alt="Gallery pic 8"
          className="carousel-image"
        />

      </Slider>
    </div>
  </div>
        </div>
      </>
    );
  };

  export default Homepage;