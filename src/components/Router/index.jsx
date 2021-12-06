import PropTypes from 'prop-types'
import { useObserver } from 'mobx-react'

const propTypesView = {
  page: PropTypes.string,
  go: PropTypes.func,
  params: PropTypes.object,
}

function Router(props) {
  const { page, go } = props
  var content = null

  console.log('now here!', page)
  switch (page) {
    case '/':
      console.log('this case!')
      content = <div>Home</div>
      break
    case '/error':
      content = <p>Error</p>
      break
  }

  return useObserver(() => <div>{content}</div>)
}

Router.propTypes = propTypesView

export default Router
