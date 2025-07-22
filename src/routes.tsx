import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { BaixoRelevo } from "./pages/Services/ServicesBaixoRelevo";
import { LayoutWithHeader } from './LayoutWithHeader';
import { DTF } from './pages/Services/ServicesDTF';
import { Laser } from './pages/Services/ServicesLaser';
import { Transfer } from './pages/Services/ServicesTransfer';
import { Manuseio } from './pages/Services/ServicesManuseio';
import { Digital } from './pages/Services/ServicesDigital';
import { Digital360 } from './pages/Services/ServicesDigital360';
import { Silk } from './pages/Services/ServicesSilk';
import { Sublimacao } from './pages/Services/ServicesSublimacao';

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/gravacao-em-baixo-relevo" element={<BaixoRelevo />} />
        <Route path="/services/dtf" element={<DTF />} />
        <Route path='/services/gravacao-a-laser' element={<Laser />} />
        <Route path="/services/transfer" element={<Transfer />} />
        <Route path="/services/manuseio" element={<Manuseio />} />
        <Route path="/services/digital" element={<Digital />} />
        <Route path="/services/digital360" element={<Digital360 />} />
        <Route path="/services/silk" element={<Silk />} />
        <Route path="/services/sublimacao" element={<Silk />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};