
 export default  API_CONFIG = {

    HOST: 'http://192.168.1.4:8000/', // Thay thế bằng địa chỉ host của API 
    
    LOGIN: 'user/login/', 
    LOGOUT:'user/logout/',
    REGISTER:'user/register/',
    PROFILE:'user/profile/',
    RESPASSWORD:'user/reset-password',
    UPDATE_PROFILE:'user/update-profile/',

    // Store
    CATEGORIES:'store/categories/',
    GETBOOK:'store/book/',
    NEWBOOKS:'store/new-books/',
    BESTSELERBOOK:'store/best-seller-books/',
    BOOKBYCATEGORY:'store/books-by-category/',
    SEARCH:'/search/?search=',


    //order
    ORDER:'order/createorder/',
    //Cart
    ADDTOCART:'cart/add/',
    UPDATECART:'cart/update/',
    DELETECART:'cart/remove/',
    GETCART:'cart/get/',
  };
  