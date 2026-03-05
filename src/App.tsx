import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThankYou } from './pages/ThankYou';
import { AffiliateSignup } from './pages/AffiliateSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AffiliateSignup />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
