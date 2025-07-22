import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { BaixoRelevo } from "./pages/Services/ServicesBaixoRelevo";
import { LayoutWithHeader } from './LayoutWithHeader';

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/baixorelevo" element={<BaixoRelevo />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};