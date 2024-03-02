"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function Page({ params }: { params?: { id: string } }) {
  const [property, setProperty] = useState<any>({});

  useEffect(
    function () {
      async function getProperty() {
        try {
          const res = await axios.get(
            `https://quiet-earth-83836-d3ae8f1c6d7f.herokuapp.com/https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1018186&p2=a6f757f38647f9fed6a748b29c64012a242cae1b&P_sandbox=true&P_RefId=${params?.id}`
          );

          const data = res.data || [];
          setProperty(data);
        } catch {
          console.log("oops");
        }
      }
      getProperty();
    },
    [params?.id]
  );

  return <div>page</div>;
}

export default Page;
