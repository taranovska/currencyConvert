import React, { useEffect, useState } from "react";

export default function Header() {
  const BASE_URL = `https://api.exchangerate.host/latest`;
  const [USDRate, setUSDRate] = useState();
  const [EURRate, setEURRate] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}?base=USD&symbols=UAH`)
      .then((res) => res.json())
      .then((data) => setUSDRate(data.rates["UAH"].toFixed(2)));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}?base=EUR&symbols=UAH`)
      .then((res) => res.json())
      .then((data) => setEURRate(data.rates["UAH"].toFixed(2)));
  }, []);

  return (
    <div className="header">
      <div className="title">
        Currency exchange rate for Ukrainian Hryvnia (UAH):
      </div>
      <div>USD: {USDRate}</div>
      <div>EUR: {EURRate}</div>
    </div>
  );
}
