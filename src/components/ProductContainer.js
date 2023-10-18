import { Products } from './products';
import contents from './content';
import './Product.css'


export default function ProductContainer() {
    return(
           <div className='App'>
          <div className='productTile'>Products</div>
          <div className='product-description-top'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>

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
               <div className='product-description-bottom'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>

           </div>
    )
}

