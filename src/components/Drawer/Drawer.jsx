import styles from './Drawer.module.scss'

const Drawer = () => {
return (
    
        <div className={styles.overlay}>
        <div className={styles.drawer}>
      <h2 className='mb-30 justify-between d-flex'>Корзина<img className={styles.removeBtn}  src='/img/btn-remove.svg' alt='btn-remove'/></h2>

        <div className={styles.items}>
        <div  className='cartItem d-flex align-center mb-20'>
        <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}  className={styles.cartItemImg}>          
        </div>
        <div className='mr-20 flex'>
          <p className='mb-5'> Мужские Кроссовки Nike Blazer Mid Suede</p>
          <b>12 999руб.</b>
        </div>
        <img className={styles.removeBtn} src='/img/btn-remove.svg' alt='remove'/>
      </div>


      <div  className={styles.cartItem}>
        <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}  className={styles.cartItemImg}>          
        </div>
        <div className='mr-20 flex'>
          <p className='mb-5'> Мужские Кроссовки Nike Blazer Mid Suede</p>
          <b>12 999руб.</b>
        </div>
        <img className={styles.removeBtn} src='/img/btn-remove.svg' alt='btn-remove'/>
      </div> 
      </div>     

     <div className={styles.cartTotalBlock}>
     <ul >
      <li>
        <span>Итого:</span>
        <div></div>
        <b>21 498 руб.</b>
      </li>

      <li>
        <span> Налог 5%: </span>
        <div></div>
        <b>1074 руб.</b>
      </li>
     </ul>
     <button className={styles.greenButton}>Оформить заказ<img src='/img/arrow.svg' alt='arrow'/>
     </button>
     </div>    
    </div>
    </div>

)
}
export default Drawer;