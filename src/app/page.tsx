"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loader from "@/components/Loader";
import { stopLoading } from "@/redux/loadingSlice";
import Hero from "@/components/Hero";

export default function Home() {

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        dispatch(stopLoading()) 
      }, 2000)
    }
  },[])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
