import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "./AdminHomePage/AdminHomePage";
import ApplicationFormPage from "./ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./CreateTripPage/CreateTripPage";
import HomePage from "./HomePage/HomePage";
import ListTripsPage from "./ListTripsPage/ListTripsPage";
import LoginPage from "./LoginPage/LoginPage";
import TripDetailsPage from "./TripDetailsPage/TripDetailsPage";

function RouterPage() {

    return (

        <BrowserRouter>

            <Routes>

                <Route index element={<HomePage />} />
                <Route path="Login" element={<LoginPage />} />
                <Route path="List" element={<ListTripsPage />}/>
                <Route path="Application" element={<ApplicationFormPage />}/>
                <Route path="AdminHome" element={<AdminHomePage />}/>
                <Route path="CreateTrip" element={<CreateTripPage />}/>
                <Route path="TripDetails" element={<TripDetailsPage />} />

            </Routes>

        </BrowserRouter>

    )

}

export default RouterPage;