import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import useStyles from './styles';
import { deletePerson } from "../../../actions/persons";

const PersonList = ({ setCurrentId }) => {
    const persons = useSelector((state) => state.persons);
    const classes = useStyles();

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(person) setPersonData(person);
    // }, [person]);

    console.log('persons: ', persons);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <colgroup>
              <col style={{width:'20%'}}/>
              <col style={{width:'80%'}}/>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Actions</TableCell>
              <TableCell className={classes.header} align="center">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                    {/* <Button className={classes.btn} variant="contained" color="primary" size="small"></Button> */}
                    {item.id !== 1 ? (<Tooltip title="Edit"><Edit className={classes.btn} onClick={() => setCurrentId(item.id)} /></Tooltip>) : null }
                    {item.id !== 1 ? (<Tooltip title="Delete"><Delete className={classes.btn} onClick={() => dispatch(deletePerson(item.id))}/></Tooltip>) : null }
                    {/* <Button className={classes.btn} variant="contained" color="secondary" 
                        size="small" onClick={() => dispatch(deletePerson(item.id))}></Button> */}
                </TableCell>
                <TableCell align="center" component="th" scope="item">
                  {item.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default PersonList;