import { useEffect, useState, useCallback,Suspense } from "react";

import type { NextPage } from "next";
import App from "../components/App";
import '../i18n'
import dynamic from 'next/dynamic'
const Table = dynamic(() => import("../components/App"), {
ssr: false,
});

const Home: NextPage = () => {
 
  return (
 
    <Suspense fallback={<div>Loading...</div>}>
      <div>
  <Table/>
      </div>
      </Suspense>
  );
};

export default Home;
