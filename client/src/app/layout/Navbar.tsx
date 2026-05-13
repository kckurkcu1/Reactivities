import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, Button, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";
import { Observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)', position: 'relative' }}>
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

              <NavLink to="/counter" style={{ textDecoration: "none" }}>
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
                    Counter
                  </Button>
                )}
              </NavLink>

              <NavLink to="/errors" style={{ textDecoration: "none" }}>
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
                    Errors
                  </Button>
                )}
              </NavLink>

            </Box>

            {/* RIGHT */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              {currentUser ? (
                <UserMenu />
              ) : (
                <>
                  <NavLink to="/login" style={{ textDecoration: "none" }}>
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
                        Login
                      </Button>
                    )}
                  </NavLink>

                  <NavLink to="/register" style={{ textDecoration: "none" }}>
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
                        Register
                      </Button>
                    )}
                  </NavLink>
                </>
              )}
            </Box>

          </Toolbar>
          <Observer>
            {() =>
              uiStore.isLoading ? (
                <LinearProgress
                  color="secondary"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 4, // Adjust height if needed
                  }}
                />
              ) : null
            }
          </Observer>
        </Container>
      </AppBar>
    </Box>
  );
}