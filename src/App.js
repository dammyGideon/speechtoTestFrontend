import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Login = lazy(() => import('./components/Login/index'));
const Dashboard = lazy(() => import('./components/pages/dashboard'));
const Main = lazy(() =>import('./components/main'));
const Uploads = lazy(() =>import('./components/pages/uploads'));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>..Loading..</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} >
                <Route index element={<Main />}/>
            </Route>
            <Route path='/uploads' element={<Uploads/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
