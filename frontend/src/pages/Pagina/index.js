import React from 'react'
import useStyles from './styles'
import Component from '../../components/Component'
import helloWorld from '../../utils/someUtil'
import helloWorld2 from '../../utils/someUtil2'
import api from '../../services/api'
import { BACKEND_URL } from '../../env'

export default function Pagina() {
  const classes = useStyles()
  async function handleClick(e) {
    const updated_at = new Date()
    e.preventDefault()
    try {
      api.put('noticia/1', { updated_at }).then(alert('sucesso'))
    } catch {
      alert('erro')
    }
  }
  return (
    <>
      {/* React Fragment */}
      <Component title="título azul do css da component" />
      <Component title={BACKEND_URL} />
      <h1 className={classes.h1}>título vermelho do css da página</h1>
      <h1 className={classes.h1}>{helloWorld()}</h1>
      <h1 className={classes.h1}>{helloWorld2()}</h1>
      <button onClick={handleClick}>click me</button>
    </>
  )
}
