import './App.css'
import {buttonLog} from './helper.jsx'

function App() {
  return (<>
      <h1>Handbags & Purses</h1>
        <nav>
          <button type="button" onClick={buttonLog}>to the collection</button>
          <button type="button" onClick={buttonLog}>shop all bags</button>
          <button type="button" onClick={buttonLog}>pre-orders</button>
        </nav>
  </>)
}

export default App
