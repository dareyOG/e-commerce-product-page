// const initialState = {
//   isNavActive: false,
//   count: 0,
//   activeIndex: 0,
//   cartlist: [],
//   isProductModalActive: false,
//   isCartModalActive: false,
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "toggle_navMenu":
//       return {
//         ...state,
//         isNavActive: state.isNavActive ? false : true,
//       };
//     case "previous_slide":
//       return {
//         ...state,
//         activeIndex:
//           state.activeIndex === 0 ? images.length - 1 : state.activeIndex - 1,
//       };
//     case "next_slide":
//       return {
//         ...state,
//         activeIndex:
//           state.activeIndex === images.length - 1 ? 0 : state.activeIndex + 1,
//       };
//     case "increase_count":
//       return { ...state, count: state.count + 1 };
//     case "decrease_count":
//       return { ...state, count: state.count < 1 ? 0 : state.count - 1 };
//     case "add_product_to_cart":
//       return {
//         ...state,
//         cartlist: state.count ? [action.payload] : [],
//       };
//     case "delete_product_from_cart":
//       return {
//         ...state,
//         count: 0,
//         cartlist: state.cartlist.filter(
//           cartedProduct => cartedProduct.name !== action.payload.name,
//         ),
//       };
//     case "toggle_cart": {
//       return {
//         ...state,
//         isCartModalActive: state.isCartModalActive ? false : true,
//       };
//     }
//     case "toggle_product_modal":
//       return {
//         ...state,
//         isProductModalActive: state.isProductModalActive ? false : true,
//       };
//     case "checkout":
//       return { ...state, isCartModalActive: false };
//     default:
//       throw new Error("unknown action");
//   }
// }
// const [
//   {
//     isNavActive,
//     count,
//     activeIndex,
//     cartlist,
//     isProductModalActive,
//     isCartModalActive,
//   },
//   dispatch,
// ] = useReducer(reducer, initialState);
// // format currency
// const formatCurrency = amount =>
//   amount.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
