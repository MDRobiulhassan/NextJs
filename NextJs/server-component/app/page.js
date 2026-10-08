"use client";
import React, { useState } from "react";
import ClientComp from "@/components/client-com";

const HomePage = () => {
  return (
    <div>
      Hello from Server
      <ClientComp />
    </div>
  );
};

export default HomePage;
