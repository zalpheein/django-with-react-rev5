import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "components/AppLayout";
import About from "./about";
import Home from "./home";
import AccountsRoutes from "./accounts";

function Root() {
    return (
        <AppLayout>
            최상위 컨포넌트
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accounts" element={<AccountsRoutes />} />
            </Routes>
        </AppLayout>
    )
}

export default Root;

