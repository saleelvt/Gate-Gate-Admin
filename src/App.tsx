// src/App.tsx
import React, { Fragment,  Suspense } from 'react';
import { Routes,Route  } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loading } from './components/pages/Loading';
import { AdminLogin } from './components/forms/admin/login';
import { useSelector } from 'react-redux';
import { RootState } from './reduxKit/store';
import { AdminHomePage } from './components/pages/admin/adminHomePage';




export const App: React.FC = React.memo(() => {
  const {isLogged,role,}=useSelector((state:RootState)=>state.auth)
  console.log("my role and my isLogged", isLogged,role);
  return (
    <Fragment>
      <Toaster position="top-center" />
      {/* Wrap Routes in Suspense for lazy-loaded components */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={ <AdminLogin/>} />
          <Route path="/adminHomepage" element={ <AdminHomePage/>} />  
        </Routes>
      </Suspense>
    </Fragment>
  );
});
