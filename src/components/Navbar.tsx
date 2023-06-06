import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Navbar  = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#096192", alignItems: "center" }}
      >
        <Toolbar disableGutters>
          <AutoStoriesIcon sx={{ width: 50, height: 40, padding: "12px" }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
