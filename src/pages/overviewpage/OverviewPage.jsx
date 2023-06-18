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
  TextField,
  Typography,
  Slider,
  Grid
} from '@mui/material';
import { Box, display, margin } from '@mui/system';
import MoreButton from "../../components/MoreButton"
import { placeTableHeader } from "../../utils/placementutils";
import { useRecipeData } from './operations';
import useToken from "../../hooks/useToken";


const OverviewPage = () => {
  const [pagination, setPagination] = useState(10); 
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(500);
  const [maxPreparationTime, setMaxPreparationTime] = useState(30);
  const [token, setToken] = useToken()
  const startIndex = page * pagination;
  const endIndex = startIndex + pagination;
  const recipes = [1]
  const currentPageRows = recipes.slice(startIndex, endIndex);


  const handleCreateClick = () => {
  };

  const handleMoreClick = (inverterId) => {
  };

  const handleDeleteClick = async (inverterId) => {
  };

  function OverviewPageHeaderRow() {
    return placeTableHeader(
      "Name", "Description", "Ingredients",  "Estimated preparation time", "Estimated cost",  ""
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

  function SearchBar() {
    return (
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        sx={{width: "900px", marginRight: '10px'}}
      />
    )
  }

  const MaxToZeroSlider = ({ maxSliderValue, maxPrice, onMaxPriceChange, label, id }) => {
    const handleChange = (event, value) => {
      onMaxPriceChange(value);
    };

    return (
      <div>
        <Typography id={id} gutterBottom sx={{marginTop: '10px'}}>
          {label}
        </Typography>
        <Slider
          value={maxPrice}
          onChange={handleChange}
          min={0}
          max={maxSliderValue}
          step={5}
          aria-labelledby={id}
          sx={ { width: "400px", marginRight: '10px', } }
        />
      </div>
    );
  };

  function MaxPriceSlider() {
    return (
      <MaxToZeroSlider 
        id={"max-price-slider"} 
        maxPrice={maxPrice} 
        onMaxPriceChange={setMaxPrice} 
        label={`Max price: ${maxPrice} zł`}
        maxSliderValue={1000}
      />
    )
  }
  
  function MaxPreparationTimeSlider() {
    return (
      <MaxToZeroSlider 
        id={"max-preparation-time-slider"} 
        maxPrice={maxPreparationTime} 
        onMaxPriceChange={setMaxPreparationTime} 
        label={`Max preparation time: ${maxPreparationTime} minutes`}
        maxSliderValue={120}
      />
    )
  }

  return (
    <Box  marginTop={2} marginX={20}>
      <OverviewAppBar/>
      <CreateNewRecipeButton/>
      <SearchBar/>
      <SearchButton onClick={handleSearch}/>
      <MaxPriceSlider/>
      <MaxPreparationTimeSlider/>
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
                  <MoreButton onClick={() => handleMoreClick(recipe)}/>
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
    </Box>
  );
};

export default OverviewPage;
