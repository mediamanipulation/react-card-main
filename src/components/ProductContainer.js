import { Products } from './products';
import contents from './content';
import './Product.css'


export default function ProductContainer() {
    return(
           <div className='App'>
          <div className='productTile'>Products</div>
               <div className='productList'>
               
                   {contents.map(contents => (
                       <Products 
                           key={contents.id}
                           image={contents.image}
                           name={contents.name}
                           price={contents.price}
                           totalSales={contents.totalSales}
                           timeLeft={contents.timeLeft}
                           rating={contents.rating}
                       />
                   ))}
               </div>
           </div>
    )
}

