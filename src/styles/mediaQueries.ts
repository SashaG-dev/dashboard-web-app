interface Queries {
  [key: string]: string;
}

export const mediaQueries: Queries = {
  desktop: '(min-width: 97.5em)', // ~1560px
  laptop: '(min-width: 81.25em)', // ~1300px
  tabLandscape: '(max-width: 69.1em)', // ~1100px
  tabPortrait: '(max-width: 59.2em)', // ~950px
  tabSmall: '(max-width: 47.6em)', // ~760px
  phoneLandscape: '(max-width: 35.75em)', // ~570px
  phonePortrait: '(max-width: 23.75em)', // ~380px
  phoneSmall: '(max-width: 20em)', // ~320px
};
