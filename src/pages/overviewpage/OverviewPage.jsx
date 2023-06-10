import { useState } from 'react';
import OverviewAppBar from "../../components/appbar/OverviewAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableRow, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Pagination, 
  TableContainer, 
  Paper, 
  TableHead, 
  TablePagination, 
  TextField
} from '@mui/material';
import { Box, display, margin } from '@mui/system';
import EditButton from "../../components/EditButton"
import DeleteButton from "../../components/DeleteButton"
import { placeTableHeader } from "../../utils/placementutils";

const OverviewPage = () => {
  const [pagination, setPagination] = useState(10); 
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const startIndex = page * pagination;
  const endIndex = startIndex + pagination;
  const recipes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  const currentPageRows = recipes.slice(startIndex, endIndex);


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

  function PaginationSelector() {
    let paginationLabel = 'pagination-label'
    return (
      <FormControl sx={{ width: '280px', margin: '10px' }}>
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
        </Select>
      </FormControl>
    )
  }

  function CreateNewRecipeButton() {
    return (
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleCreateClick} 
        sx={{marginRight: '10px', marginBottom: '10px'}}
      >
        Create new recipe
      </Button>
    )
  }


  const handlePaginationChange = (event) => {
    // setPagination(Number(event.target.value));
    setPagination(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleSearch = () => {

  }

  function SearchButton({onClick}) {
    return (
      <Button 
        variant="contained" 
        onClick={onClick} 
        sx={{display: "inline-block", marginRight: '10px', marginBottom: '10px', marginTop: '10px'}}
      >
        Search
      </Button>
    )
  }


  return (
    <Box  marginTop={2} marginX={20}>
      <OverviewAppBar/>
      <CreateNewRecipeButton/>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        sx={{width: "900px", marginRight: '10px'}}
      />
      <SearchButton onClick={handleSearch}/>
      <TableContainer component={Paper}>
        <Table>
          <OverviewPageHeaderRow/>
          <TableBody>
            {currentPageRows.map((recipe) => (
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
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={recipes.length}
          rowsPerPage={pagination}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handlePaginationChange}
        />
      </TableContainer>
      {/* <Pagination count={Math.ceil(recipes.length/pagination)} showFirstButton showLastButton sx={{margin:'px'}}/> */}
      {/* <PaginationSelector/> */}
      {/* <MyTable/> */}
    </Box>
  );
};

export default OverviewPage;
