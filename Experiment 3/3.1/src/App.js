import ProductCard from "./components/ProductCard";

import audi from "./assets/audi.jpg";
import bmw from "./assets/bmw.jpg";
import mercedes from "./assets/mercedes.jpg";

function App() {
  return (
    <div style={{ display: "flex", gap: "2px", padding: "2px" }}>
      <ProductCard
        name="Mercedes SLS AMG"
        price="3,00,00,000"
        inStock={true}
        image={mercedes}
      />

      <ProductCard
        name="BMW M3 Competition"
        price="1,50,00,000"
        inStock={false}
        image={bmw}
      />

      <ProductCard
        name="Audi R8 Spider"
        price="2,80,00,000"
        inStock={true}
        image={audi}
      />
    </div>
  );
}

export default App;
