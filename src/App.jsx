import Counter from "./components/Counter";
import { StoreProvider } from "./components/ProductContext";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <StoreProvider>
      <Counter />
      <ProductList/>
    </StoreProvider>
  );
};

export default App;
