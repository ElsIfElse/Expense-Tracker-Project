import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import MainMenu from './pages/mainMenu.tsx'
import AddExpensePage from './pages/addExpensePage.tsx'
import ViewExpensesPage from './pages/viewExpensesPage.tsx'
import AddIncomePage from './pages/addIncome.tsx'
import SummaryPage from './pages/summaryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/addExpensePage" element={<AddExpensePage/>} />
        <Route path="/viewExpensePage" element={<ViewExpensesPage/>} />
        <Route path="/addIncomePage" element={<AddIncomePage/>} />
        <Route path="/summaryPage" element={<SummaryPage/>} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
