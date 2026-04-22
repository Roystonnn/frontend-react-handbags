import './App.css'
import ButtonCard from './components/ButtonCard.jsx'
import ProductCard from './components/ProductCard.jsx'
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'


function App() {

  return (<>
      <h1>Handbags & Purses</h1>
      <nav>
          <ButtonCard
              buttonTitle={"to the collection"}
          />
          <ButtonCard
              buttonTitle={"shop all bags"}
          />
          <ButtonCard
              buttonTitle={"pre-orders"}
          />
      </nav>
      <main>
          <ProductCard label={"Best Seller"}
                       image={bag1}
                       imageAlt={"foto van tas1"}
                       product={"The handy bag"}
                       price={"€400,-"}
          />
          <ProductCard label={"Best Seller"}
                       image={bag2}
                       imageAlt={"foto van tas2"}
                       product={"The stylish bag"}
                       price={"€250,-"}
          />
          <ProductCard label={"Best Seller"}
                       image={bag3}
                       imageAlt={"foto van tas3"}
                       product={"The simple bag"}
                       price={"€300,-"}
          />
          <ProductCard label={"Best Seller"}
                       image={bag4}
                       imageAlt={"foto van tas4"}
                       product={"The trendy bag"}
                       price={"€150,-"}
          />

      </main>
  </>)
}

export default App
