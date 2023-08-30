import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const Create = () => {
  return (
    <Box>
      <Box>
        <Paper elevation={8} sx={{ width: "300px", ml: 70, mt: 3, p: 5 }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            Crud Operation
          </Typography>
          <TextField label="Name" variant="standard" fullWidth sx={{ mt: 3 }} />
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            sx={{ my: 3 }}
          />
          <TextField label="City" variant="standard" fullWidth />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 5 }}>
            Add Data
          </Button>
        </Paper>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Create;
