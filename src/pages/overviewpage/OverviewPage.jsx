import { useState } from 'react';
import OverviewAppBar from "../../components/appbar/OverviewAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, TableBody, TableCell, TableRow, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import EditButton from "../../components/EditButton"
import DeleteButton from "../../components/DeleteButton"
import { placeTableHeader } from "../../utils/placementutils";

const OverviewPage = () => {
  const [pagination, setPagination] = useState(10); 

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

  const handlePaginationChange = (event) => {
    setPagination(Number(event.target.value));
  };

  // function PaginationItem({ pagination }) {
  //   let stringNumber = String(pagination);
  //   return (
  //     <MenuItem value={pagination}>{stringNumber}</MenuItem>
  //   )
  // }

  let recipes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  let paginationLabel = 'pagination-label'
  
  return (
    <Box marginTop={2} marginX={20}>
      <OverviewAppBar/>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleCreateClick} 
        sx={{marginRight: '10px'}}
      >
        Create new recipe
      </Button>
      <FormControl sx={{ width: '280px' }}>
        <InputLabel id={paginationLabel}>Number of Displayed Recipes</InputLabel>
        <Select
          labelId={paginationLabel}
          id="pagination"
          value={pagination}
          onChange={handlePaginationChange}
          renderValue={(selected) => (selected ? selected : 'Select')}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          {/* <PaginationItem pagination={20}/> */}
        </Select>
      </FormControl>

      <Table>
        <OverviewPageHeaderRow/>
        <TableBody>
          {recipes.slice(0, pagination).map((recipe) => (
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
