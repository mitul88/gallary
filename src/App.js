import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainComponent from './components/MainComponent';
import { Navigate, Route, Routes } from 'react-router-dom';
import Feed from './components/screens/Feed/Feed';
import ImageView from './components/screens/ImageView/ImageView';
import Login from './components/screens/Auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<MainComponent />}>
          <Route path="/" element={<Feed />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/image" element={<ImageView />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;
