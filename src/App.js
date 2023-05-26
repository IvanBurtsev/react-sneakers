import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';

const arr = [
  {title:'Мужские Кроссовки Under Armour Curry 8', price: 11000, imageUrl:'/img/sneakers/1.jpg', id: 1},
  {title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999,imageUrl:'/img/sneakers/2.jpg',id: 2},
  {title:'Мужские Кроссовки Nike Kyrie 7', price: 14900, imageUrl:'/img/sneakers/3.jpg',id: 3},
  {title:'Кроссовки Puma X Aka Boku Future Rider', price: 10500,imageUrl:'/img/sneakers/4.jpg', id: 4},
];

const App = () => {
  return (
    <div className="wrapper clear">
      <Drawer/>
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
         
      {arr.map((kop) => (
        <Card key={kop.id} title={kop.title} price={kop.price} imageUrl={kop.imageUrl}/>
      ))}

    
  </div> 
 </div>  
</div>  
   
  );
}

export default App;
