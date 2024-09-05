import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <Box
      className="hero-container"
      minHeight="80vh"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Grid container spacing={8}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column", marginY: "30px" }}
        >
          <Typography
            variant="h3"
            className="hero-title"
            sx={{
              fontFamily: "Karma, serif",
              fontWeight: 700,
              fontSize: "75px",
            }}
          >
            Getting Quality Education is now more Easy
          </Typography>

          <Typography variant="body1" className="hero-subtitle" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet. Ex fugiat voluptatem est distinctio
            quia.
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1DD1A1",
                mr: 2,
                textTransform: "none",
                borderRadius: "21px",
              }}
            >
              Join Debate Room
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                mr: 2,
                textTransform: "none",
                borderRadius: "21px",
              }}
            >
              Know More
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          container
          spacing={2}
          position="relative" // Keep this as the positioning context
          className="hero-images"
        >
          {/* Background Box with zIndex: 1 */}
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              position: "absolute", // Make this absolute within its parent
              top: 10,
              right: 20,
              backgroundColor: "#1DD1A1",
              borderRadius: "100%",
              zIndex: 1,
              width: 200,
              height: 200,
            }}
          />

          {/* Foreground Boxes with zIndex: 2 */}
          <Grid
            item
            xs={6}
            md={6}
            display="flex"
            justifyContent="right"
            sx={{
              position: "relative", // Position relative to ensure it is over the background box
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#2B77A1",
                borderRadius: "100%",
                width: 200,
                height: 200,
                overflow: "hidden",
                backgroundImage: `url(${image1})`,
                backgroundPosition: "0% 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            display="flex"
            justifyContent="left"
            sx={{
              position: "relative", // Ensure this is above the background box
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFAC74",
                borderRadius: "5%",
                width: 200,
                height: 200,
                overflow: "hidden",
                backgroundImage: `url(${image2})`,
                backgroundPosition: "90% 10%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            display="flex"
            justifyContent="right"
            sx={{
              position: "relative", // Ensure this is above the background box
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1DD1A1",
                borderRadius: "5%",
                width: 200,
                height: 200,
                overflow: "hidden",
                backgroundImage: `url(${image3})`,
                backgroundPosition: "0% 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            display="flex"
            justifyContent="left"
            sx={{
              position: "relative", // Ensure this is above the background box
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#E5E4E4",
                borderRadius: "0 50% 50% 0",
                width: 200,
                height: 200,
                overflow: "hidden",
                backgroundImage: `url(${image4})`,
                backgroundPositionX: "center",
                backgroundSize: "150%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;