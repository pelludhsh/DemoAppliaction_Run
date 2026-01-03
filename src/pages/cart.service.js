export class CartService {
  constructor(request) {
    this.request = request;
  }

  async addToCart(productId) {
    return await this.request.post('/addtocart', {
      data: {
        id: Date.now(),
        prod_id: productId,
        flag: true
      }
    });
  }


  async viewCart() {
  return await this.request.post('/viewcart', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      cookie: this.userCookie,
      flag: true
    }
  });
}


async deleteCartItem(itemId) {
  return await this.request.post('/deletecart', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      cookie: this.userCookie,
      id: itemId
    }
  });
}



  async placeOrder(orderPayload) {
    return await this.request.post('/order', {
      data: orderPayload
    });
  }
}
