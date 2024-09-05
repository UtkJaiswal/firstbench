import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "Clash Point", "Feature", "Evaluation", "Mock Tests"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [activePage, setActivePage] = React.useState<null | string>(null);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false); // State to check if the user is logged in

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (page: string) => {
    setActivePage(page);
  };

  const handleLogin = () => {
    // setLoggedIn(true); // Simulate login
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", padding: "20px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Firstbench logo for large screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              letterSpacing: "normal",
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
            }}
          >
            Firstbench
          </Typography>

          {/* Firstbench logo for small screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              letterSpacing: "normal",
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
              fontSize: "1.25rem",
            }}
          >
            Firstbench
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 2,
                  mx: 1.5,
                  color: "white",
                  display: "block",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: activePage === page ? 700 : 400,
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1DD1A1",
              mr: 2,
              textTransform: "none",
              borderRadius: "21px",
            }}
          >
            Contact Us
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            {loggedIn ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                variant="outlined"
                component="a"
                href="/login"
                onClick={handleLogin} // Simulate login action
                sx={{
                  color: "#fff",
                  mr: 2,
                  textTransform: "none",
                  borderRadius: "21px",
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;