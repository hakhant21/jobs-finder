import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
import About from './components/Pages/About';
import JobList from './components/Jobs/JobList';
import Contact from './components/Pages/Contact';
import './index.css';



const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='about' element={<About />} />
          <Route path='jobs' element={<JobList />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);
