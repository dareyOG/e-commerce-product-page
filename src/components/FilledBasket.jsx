import CartButton from "./CartButton";
import icon_delete from "../assets/images/icon-delete.svg";

function FilledBasket() {
  return (
    <div className='m-8 mb-16 flex flex-col justify-between'>
      <div className='mb-8 flex items-center justify-between gap-x-5'>
        <img
          src='/images/image-product-1-thumbnail.jpg'
          alt='product-1-thumbnail'
          className='w-[3rem] rounded-[.5rem]'
        />
        <div className='text-[1.25rem] text-neutral-grayishBlue-300'>
          <p>Fall Limited Edition Sneakers</p>
          <span>$125.00 x 3</span>
          <span className='font-bold text-neutral-grayishBlue-400'>
            {" "}
            $375.00
          </span>
        </div>
        <button>
          <img src={icon_delete} className='w-[1.5rem]' />
        </button>
      </div>
      <CartButton>Checkout</CartButton>
    </div>
  );
}

// function FilledBasket({ cart }) {
//   return (
//     <div>
//       {cart.map(item => {
//         <div>
//           <img src={item.thumbnail} alt='df' />
//           <div>
//             <p>{item.name}</p>
//             <span>{item.price}</span>X
//             <span>
//               {item.quantity}
//               {item.totalPrice}
//             </span>
//           </div>
//           <img src='../assets/images/icon-delete.svg' />
//         </div>;
//       })}
//       <Button>checkout</Button>
//     </div>
//   );
// }

export default FilledBasket;
