import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ProjectRAG } from './pages/ProjectRAG';
import { ProjectDeficiency } from './pages/ProjectDeficiency';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects/rag-system" element={<ProjectRAG />} />
        <Route path="projects/deficiency-ai" element={<ProjectDeficiency />} />
      </Route>
    </Routes>
  );
}

export default App;
