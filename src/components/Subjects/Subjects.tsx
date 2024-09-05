import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import WatchIcon from "@mui/icons-material/Watch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HeadsetIcon from "@mui/icons-material/Headset";
import GamepadIcon from "@mui/icons-material/Gamepad";

const subjects = [
  { icon: <PhoneIcon sx={{ fontSize: 50 }} />, label: "lorem ipsum" },
  { icon: <ComputerIcon sx={{ fontSize: 50 }} />, label: "lorem ipsum" },
  { icon: <WatchIcon sx={{ fontSize: 50 }} />, label: "lorem ipsum" },
  { icon: <CameraAltIcon sx={{ fontSize: 50 }} />, label: "lorem ipsum" },
  { icon: <HeadsetIcon sx={{ fontSize: 50 }} />, label: "lorem ipsum" },
  { icon: <GamepadIcon sx={{ fontSize: 50 }} />, label: "lorem ipsum" },
];

const Subject = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFAC74", // Light orange background color
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color:"#fff",
          fontFamily: "Karma, serif",
          fontWeight: 700,
          marginBottom: "40px",
        }}
      >
        Subjects
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{paddingX:"100px"}}>
        {subjects.map((subject, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Box
              sx={{
                border: "1px solid white",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {subject.icon}
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                {subject.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Subject;