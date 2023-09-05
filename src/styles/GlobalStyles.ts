import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{
  $navOpen?: boolean;
  isMobile?: boolean;
}>`
:root {
  /* Colors */
 /* 
 --primary:
 --primary-dark:
 --background: 

 --success: 
 --error:
 */

 /* Neutrals */
 --white: #fff;
 --light-gray: #bbb;
 --dark-gray: #555;
 --black: #000;

  /* Borders and Radii */ 
  --radius-sm: .8rem;
  --radius-md: 1.6rem;
  --radius-round: 50%;

  /* Transitions */
  --transition-all: all .3s;

  /* Heights/Widths */
  --menu-width: 24rem;
  --menu-width-sm: 6rem;
  --menu-mobile: 0;
}

*, 
*::before, 
*::after {
  margin: 0;
  padding: 0;
  font-family: inherit;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  color: var(--white);
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  background-color: #222;
  min-height: 100vh;
  overflow-x: hidden;
}

h1 {
  font-weight: 500;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  font-size: inherit;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
}

main {
  margin-left: var(${(props) => {
    if (props.isMobile) return '--menu-mobile';
    return props.$navOpen ? '--menu-width' : '--menu-width-sm';
  }});
  padding: 1.6rem;
}
`;

export default GlobalStyles;
