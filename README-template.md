# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [https://reliable-malasada-c26750.netlify.app/](https://reliable-malasada-c26750.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```jsx
  /** State management */
    const [selected, setSelected] = useState(null);

    function handleSelect(e) {
      if(selected === e.target.id) {
        setSelected(null);
      } else {
      setSelected(e.target.id);
      }
    }
  
  /** Dropdown */
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
```
* - Used a 'selected' variable which targets the ID of the menu item, and ensures that changes happen to the selected ID. 
* - If the menu item is selected, it uses the same ternary operators to evaluate the other menu items and they take the 'else' condition, whilst the selected menu item takes the 'then' (first) condition.

## Author

- Frontend Mentor - [@lemz100](https://www.frontendmentor.io/profile/lemz100)