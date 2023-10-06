import Header from "../components/header";
import Footer from "../components/footer";
import CardType from "../components/type-card";

export default function ProductTypeCf() {
  const list_pdtype = [
    {
      name: "Cà Phê ",
      list_pd: [
        {
          pic: "cf1.png",
          name: "Cà phê Phindi Hạt Dẻ Cười",
          price: 5000,
        },
        {
          pic: "cf2.png",
          name: "Cà phê Phindi Choco",
          price: 35000,
        },
        {
          pic: "cf3.png",
          name: "Cà phê Phindi Kem Sữa ",
          price: 15000,
        },
        {
          pic: "cf4bacxiu.png",
          name: "Cà phê Bạc Xỉu Đá",
          price: 7000,
        },
        {
            pic: "cfdenda.png",
            name: "Cà phê Đen Đá",
            price: 9000,
          },
        {
            pic: "cfdennong.png",
            name: "Cà phê Đen Nóng",
            price: 23000,
        },
        {
            pic: "cfsuanong.png",
            name: "Cà phê Sữa Nóng",
            price: 25000,
        },
        {
            pic: "cf4phinsuada.png",
            name: "Cà phê Sữa Đá",
            price: 1000,
        },
      ],
    },
  ];

  const listPDType = list_pdtype.map(function (item) {
    return <CardType data={item} />;
  });

  return (
    <>
      <Header />
      {listPDType}
      <Footer />
    </>
  );
}
