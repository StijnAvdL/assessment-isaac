import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/ArrowBack'

function AppBarComponent(props) {
  const { title = 'Assessment ISAAC', action } = props

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {!action ? null : (
            <IconButton edge="start" color="inherit" aria-label="back" onClick={action}>
              <BackIcon />
            </IconButton>
          )}
          <Typography variant="h1" noWrap style={{ fontSize: 20 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarComponent
