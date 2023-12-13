import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import InteractiveGrid from './components/InteractiveGrid';
import EnrollmentPage from './components/EnrollmentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/malla" element={<InteractiveGrid />} />
        <Route path="/inscripcion" element={<EnrollmentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
