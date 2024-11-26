/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PatternLazyImport = createFileRoute('/pattern')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PatternLazyRoute = PatternLazyImport.update({
  id: '/pattern',
  path: '/pattern',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/pattern.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/pattern': {
      id: '/pattern'
      path: '/pattern'
      fullPath: '/pattern'
      preLoaderRoute: typeof PatternLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/pattern': typeof PatternLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/pattern': typeof PatternLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/pattern': typeof PatternLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/pattern'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/pattern'
  id: '__root__' | '/' | '/pattern'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  PatternLazyRoute: typeof PatternLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  PatternLazyRoute: PatternLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/pattern"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/pattern": {
      "filePath": "pattern.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
