import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";


function App() {
  return (
      <div className={'img'}>
        <Header></Header>
          <div className={'main'}>
              <Content></Content>
          </div>
      </div>
  );
}


//permite exportar um único valor como o valor padrão de um módulo
export default App;
