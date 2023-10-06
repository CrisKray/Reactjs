import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Information from "../components/information";

export default function PDDetail() {
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
  ];
  
  const PDlist = list_pd.map(function (item) {
    return <Card data={item} />;
  });

  return (
    <>
      <Header />
      <Information />
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {" "}
        {PDlist}
      </div>
      <Footer />
    </>
  );
}
