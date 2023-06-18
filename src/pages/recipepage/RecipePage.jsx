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
import { IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { List, ListItem, ListItemText } from '@mui/material';
import EditButton from '../../components/EditButton'
import ReturnButton from '../../components/ReturnButton';
import { useNavigate } from 'react-router-dom';


const RecipePage = () => {
  const [pagination, setPagination] = useState(10); 
  const [page, setPage] = useState(0);
  const [loadedIngredients, setLoadedIngedients] = useState([
    {id: 1, title: "placeholder1"},
    {id: 2, title: "placeholder2"},
    {id: 3, title: "placeholder3"},
    {id: 4, title: "placeholder4"},
  ]);
  const [recipe, setRecipe] = useState('Placeholder')
  let ingredients = [1,2,3,4]
  const navigate = useNavigate()

  const handleCreateClick = () => {
  };

  const handleMoreClick = (inverterId) => {
  };

  const handleDeleteClick = async (inverterId) => {
  };

  function StepsHeaderRow() {
    return placeTableHeader(
      "Name", "Description", "Ingredients",  "Estimated preparation time", "Estimated cost",  ""
    )
  }


  function IngredientsHeaderRow() {
    return placeTableHeader(
      "Name", "Description", "Type",  "Quantity", "Estimated cost"
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





  const MySortableList = ({ items, setItems }) => {
    
    const onDragEnd = (startIndex, endIndex) => {
      if (startIndex === endIndex) return;

      const reorderedItems = Array.from(items);
      const [removed] = reorderedItems.splice(startIndex, 1);
      reorderedItems.splice(endIndex, 0, removed);

      setItems(reorderedItems);
    };

    const onMoveUp = (currentIndex) => {
      if (currentIndex === 0) return;

      const reorderedItems = Array.from(items);
      const [removed] = reorderedItems.splice(currentIndex, 1);
      reorderedItems.splice(currentIndex - 1, 0, removed);

      setItems(reorderedItems);
    };

    const onMoveDown = (currentIndex) => {
      if (currentIndex === items.length - 1) return;

      const reorderedItems = Array.from(items);
      const [removed] = reorderedItems.splice(currentIndex, 1);
      reorderedItems.splice(currentIndex + 1, 0, removed);

      setItems(reorderedItems);
    };
    
    const handleDragEnd = (result) => {
      const { source, destination } = result;
      if (!destination) return;
      onDragEnd(source.index, destination.index);
    };



return (
  <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId="droppable">
      {(provided) => (
        <List ref={provided.innerRef} {...provided.droppableProps}>
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <ListItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ListItemText primary={item.title} />
                  <IconButton
                    onClick={() => onMoveUp(index)}
                    disabled={index === 0}
                  >
                    <ArrowUpward />
                  </IconButton>
                  <IconButton
                    onClick={() => onMoveDown(index)}
                    disabled={index === items.length - 1}
                  >
                    <ArrowDownward />
                  </IconButton>
                </ListItem>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  </DragDropContext>
);
  };



  


  return (
    <Box  marginTop={2} marginX={20}>
      <OverviewAppBar/>
      <ReturnButton onClick={() => navigate(-1)}/>
      <Typography
        variant='h1' sx={{margin: '10px'}}>
        Recipe Name
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow key={recipe}>
              <TableCell>Description</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>
                <EditButton onClick={() => {}}/>
              </TableCell>
            </TableRow>
            <TableRow key={recipe}>
              <TableCell>Number of steps</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>
                <EditButton onClick={() => {}}/>
              </TableCell>
            </TableRow>
            <TableRow key={recipe}>
              <TableCell>Estimated time of preparation</TableCell>
              <TableCell>{recipe}</TableCell>
              <TableCell>
                <EditButton onClick={() => {}}/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant='h4' sx={{margin: '10px'}}>
        Ingredients
      </Typography>
      <MySortableList items={loadedIngredients} setItems={setLoadedIngedients} />
     <Typography
        variant='h4' sx={{margin: '10px'}}>
        
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <IngredientsHeaderRow/>
          <TableBody>
            {ingredients.map((ingredient) => (
              <TableRow key={ingredient}>
                <TableCell>{ingredient}</TableCell>
                <TableCell>{ingredient}</TableCell>
                <TableCell>{ingredient}</TableCell>
                <TableCell>{ingredient}</TableCell>
                <TableCell>{ingredient}</TableCell>
                <TableCell>
                  <EditButton onClick={() => handleMoreClick(ingredient)}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecipePage;
