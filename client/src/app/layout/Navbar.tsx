import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

            {/* LEFT */}
            <Box
              component={NavLink}
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Reactivities
              </Typography>
            </Box>

            {/* CENTER LINKS */}
            <Box sx={{ display: "flex", gap: 2 }}>

              <NavLink to="/activities" style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "1.1rem",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: isActive ? "yellow" : "#ffffff"
                    }}
                  >
                    Activities
                  </Button>
                )}
              </NavLink>

              <NavLink to="/createActivity" style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "1.1rem",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: isActive ? "yellow" : "#ffffff"
                    }}
                  >
                    Create Activity
                  </Button>
                )}
              </NavLink>

            </Box>

            {/* RIGHT */}
            <Button color="inherit">
              User menu
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}