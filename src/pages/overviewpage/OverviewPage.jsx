import React from "react";
import OverviewAppBar from "../../components/appbar/OverviewAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import EditButton from "../../components/EditButton"
import DeleteButton from "../../components/DeleteButton"
import { placeTableHeader } from "../../utils/placementutils";

const OverviewPage = () => {
  const handleCreateClick = () => {
  };

  const handleEditClick = (inverterId) => {
  };

  const handleDeleteClick = async (inverterId) => {
  };

  function OverviewPageHeaderRow() {
    return placeTableHeader(
      "Name", "Description", "Ingredients",  "Estimated preparation time", "Estimated cost",  "Action"
    )
  }

  let recipes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <Box marginTop={2} marginX={20}>
      <OverviewAppBar/>
      <Button variant="contained" color="primary" onClick={handleCreateClick}>
        Create new recipe
      </Button>
      <Table>
        <OverviewPageHeaderRow/>
        <TableBody>
          {recipes.map((recipe) => (
            <TableRow key={recipe}>
              <TableCell>{recipe}</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>
                <EditButton onClick={() => handleEditClick(recipe)} />
                <DeleteButton onClick={() => handleDeleteClick(recipe)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OverviewPage;