import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AdminRoute from "./Pages/Login/PrivateRoute/AdminRoute";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register";
import DetailWork from "./Pages/MyWorks/DetailWork/DetailWork";
import MyWork from "./Pages/MyWorks/Work";
import NotFoundPage from "./Pages/NotFoundPage";
function App() {
  return (
    <div>
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/mywork">
            <MyWork />
          </PrivateRoute>
          <PrivateRoute path="/singleWork/:id">
            <DetailWork />
          </PrivateRoute>
          <AdminRoute path="/dashboard">
            <Dashboard />
          </AdminRoute>
          <Route path="*" element={<NotFoundPage />} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
