import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Create = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    city: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const setChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handle = (e) => {
    e.preventDefault();
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        city: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        city: "",
      });
    }
  };
  const checkDelete = (index) => {
    setTableData(tableData.filter((items, i) => i !== index));
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({
      name: tempData.name,
      email: tempData.email,
      city: tempData.city,
    });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <Container>
      <Box>
        <Box component="form" onSubmit={handle}>
          <Paper elevation={8} sx={{ width: "300px", ml: 50, mt: 3, p: 5 }}>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 900,
                textAlign: "center",
              }}
            >
              Crud Operation
            </Typography>
            <TextField
              name="name"
              value={inputs.name}
              onChange={setChange}
              label="Name"
              variant="standard"
              fullWidth
              sx={{ mt: 3 }}
            />
            <TextField
              name="email"
              value={inputs.email}
              onChange={setChange}
              label="Email"
              variant="standard"
              fullWidth
              sx={{ my: 3 }}
            />
            <TextField
              name="city"
              value={inputs.city}
              onChange={setChange}
              label="City"
              variant="standard"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 5, textTransform: "capitalize" }}
            >
              {editClick ? "update" : "Add Data"}
            </Button>
          </Paper>
        </Box>
        <Box>
          <Table sx={{ mt: 5 }}>
            <TableHead>
              <TableRow sx={{ background: "yellow", Align: "center" }}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    City
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((items, i) => (
                <TableRow key={i}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {items.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {items.email}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {items.city}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Button
                        onClick={() => handleEdit(i)}
                        variant="contained"
                        sx={{
                          background: "blue",
                          color: "white",
                          px: 2,
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => checkDelete(i)}
                        sx={{
                          background: "Red",
                          color: "white",
                          ml: 3,
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
};

export default Create;
