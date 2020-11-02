# React-Template

Template for react projects with webpack, react-router, formik utils, redux, redux-saga, redux-chill, localization ( i18next ).
Base structure included, also some base uikit components ( additional components will be added later bit by bit ).

## Structure.

webpack - webpack configurations for different modes
typings - global shared typings
tests - unit tests setup & e2e tests
scripts - update-module-paths -> automagicaly adds paths to tsconfig file for aliasing
config - dir with project configs which depend on STAGE_NAME env - local.json - file which will override fields from env config when run with "serve"

src ->

- api - services & models which related to API
- core - core components ( uikit and other ), utils, common hooks (which mostly not include specific domain logic - same for components)
- localization - localization setup & locales ( global locales, specific components translations placed in component folder )
- modules - app domain modules
  - app module ( recommended name ) - here we boostrap our top level components & routes
  - standart module structure
    - components -> some reusable inside respective module components
    - pages -> module inner routing
    - store -> standart structure store module
      - actions.ts - file with action creators ( prefereable defined with redux-chill )
      - reducer.ts - file with reducer
      - index - rexport file
      - saga.ts - saga file ( preferably redux-chill )
      - state.ts - state definition ( type/class )
      - validation -> file with yup schemas for module local forms
- provider - top level component which contain all required context providers & other things
- public - html, images, fonts and other
- store - store configuration, and store slices which not related to specific component module ( can be shared store modules also )
- styles - global styles or reusable ones
- enviroment.ts - mapping of process.env vars and some global vars
- index.tsx -> entry point for webpack & place where we render root component and init store & other things

## Component

Standart structure is:

- some-component.component.tsx - file with functional component
- some-component.scss - local component styles ( CSS modules )
- some-component.props.ts - component prop types definition or function defined for hoc() decorator if it's kinda to big for .component file - optional ( if no props )
- some-component.lang.json - localization file with structure of `{ [lang : string]: {} }` - optional if single lang
- index.ts - rexport file




## Tests
Info about testing meta will be added later