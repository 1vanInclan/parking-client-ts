import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from '../ui/components'
import {CreateParking, Home, DeleteParking} from '../parkings/pages';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Home />}/>
        <Route path="/create" element={<CreateParking />}/>
        <Route path="/delete" element={<DeleteParking />}/>


        <Route path="/*" element={<Navigate to="/home" />}/>
      </Routes>

    </>
  )
}
