import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail({}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    );
    const jsonData = await data.json();
    console.log("jsonData: ", jsonData.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Detail</h1>
    </>
  );
}

export default Detail;
