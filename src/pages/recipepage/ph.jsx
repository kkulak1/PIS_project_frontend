import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';
import { Grid, Table, TableBody, Typography, TableCell, TableRow, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useContext, useEffect } from 'react';
import FetchDataContext from '../contexts/FetchDataContext';
import { parametrizedRoutes } from '../utils/routesUtil';


const RecipePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const data = useContext(FetchDataContext);

  const dataFields = {
    // subject data
    subjectName: 'name',
    subjectEcts: 'ects',
    subjectDesc: 'description',
    subjectCoordinator: 'supervisor_id',
    // groups
    groups: 'groups',
  };

  let groupGrids = [];
  for (let groupName of data[dataFields.groups]) {
    groupGrids.push(
      <Grid
      item>
        <Link to={parametrizedRoutes.group(data[dataFields.subjectName], groupName)}>
          {groupName}
        </Link>
      </Grid>
    );
  }

  let infoList = (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell
            variant="head">
            <Typography
              variant='h6'>
              ECTS
            </Typography>
          </TableCell>
          <TableCell>
            {data[dataFields.subjectEcts]}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            variant="head">
            <Typography
              variant='h6'>
              Opis
            </Typography>
          </TableCell>
          <TableCell>
            {data[dataFields.subjectDesc]}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            variant="head">
            <Typography
              variant='h6'>
              Koordynator
            </Typography>
          </TableCell>
          <TableCell>
            {data[dataFields.subjectCoordinator]}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            variant="head">
            <Typography
              variant='h6'>
              Grupy
            </Typography>
          </TableCell>
          <TableCell>
            <Grid
              container>
              <Grid
                item
                xs={12}>
                {groupGrids}
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  const handleReturnButton = () => {
    navigate(-1);
  }

  return (
    <UserPageTemplate>
      <Grid
        container>
        <Grid
          container
          sx={{ m: 3 }}>
          <Grid
            item
            xs={10}>
            <Typography
              variant='h5'>
              {data[dataFields.subjectName]}
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}>
            <Button
              fullWidth
              sx={{
                backgroundColor: theme.palette.customColor.USOSGray
              }}
              onClick={handleReturnButton}>
              Powrót
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 3 }}>
            {infoList}
          </Grid>
        </Grid>
      </Grid>
    </UserPageTemplate>
  );
}

export default RecipePage