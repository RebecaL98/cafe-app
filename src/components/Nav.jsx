// Rebeca
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={NavLink} to="/" exact>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/products">
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={NavLink} to="/team">
          <ListItemText primary="Team" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#edcdbb", color: "#000000" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Sweet Bliss Café
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList()}
        </Drawer>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button component={NavLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={NavLink} to="/products" color="inherit">
            Products
          </Button>
          <Button component={NavLink} to="/team" color="inherit">
            Team
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
