import { useObserver } from 'mobx-react'

import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function Users(props) {
  const { users = [], go } = props

  return useObserver(() => (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.login.md5} onClick={() => go(`/user?id=${user.login.md5}`)}>
                <TableCell component="th" scope="row">
                  {`${user.name.first} ${user.name.last}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ))
}

export default Users
