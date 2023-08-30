import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({ name: "", email: "", city: "" });
  };

  return (
    <Box>
      <Box component="form" onSubmit={addSubmit}>
        <Paper
          elevation={10}
          sx={{
            width: "300px",
            padding: 4,
            mx: "40%",
            mt: "3%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "26px",
              fontWeight: 900,
              mb: 2,
            }}
          >
            Crud Operation
          </Typography>
          <TextField
            label="Name"
            variant="standard"
            name="name"
            value={formData.name}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="standard"
            fullWidth
            sx={{ my: 4 }}
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="City"
            name="city"
            variant="standard"
            fullWidth
            value={formData.city}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>
            Add Data
          </Button>
        </Paper>
      </Box>
      {data.map((item, i) => (
        <Box key={i}>
          {item.name}
          {item.email}
          {item.city}
          <br></br>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
