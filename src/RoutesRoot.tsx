import React from 'react';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import ReduxCounter from './pages/ReduxCounter';

function RoutesRoot() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="profile" element={<Profile />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="counter" element={<ReduxCounter />} />
        <Route index element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default RoutesRoot;
