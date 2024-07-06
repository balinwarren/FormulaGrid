import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import GameTitle from './components/GameTitle';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pl-12 pr-12">
        <Header></Header>

        <GameTitle></GameTitle>

        <Footer></Footer>
    </div>
  );
}

export default App;
