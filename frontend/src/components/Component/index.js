import React from 'react'
import useStyles from './styles'

export default function Component({ title }) {
  const classes = useStyles()
  return <h1 className={classes.h1}>{title}</h1>
}
