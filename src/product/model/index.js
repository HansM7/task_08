class Product{

    constructor(data=[]){
        this.data =[
            {
            id:1,
            title:"Shoes",
            price:15,
            thumbnail:"https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1656017332~hmac=f0f8fa3b4209578115d8b111650ef3b1"
            },
            {
                id:2,
                title:"Shoes 2",
                price:150,
                thumbnail:"https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1656017332~hmac=f0f8fa3b4209578115d8b111650ef3b1"
            }
        ]
    }

    async save(product){
        try {
            const id = this.data.length+1
            const newProduct={}

            newProduct.id=id
            newProduct.title=product.title
            newProduct.price=parseInt(product.price)
            newProduct.thumbnail=product.thumbnail

            this.data.push(newProduct)

            return this.data

        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try{
            return this.data
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports=Product