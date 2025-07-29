import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { BaixoRelevo } from './pages/Services/ServicesBaixoRelevo'
import { LayoutWithHeader } from './LayoutWithHeader'
import { DTF } from './pages/Services/ServicesDTF'
import { Laser } from './pages/Services/ServicesLaser'
import { Transfer } from './pages/Services/ServicesTransfer'
import { Digital } from './pages/Services/ServicesDigital'
import { Digital360 } from './pages/Services/ServicesDigital360'
import { Silk } from './pages/Services/ServicesSilk'
import { Sublimacao } from './pages/Services/ServicesSublimacao'
import { Tampografia } from './pages/Services/ServicesTampografia'
import { About } from './pages/About'
import { PRW } from './pages/Prw'
import { Contato } from './pages/Contact'

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/gravacao-em-baixo-relevo" element={<BaixoRelevo />} />
        <Route path="/dtf" element={<DTF />} />
        <Route path="/gravacao-a-laser" element={<Laser />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/digital360" element={<Digital360 />} />
        <Route path="/silk" element={<Silk />} />
        <Route path="/sublimacao" element={<Sublimacao />} />
        <Route path="/tampografia" element={<Tampografia />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/prw" element={<PRW />} />
        <Route path="/fale-conosco" element={<Contato />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
