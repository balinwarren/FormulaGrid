import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Grid from './components/Grid';
import GuessCard from './components/GuessCard';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pl-12 pr-12">
        <Header></Header>

        <Grid></Grid>

        <div className="font-display mt-5 text-center text-sm">
          <span className="block">
            Note: Driver's must have started a Grand Prix to qualify.
          </span>
          <span className="block">
            Tap on a team for past team names or on a category for more info.
          </span>
        </div>

        <div className='mt-8 flex  flex-col items-center justify-center gap-2 sm:hidden'>
          <GuessCard></GuessCard>
        </div>

        <Footer></Footer>
    </div>
  );
}

export default App;
