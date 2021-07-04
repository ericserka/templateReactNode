import React from 'react'
import useStyles from './styles'
import Component from '../../components/Component'
import helloWorld from '../../utils/someUtil'

export default function Pagina() {
  const classes = useStyles()
  return (
    <>
      {' '}
      {/* React Fragment */}
      <Component title="título azul do css da component" />
      <h1 className={classes.h1}>título vermelho do css da página</h1>
      <h1 className={classes.h1}>{helloWorld()}</h1>
    </>
  )
}
