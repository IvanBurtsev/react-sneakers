import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="wrapper clear">
    <Header/>  



      <div className='content p-40'>
        <h1 className='mb-40'> Все кроссовки</h1>
        

<div className='d-flex'>
<div className='card'>
          <img src='/img/sneakers/1.jpg' width={133} height={112} alt='sneacers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
            <span className='cena'>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src='/img/add.svg' alt='add'/>
          </button>
        </div>
        </div>
      
        <div className='card'>
          <img src='/img/sneakers/2.jpg' width={133} height={112} alt='sneacers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src='/img/add.svg' alt='add'/>
          </button>
        </div>
        </div>

        
        <div className='card'>
          <img src='/img/sneakers/3.jpg' width={133} height={112} alt='sneacers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src='/img/add.svg' alt='add'/>
          </button>
        </div>
        </div>


        
        <div className='card'>
          <img src='/img/sneakers/4.jpg' width={133} height={112} alt='sneacers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999руб.</b>
          </div>
          <button className='button'>
            <img width={11} height={11} src='/img/add.svg' alt='add'/>
          </button>
        </div>
        </div>



      </div>
      </div>  
    </div>  
   
  );
}

export default App;
