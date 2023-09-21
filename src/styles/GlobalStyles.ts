import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from './mediaQueries';

const GlobalStyles = createGlobalStyle<{
  $navOpen?: boolean;
}>`
:root {
  /* Colors */
  
  --accent: #8d72e1;
  --primary: #151515;
  --primary-opacity: rgba(21, 21, 21, .95);
  --secondary: #212121;
  --tertiary: #fff;
  --tertiary-light: #aaa;
  --tertiary-opacity: rgba(255, 255, 255, .1);
 
/* --success:  */
 --error: #e74646;

/* 
  --primary: #fff;
  --primary-opacity: rgba(255, 255, 255, .95);
  --secondary: #eee;
  --tertiary: #000;
  --tertiary-light: #555;
  --tertiary-opacity: rgba(0, 0, 0, .1); */


  /* Borders and Radii */ 
  --radius-sm: .8rem;
  --radius-md: 1.6rem;
  --radius-round: 50%;

  /* Transitions */
  --transition-all: all .3s;

  /* Heights/Widths */
  --menu-width: 24rem;
  --menu-width-sm: 6rem;
  --menu-height-mobile: 8rem;
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
  overflow-x: hidden;
}

#root {
  position: relative;
  min-height: 100vh;
  max-width: 150rem;
  margin: 0 auto;
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
    return props.$navOpen ? '--menu-width' : '--menu-width-sm';
  }});
  padding: .8rem 2.4rem;
  transition: margin-left .3s;
  position: relative;

  @media ${mediaQueries.tabPortrait} {
    margin-left: 0;
    padding-bottom: calc(var(--menu-height-mobile) + 2rem);
  }
  @media ${mediaQueries.phonePortrait} {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
}

.toast {
  color: var(--tertiary);
  background-color: var(--secondary);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--tertiary-opacity);
  backdrop-filter: blur(2px);
  z-index: 2;
}

.text-light {
  color: var(--tertiary-light);
}

.text-red {
  color: var(--error);
}

.text-center {
  text-align: center;
}
`;

export default GlobalStyles;
