import Header from "../components/header";
import Footer from "../components/footer";
import CardType from "../components/type-card";

export default function ProductType() {
  const list_pdtype = [
    {
      name: "Các loại thức uống khác ",
      list_pd: [
        {
          pic: "trasenvangcunang.png",
          name: "Trà Sen Vàng Củ Năng",
          price: 5000,
        },
        {
          pic: "trathachdao.png",
          name: "Trà Thạch Đào",
          price: 35000,
        },
        {
          pic: "trathachvai.png",
          name: "Trà Thạch Vải",
          price: 15000,
        },
        {
          pic: "traxanhdaudo.png",
          name: "Trà Xanh Đậu Đỏ",
          price: 7000,
        },
        {
          pic: "trathanhdao.png",
          name: "Trà Thanh Đào",
          price: 7000,
        },
        {
          pic: "classicphinfreeze.png",
          name: "Classic Phin Freeze",
          price: 7000,
        },
        {
          pic: "freezegreentea.png",
          name: "Freeze Trà Xanh",
          price: 7000,
        },
        {
          pic: "freezesocola.png",
          name: "Freeze Socola",
          price: 7000,
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
