export class ProductService {
  constructor(request) {
    this.request = request;
  }

  async getAllProducts() {
    return await this.request.get('/entries');
  }

  async getProductById(id) {
    return await this.request.post('/view', {
      data: { id }
    });
  }
}
