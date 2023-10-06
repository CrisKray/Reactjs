import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Card from "../components/card";
import { useEffect } from "react";
import { json } from "react-router-dom";

export default function HomePage() {
  const list_pd = [
    {
      pic: "cf1.png",
      name: "Cà phê phindi Hạt Dẻ Cười",
      price: 5000,
    },
    {
      pic: "cf2.png",
      name: "Cà phê phindi Choco",
      price: 35000,
    },
    {
      pic: "cf3.png",
      name: "Cà phê phindi Kem Sữa",
      price: 15000,
    },
    {
      pic: "cf4bacxiu.png",
      name: "Cà phê Bạc Xỉu",
      price: 7000,
    },
    {
      pic: "cf4phinsuada.png",
      name: "Cà phê phin Sữa Đá",
      price: 9000,
    },
    {
      pic: "cfdenda.png",
      name: "Cà phê Đen Đá",
      price: 23000,
    },
    {
      pic: "cfdennong.png",
      name: "Cà phê Đen Nóng",
      price: 25000,
    },
    {
      pic: "cfsuanong.png",
      name: "Cà phê Sữa Nóng",
      price: 1000,
    },
  ];

  const PDlist = list_pd.map(function (item) {
    return <Card data={item} />;
  });
  return (
    <>
      <Header />
      <Banner />
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {" "}
        {PDlist}
      </div>
      <Footer />
    </>
  );
}
