import NavList from "./components/NavList";
import NavBar from "./components/NavBar";
import Sneaker from "./components/Sneaker";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import SneakerProfile from "./components/SneakerProfile";
import Counter from "./components/Counter";
import CartModal from "./components/CartModal";
import SneakerModal from "./components/SneakerModal";
import { useSneaker } from "./context/SneakerContext";

function App() {
  const { isNavActive, isCartModalActive, isSneakerModal } = useSneaker();
  return (
    <main>
      <NavBar />
      {isNavActive && <NavList />}
      <Sneaker>
        <Carousel />
        <Main>
          <SneakerProfile />
          <Counter />
        </Main>
      </Sneaker>
      {isCartModalActive && <CartModal />}
      {isSneakerModal && <SneakerModal />}
    </main>
  );
}

export default App;
