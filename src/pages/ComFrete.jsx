import React, { useState, useEffect } from "react";
import { getItensComFrete } from "../api";
import MeuCarrinho from "../components/MeuCarrinho";

export default function ComFrete() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItensComFrete().then(function (data) {
      setData(data);
    });
  }, []);

  return (
    <div>
      <MeuCarrinho data={data} />
    </div>
  );
}
