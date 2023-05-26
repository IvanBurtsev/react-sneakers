import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div className="wrapper clear">
    <Header/>  
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
        <h1> Все кроссовки</h1> 


        <div className='search-block d-flex'>
          <img src='/img/search.svg' alt='search'/>
          <input type='text' className='search-input' placeholder='Поиск...' />
        </div>
       </div>

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
