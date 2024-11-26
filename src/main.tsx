/** @jsxImportSource @emotion/react */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Global, css } from '@emotion/react'
import { Provider } from 'react-redux';
import store from './store';

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Global styles, vars, and reset
const globalCSS = css`
  :root {
  --background-color: #211F1F;
  --background-black: #171717;
  --text-color: #EEE9D2;
  --button-background-color: #313131;
  --secondary-text-color: #666;
  --border-color: #cccccc;
  --hover-border-color: #666;
  --highlight-color: #776937;
  --highlight-color-2: #F2F290;
  --nav-scroller-color: #cccccc;
  --shadow-color: rgba(0, 0, 0, 0.1);
  }

  /* General Reset */
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: "Atkinson Hyperlegible", sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }
`

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Global styles={globalCSS} />
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </StrictMode>,
  )
}