import { HeaderContiner } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContiner>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContiner>
  )
}
