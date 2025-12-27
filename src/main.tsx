import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { MoreInsights } from './pages'
import { ThemeProvider, LanguageProvider } from './context'
import './styles/variables.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/insights" element={<MoreInsights />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
