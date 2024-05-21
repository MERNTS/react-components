import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App1 from './components/App.jsx';
import App2 from './components/AppCountState.jsx';
import App3 from './components/StopWatch.jsx';
import App4 from './components/Undo.jsx';
import App5 from './components/OnOff.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/app1">Load App 1</Link></li>
                        <li><Link to="/app2">Load App 2</Link></li>
                        <li><Link to="/app3">StopWatch Without useRef</Link></li>
                        <li><Link to="/app4">Undo</Link></li>
                        <li><Link to="/app5">Toggle</Link></li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/app1" element={<App1 />} />;
                    <Route path="/app2" element={<App2 />} />;
                    <Route path="/app3" element={<App3 />} />;
                    <Route path="/app4" element={<App4 />} />;
                    <Route path="/app5" element={<App5 />} />;
                    <Route path="/" element={<div>Select an app to render</div>} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRoutes;
