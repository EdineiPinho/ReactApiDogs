import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
    Navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end><MinhasFotos />{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to='/conta/estatisticas'><Estatisticas />{mobile && 'Estatisticas'}</NavLink>
      <NavLink to='/conta/postar'><AddFoto />{mobile && 'Adicionar Foto'}</NavLink>
      <button onClick={handleLogout}><Sair />{mobile && 'Sair'}</button>
    </nav>
  )
}

export default UserHeaderNav