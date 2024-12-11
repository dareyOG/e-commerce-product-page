import NavList from "./NavList";
import NavBar from "./NavBar";
import Sneaker from "./Sneaker";
import Carousel from "./Carousel";
import Main from "./Main";
import SneakerProfile from "./SneakerProfile";
import Counter from "./Counter";
import CartModal from "./CartModal";
import SneakerModal from "./SneakerModal";
import { useSneaker } from "../context/SneakerContext";

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
