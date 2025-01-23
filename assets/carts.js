// cart.js file to fetch cart data
fetch('/cart.js')
  .then(response => response.json())
  .then(cart => {
    // Cart data ko console par print karna ya apne requirement ke hisaab se use karna
    console.log(cart);
    window.cartData = cart;  // Cart details ko window object par save karna taaki baaki JavaScript mein access kiya ja sake
  })
  .catch(error => console.error('Error fetching cart:', error));
