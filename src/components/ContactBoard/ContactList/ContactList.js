import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { ListTypesGetDescription } from '../../../constants/listsType';
import { Edit, Delete } from '@material-ui/icons';

import useStyles from './styles';
import { deleteContact } from '../../../actions/contacts';

const ContactList = ({ currentList, setCurrentId }) => {
    const contacts = useSelector((state) => state.contacts);
    const classes = useStyles();

    const dispatch = useDispatch();

    console.log('currentList: ', currentList);

    let listDescription = currentList ? ListTypesGetDescription(currentList) : "Phone";

    console.log('contacts: ', contacts);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <colgroup>
            <col style={{width:'20%'}}/>
            <col style={{width:'40%'}}/>
            <col style={{width:'40%'}}/>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Actions</TableCell>
              <TableCell align="center" className={classes.header}>Name</TableCell>
              <TableCell align="center" className={classes.header}>{listDescription}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Tooltip title="Edit"><Edit className={classes.btn} onClick={() => setCurrentId(item.id)} /></Tooltip>
                  <Tooltip title="Delete"><Delete className={classes.btn} onClick={() => dispatch(deleteContact(item.id))}/></Tooltip>          
                </TableCell>
                <TableCell align="center" component="th" scope="item">
                  {item.name}
                </TableCell>
                <TableCell align="center">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default ContactList;