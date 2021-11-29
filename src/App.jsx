import React from 'react'

import { Routes, Route } from "react-router-dom";

import MainLayout from './layouts/main-layout';

import Home from './pages/home'
import Room from './pages/room'
import Book from './pages/book'
import Login from './pages/login'

import RequireAuth from './auth/requireauth';
import RequireAuthNot from './auth/requireauthnot';

import AuthProvider from './context-provider/authprovider';


const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="room" element={<Room />} />
            <Route
              path="book" 
              element=
              {
                <RequireAuth>
                  <Book />
                </RequireAuth>
              }
            />
            <Route 
              path="login"
              element=
              {
                <RequireAuthNot>
                  <Login />
                </RequireAuthNot>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App

