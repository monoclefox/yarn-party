import { createLazyFileRoute } from '@tanstack/react-router'
import Pattern from '../views/Pattern'

export const Route = createLazyFileRoute('/pattern')({
  component: Pattern,
})
