import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const debates = [
  {
    date: "Number of Questions: 20",
    time: "1.5 hours",
    title: "Subjects:",
    description: "Geography, History",
  },
  {
    date: "Number of Questions: 40",
    time: "2 hours",
    title: "Subjects:",
    description: "Economics, General Science, History",
  },
  {
    date: "Number of Questions: 50",
    time: "2.5 hours",
    title: "Subjects:",
    description: "Sociology, Anthropology, Philosophy",
  },
  {
    date: "Number of Questions: 25",
    time: "1.5 hours",
    title: "Subjects:",
    description: "Political System, Agriculture",
  },
];

const MockTest = () => {
  const [activeSection, setActiveSection] = useState("On going");

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "50px 20px" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Karma, serif",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Mock Tests
      </Typography>
      <Box
        sx={{
          backgroundColor: "#FFFEED",
          borderRadius: "40px",
          width: "836px",
          marginX: "auto",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => handleButtonClick("On going")}
          sx={{
            flex: 1,
            backgroundColor:
              activeSection === "On going" ? "#FFAC74" : "#FFFEED",
            color: activeSection === "On going" ? "#000" : "gray",
            borderRadius: "20px",
            textTransform: "none",
            fontFamily: "Karma, serif",
            fontWeight: 700,
            "&:hover": {
              backgroundColor:
                activeSection === "On going" ? "#FFAC74" : "#f5f5f5",
            },
          }}
        >
          Active Mock Tests
        </Button>
        {/* <Button
          onClick={() => handleButtonClick("Upcoming")}
          sx={{
            flex: 1,
            backgroundColor:
              activeSection === "Upcoming" ? "#FFAC74" : "#FFFEED",
            color: activeSection === "Upcoming" ? "#000" : "gray",
            borderRadius: "20px",
            textTransform: "none",
            fontFamily: "Karma, serif",
            fontWeight: 700,
            "&:hover": {
              backgroundColor:
                activeSection === "Upcoming" ? "#FFAC74" : "#f5f5f5",
            },
          }}
        >
          Upcoming
        </Button> */}
      </Box>

      <Grid container spacing={4} sx={{ marginTop: "20px", paddingX: "64px" }}>
        {debates.map((debate, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
            sx={{
              display: activeSection === "On going" ? "block" : "none",
            }}
          >
            <Card
              sx={{
                backgroundColor: "#E2DFD2",
                borderRadius: "40px",
                width: "614px",
                height: "280px",
              }}
            >
              <CardContent sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    sx={{
                      padding: "5px 10px",
                      borderRadius: "15px",
                      border: "1px solid #000",
                      backgroundColor: "#FFF",
                      fontFamily: "Karma, serif",
                    }}
                  >
                    {debate.date}
                  </Box>
                  <Box
                    sx={{
                      padding: "5px 10px",
                      borderRadius: "15px",
                      border: "1px solid #000",
                      backgroundColor: "#FFF",
                      fontFamily: "Karma, serif",
                    }}
                  >
                    {debate.time}
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "Karma, serif", fontWeight: 700 }}
                >
                  {debate.title}
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>
                  {debate.description}
                </Typography>
                <Box sx={{position: "relative"}}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      fontFamily: "Karma, serif",
                      fontWeight: 700,
                      textTransform: "none",
                      width: "100%",
                      alignSelf: "center",
                      // marginX: "20px",
                      marginTop: "80px",
                      
                    }}
                  >
                    Start Test
                  </Button>
                  {/* <IconButton
                    sx={{
                      position: "absolute",
                      right: "0px",
                      bottom: "0px",
                      backgroundColor: "#000",
                      color: "#FFF",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    <AddIcon />
                  </IconButton> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* You can add another set of Grid items here for the "Upcoming" section */}
      </Grid>

      <Button
        variant="contained"
        sx={{
          marginTop: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "20px",
          padding: "10px 20px",
          fontFamily: "Karma, serif",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        
      </Button>
    </Box>
  );
};

export default MockTest;