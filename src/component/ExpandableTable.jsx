// src/components/ExpandableTable.jsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Row */}
      <TableRow hover onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton size="small">
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.age}</TableCell>
        <TableCell>{row.city}</TableCell>
      </TableRow>

      {/* Expandable Row */}
      <TableRow>
        <TableCell colSpan={4} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="body2" gutterBottom>
                Extra Details:
              </Typography>
              <Typography variant="caption">
                Hobbies: {row.hobbies.join(", ")}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function ExpandableTable() {
  const rows = [
    { name: "Alice", age: 25, city: "New York", hobbies: ["Reading", "Chess"] },
    { name: "Bob", age: 30, city: "London", hobbies: ["Cooking", "Cycling"] },
    { name: "Charlie", age: 28, city: "Paris", hobbies: ["Gaming", "Travel"] },
  ];

  return (
  
    
    <Box sx={{
        display : 'flex',
        flexDirection : 'row '
    }}>
        <Box>shivam</Box>
        <Box>shivam</Box>
    </Box>
  );
}
