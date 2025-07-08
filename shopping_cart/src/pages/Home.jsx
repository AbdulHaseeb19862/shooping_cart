import React from "react";
import { Card } from "../components";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

export function Home() {
  const products = [
    {
      id: 1,
      img: product1,
      desc: "Sony WH-CH510 Bluetooth Wireless",
      rate: 149,
    },
    {
      id: 2,
      img: product2,
      desc: "JBL Tune 750BTNC Noise Cancelling",
      rate: 179,
    },
    {
      id: 3,
      img: product3,
      desc: "Beats Studio3 Wireless Over-Ear",
      rate: 349,
    },
    {
      id: 4,
      img: product4,
      desc: "Boat Rockerz 450 On-Ear Headphones",
      rate: 49,
    },
    {
      id: 5,
      img: product5,
      desc: "Skullcandy Hesh ANC Over-Ear",
      rate: 129,
    },
    {
      id: 6,
      img: product6,
      desc: "Sennheiser HD 450BT Wireless",
      rate: 199,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {products.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
