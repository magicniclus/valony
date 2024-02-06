"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loader from "@/components/Loader";

export default function Home() {

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);


  if (isLoading) {
    return <Loader />;
  }

  // Sinon, retournez le reste de votre composant
  return (
    <>
      <header>

      </header>
      <main><h1>Hello world</h1></main>
      <footer></footer>
    </>
  );
}
