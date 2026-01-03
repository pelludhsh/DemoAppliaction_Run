exports.CartPage =class CartPage{
constructor(page){
    this.page=page;
    this.noOfProd="//tbody[@id='tbodyid']//tr//td[2]";
}

async CheckProdInCart(ProdName){
const ProductsInCart = await this.page.$$(this.noOfProd);
for(const prod of ProductsInCart){
     console.log(await prod.textContent());
    if(ProdName === await prod.textContent()){
        return true;
        break;
    }

    
}
}
}