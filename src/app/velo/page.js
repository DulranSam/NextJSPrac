"use client";

import React, { useEffect, useState } from "react";
import { GetRequest, PostRequest } from "../lib/getFromYTS";
import Link from "next/link";

const Velo = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    mail: "",
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await GetRequest();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const content = (
    <div>
      {data.map((x) => {
        return (
          <div key={x.id}>
            <Link href={`users/${x.id}`}>{x.name}</Link>
          </div>
        );
      })}
    </div>
  );

  async function SendData(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const { username, password, mail } = user;
      const r = await PostRequest(username, password, mail);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>

      <content></content>

      <input
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="Enter Username..."
      ></input>
      <input
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="Enter password..."
      ></input>
      <input
        onChange={(e) => {
          setUser({ ...user, mail: e.target.value });
        }}
        placeholder="Enter Mail..."
      ></input>
      <button onClick={SendData}>{loading ? "Loading..." : "Send"}</button>
    </div>
  );
};

export default Velo;
