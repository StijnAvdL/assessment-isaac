import React from 'react'
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

function Users(props) {
  let { users = [] } = props
  const [config, setConfig] = React.useState({direction: 'ascending', key: 'name', key2: 'first', filter: 'all'})

  // sort the user list
  const requestSort = (key, key2) => {
    let direction = config.direction === 'ascending' ? 'descending': 'ascending'
    setConfig({ key, key2, direction, filter: config.filter })
  }

  // filter the user list
  const requestFilter = (input, value) => {
    setConfig({ ...config, filter: value })
  }

  // generate new user list
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...users]
    if (config !== null) {
      sortableItems.sort((a, b) => {
        if (a[config.key][config.key2] < b[config.key][config.key2]) {
          return config.direction === 'ascending' ? -1 : 1
        }
        if (a[config.key][config.key2] > b[config.key][config.key2]) {
          return config.direction === 'ascending' ? 1 : -1
        }
        return 0;
      })
      if(config.filter !== 'all') {
        sortableItems = sortableItems.filter(user => user.gender === config.filter)
      } 
      console.log("sortableItems", sortableItems)
      return sortableItems
    }
  }, [users, config])

  return (
    <div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={config.filter} onChange={requestFilter} row >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <TableContainer component={Paper}>
        <Table aria-label="users">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={() => requestSort('name', 'first')}>Name</Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => requestSort('location', 'city')}>City</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedItems.map((user) => (
              <TableRow key={user.login.md5}>
                <TableCell component="th" scope="row">
                  <Link to={`/user/${user.login.md5}`}>{`${user.name.first} ${user.name.last}`}</Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.location.city}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users
