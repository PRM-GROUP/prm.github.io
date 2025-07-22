import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { BaixoRelevo } from "./pages/Services/ServicesBaixoRelevo";
import { LayoutWithHeader } from './LayoutWithHeader';
import { DTF } from './pages/Services/ServicesDTF';

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/baixorelevo" element={<BaixoRelevo />} />
        <Route path="/services/dtf" element={<DTF />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};