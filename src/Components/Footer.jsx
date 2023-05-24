import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>Dogs &copy; Todos os direitos reservados.</p>
    </div>)
};

export default Footer;
