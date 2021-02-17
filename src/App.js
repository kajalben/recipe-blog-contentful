import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Category from "./components/Category";
import RecipeDetail from './components/RecipeDetail';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useContentful from './hook/use-contentful';

function App() {
  const {categoy, errors, brackfast, salad} = useContentful();
if(errors) return <span>{errors.map( error => error.message).join(',')}</span>
if(!categoy && !brackfast && !salad) return <span>Loading......</span>
  return (
    <div className="App">
      <Header />
      {(categoy && brackfast && salad) && <Category categoy={categoy} brackfast={brackfast}  salad={salad}/>} 
      {/* <RecipeDetail /> */}
      <Footer />
    </div>
  );
}

export default App;
