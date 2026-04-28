import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Reactivities
              </Typography>
            </Box>

            {/* CENTER LINKS */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography sx={{ fontSize: "1.1rem", textTransform: "uppercase", fontWeight: 600 }}>
                Activities
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", textTransform: "uppercase", fontWeight: 600 }}>
                About
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", textTransform: "uppercase", fontWeight: 600 }}>
                Contact
              </Typography>
            </Box>

            {/* RIGHT */}
            <Button
              onClick={openForm}
              size="large"
              variant="contained"
              color="warning"
            >
              Create Activity
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}