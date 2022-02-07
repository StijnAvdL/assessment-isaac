import PropTypes from 'prop-types'
import { useObserver } from 'mobx-react'
import AppBar from '/src/components/AppBar'
import Users from '/src/components/Users'
import User from '/src/components/User'

const propTypesView = {
  page: PropTypes.string,
  go: PropTypes.func,
  params: PropTypes.object,
}

function Router(props) {
  const { page, params, go, usersModel } = props
  var content = null
  var appBar = <AppBar />

  switch (page) {
    case '/':
      appBar = <AppBar title="Users" />
      content = <Users users={usersModel.users} go={go} />
      break
    case '/user':
      usersModel.getUser(params.id)
      const user = usersModel.user
      appBar = <AppBar title={`${user.name.first} ${user.name.last}`} action={() => go('/')} />
      content = <User user={user} />
      break
    case '/error':
      content = <p>Error</p>
      break
  }

  return useObserver(() => (
    <div>
      {appBar}
      {content}
    </div>
  ))
}

Router.propTypes = propTypesView

export default Router
