import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{
  $navOpen?: boolean;
  isMobile?: boolean;
}>`
:root {
  /* Colors */
  
  --accent: #8d72e1;

  --primary: #151515;
  --secondary: #212121;
  --tertiary: #fff;
  --tertiary-opacity: rgba(255, 255, 255, .1);
 
/* --success:  */
 --error: #e74646;

/* 
  --primary: #fff;
  --secondary: #eee;
  --tertiary: #000;
  --tertiary-opacity: rgba(0, 0, 0, .1);
*/

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
  /* transition: background-color .3s; */
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  background-color: var(--primary);
}

body {
  color: var(--tertiary);
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  background-color: var(--primary);
  min-height: 100vh;
  overflow-x: hidden;
}

h1, h2, h3 {
  font-weight: 400;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  transition: var(--transition-all);
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
  transition: all .3s;
}

main {
  margin-left: var(${(props) => {
    if (props.isMobile) return '--menu-mobile';
    return props.$navOpen ? '--menu-width' : '--menu-width-sm';
  }});
  padding: .8rem 2.4rem;
  transition: margin-left .3s;
}
`;

export default GlobalStyles;
