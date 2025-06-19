import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Transactions from './pages/Transactions';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import './App.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
