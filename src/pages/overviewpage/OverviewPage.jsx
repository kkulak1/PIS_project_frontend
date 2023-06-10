import React from "react";
import OverviewAppBar from "../components/appbar/OverviewAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import EditButton from "../components/EditButton"
import DeleteButton from "../components/DeleteButton"
import { placeTableHeader } from "../utils/placementutils";

const InvertersPage = () => {
  const handleCreateClick = () => {
  };

  const handleEditClick = (inverterId) => {
  };

  const handleDeleteClick = async (inverterId) => {
  };

  function OverviewPageHeaderRow() {
    return placeTableHeader(
      "Id", "Code", "Model", "Producer", "User", "Action"
    )
  }

  let inverters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <Box marginTop={2} marginX={20}>
      <OverviewAppBar/>
      <Button variant="contained" color="primary" onClick={handleCreateClick}>
        Create new inverter
      </Button>
      <Table>
        <TableHead>
          
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>User</TableCell>
            <TableCell>IP Address</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inverters.map((inverter) => (
            <TableRow key={inverter}>
              <TableCell>{inverter}</TableCell>
              <TableCell>{inverter}</TableCell>
              <TableCell>{inverter}</TableCell>
              <TableCell>{inverter}</TableCell>
              <TableCell>{inverter}</TableCell>
              <TableCell>{inverter}</TableCell>
              <TableCell>
                <EditButton onClick={() => handleEditClick(inverter)} />
                <DeleteButton onClick={() => handleDeleteClick(inverter)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default InvertersPage;