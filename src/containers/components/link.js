import React, { useMemo, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

function ListItemLink(props) {
  const { icon, primary, to } = props

  const CustomLink = useMemo(() =>
    forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />)
  )

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

export default ListItemLink
