import React from "react";
import { NavBar } from "../components/ui/NavBar";
import { MarvelScreen } from "./../components/marvel/MarvelScreen";
import { DcScreent } from "./../components/dc/DcScreent";
import { SearchScreen } from "./../components/search/SearchScreen";
import { Route, Routes } from "react-router-dom";
import { HeroScreen } from "./../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreent />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="/" element={<MarvelScreen />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </>
  );
};
