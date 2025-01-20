import "./App.css";
import MailBox from "./components/MailBox";
import ProductCard from "./components/ProductCard";

const productData = [
  {
    id: "1_product",
    productName: "Taco 1",
    price: 3.99,
    hasDiscount: true,
    description: "Lorem",
  },
  {
    id: "2_product",
    productName: "Taco 2",
    price: 4.99,
    hasDiscount: false,
    description: "Lorem",
  },
  {
    id: "3_product",
    productName: "Taco 3",
    price: 5.99,
    hasDiscount: false,
    description: "Lorem",
  },
];

function App() {
  return (
    <div>
      <MailBox />
      {productData.map((item) => {
        return (
          <ProductCard
            key={item.id}
            productName={item.productName}
            price={item.price}
            hasDiscount={item.hasDiscount}
            description={item.description}
          />
        );
      })}
      <ProductCard title="taco" decription={10.99} />
    </div>
  );
}

export default App;
