import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CounterApp} from './01-useState/CounterApp'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHooks />
  </StrictMode>,
)
