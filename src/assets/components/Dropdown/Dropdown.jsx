import close from './icon-close.svg';
import styles from './Dropdown.module.less';
import arrow from './icon-arrow-dark.svg';
import { useState } from 'react';
import Button from '../ButtonDual/Button';

// Hamburger is usually on the main screen, so only close icon is needed
/** Dropdown component - dropped is state variable and handleDropdown is its toggle function */

function Dropdown({ dropped, handleDropdown }) {
  const [selected, setSelected] = useState(null);

  function handleSelect(e) {
    if(selected === e.target.id) {
      setSelected(null);
    } else {
    setSelected(e.target.id);
    }
  }


  return (
    <div className={`${styles.dropdown} ${dropped ? styles.visible : ""}`}>
        <div className={styles.contents}>
            <article className={styles.menu}>
              <span className={styles.ftrDrop}>
                <p
                  id='product'
                  onClick={e => handleSelect(e)}
                  style={{ opacity: selected && selected === 'product' ? 0.75 : 1 }}
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
              <span className={styles.ftrDrop}>
                <p
                  id='company'
                  onClick={e => handleSelect(e)}
                  style={{ opacity: selected && selected === 'company' ? 0.75 : 1 }}
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
                <span className={styles.ftrDrop}>
                  <p
                    id='connect'
                    style={{ opacity: selected && selected === 'connect' ? 0.75 : 1 }}
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
                <div className={`${styles.itemDropdown} ${selected === 'connect' ? styles.visible : ''}`}>
                  <span>
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                  </span>
                </div>
              </div>
            </article>
            <div className={styles.line}></div>
            <article className={styles.authSection}>
              <p>Login</p>
              <button>Sign Up</button>
            </article>
        </div>
    </div>
  );
}

export default Dropdown