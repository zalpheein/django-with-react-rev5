import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";
import Login from "./login";


function AccountsRoutes( { match } ) {
    return (
        <>
            <Routes>
                <Route path={match.url + "/profile"} element={<Profile />} />
                <Route path={match.url + "/login"} element={<Login />} />
            </Routes>
        </>
    )
}

export default AccountsRoutes;
