import styles from './Navbar.module.less';
import logo from './logo.svg'; // Can change logo icon based on desired logo
import { useState } from 'react';
import arrow from './icon-arrow-light.svg';
import hamburger from './icon-menu.svg'; // Hamburger = menu icon.
import Button from '../ButtonDual/Button'

function Navbar({ dropMenu }) {

  /** Selected state variable
   * Allows for one dropdown at a time, and causes other dropdowns to collapse when one is selected.
   */
  const [selected, setSelected] = useState(null);

  function handleSelect(e) {
    if(selected === e.target.id) {
      setSelected(null);
    } else {
    setSelected(e.target.id);
    }
  }

  return (
    <nav className={styles.nav}>
        <article className={styles.left}>
          <img src={logo} alt="logo" />
          <img
              className={styles.menuIcon}
              src={hamburger}
              alt="Open Menu"
              onClick={dropMenu} /** For mobile dropdown */
          />
          <span className={styles.menu}>
              <span className={styles.ftrDrop} style={{ opacity: selected && selected !== 'product' ? 0.75 : 1 }}>
                <p
                  id='product'
                  onClick={e => handleSelect(e)}
                >
                  Product
                </p>
                <img
                  id='product'
                  style={{ transform: selected === 'product' ? 'rotate(180deg)' : 'none' }} // Arrow flips when dropdown is shown
                  src={arrow}
                  onClick={e => handleSelect(e)}
                />
              </span>
              <span className={styles.ftrDrop} style={{ opacity: selected && selected !== 'company' ? 0.75 : 1 }}>
                <p
                  id='company'
                  onClick={e => handleSelect(e)}
                >
                  Company
                </p>
                <img
                  id='company'
                  style={{ transform: selected === 'company' ? 'rotate(180deg)' : 'none' }} // Arrow flips when dropdown is shown
                  src={arrow}
                  onClick={e => handleSelect(e)}
                />
              </span>
              <div className={styles.dropCont}>
                <span className={styles.ftrDrop} style={{ opacity: selected && selected !== 'connect' ? 0.75 : 1 }}>
                  <p
                    id='connect'
                    onClick={e => handleSelect(e)}
                  >
                    Connect
                  </p>
                  <img
                    id='connect'
                    style={{ transform: selected === 'connect' ? 'rotate(180deg)' : 'none' }} // Arrow flips when dropdown is shown
                    src={arrow}
                    onClick={e => handleSelect(e)}
                  />
                </span>
                <div className={`${styles.dropdown} ${selected === 'connect' ? styles.visible : ''}`}>
                  <p>Contact</p>
                  <p>Newsletter</p>
                  <p>LinkedIn</p>
                </div>
              </div>
          </span>
        </article>
        <article className={styles.right}>
          <p>Login</p>
          <Button type={'primary'} text={'Sign Up'} />
        </article>
    </nav>
  );
}

export default Navbar;
