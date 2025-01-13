// src/App.tsx
import React, { Fragment,  Suspense } from 'react';
import { Routes,Route  } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loading } from './components/pages/Loading';
import { AdminLogin } from './components/forms/admin/login';
import { useSelector } from 'react-redux';
import { RootState } from './reduxKit/store';
import DefaultLayout from './layout/DefaultLayout';
import ECommerce from './components/pages/Dashboard/Ecommerce';
import FormLayout from './components/pages/Form/FormLayout';
import TableOne from './components/Table/SubService';
import Tables from './components/pages/Table';




export const App: React.FC = React.memo(() => {
  const {isLogged,}=useSelector((state:RootState)=>state.auth)
  console.log("my role and my isLogged", isLogged);
  return (
    <Fragment>
      <Toaster position="top-center" />
   
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/admin/login" element={ <AdminLogin/>} />
        </Routes>
    
            <DefaultLayout>
      <Routes>
        <Route
          index
          element= {
              <ECommerce />
            
          }
        />
        
       
        <Route
          path="/forms/form-layout"
          element={
            <>
        
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
             
              <Tables />
            </>
          }
        />
        {/* <Route path="/settings"element={<>  <Settings />
            </>
          }
        />
        */}
        <Route
          path="/subservice"
          element={
             <TableOne/>
          }
        />
       
      </Routes>
      <>
      </>
   </DefaultLayout>
 



      </Suspense>
    </Fragment>
  );
});