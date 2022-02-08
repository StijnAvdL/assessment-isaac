import PropTypes from 'prop-types'
import AppBar from '/src/components/AppBar'
import Users from '/src/components/Users'
import User from '/src/components/User'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const propTypesView = {
  page: PropTypes.string,
  params: PropTypes.object,
}

function Router(props) {
  const { usersModel } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AppBar title="Users" />
          <Users users={usersModel.users} />
        </Route>
        <Route path="/user/:id">
          <AppBar title="User" back={true} />
          <User usersModel={usersModel} />
        </Route>
        <Route path="*">
          <AppBar title="No Match" back={true} />
          <p>Unknown route</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

Router.propTypes = propTypesView

export default Router
