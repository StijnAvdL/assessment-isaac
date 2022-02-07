import { useObserver } from 'mobx-react'

import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function User(props) {
  const { user } = props

  return useObserver(() => (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="user">
          <TableBody>
            <TableRow key="name">
              <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                Name
              </TableCell>
              <TableCell component="th" scope="row">
                {`${user.name.first} ${user.name.last}`}
              </TableCell>
            </TableRow>
            <TableRow key="email">
              <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                Email
              </TableCell>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
            </TableRow>
            <TableRow key="email">
              <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                Gender
              </TableCell>
              <TableCell component="th" scope="row">
                {user.gender}
              </TableCell>
            </TableRow>
            <TableRow key="nationality">
              <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                Nationality
              </TableCell>
              <TableCell component="th" scope="row">
                {user.nat}
              </TableCell>
            </TableRow>
            <TableRow key="phone">
              <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                Phone
              </TableCell>
              <TableCell component="th" scope="row">
                {user.phone}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ))
}

export default User
