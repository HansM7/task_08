const socket = io.connect()


socket.on('allProductsServer', (products) => {
    renderProducts(products)
})

function renderProducts(products){
    const head=`
    <table class="table table-sm table-dark" style="width: 100%">
        <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Thumbnail</th>
            </tr>
        </thead>
        <tbody>
    `
    const body= products.map(index=>{
        return `
        <tr>
            <td>${index.title}</td>
            <td>${index.price}</td>
            <td><img class="img_table" src="${index.thumbnail}"></img></td>
        </tr>
        `
    })

    const end =`
        </tbody>
    </table>
    `

    const newHtml=head+body+end

    document.getElementById("div_content_data").innerHTML=newHtml
}

function addProduct(){
    const title = document.getElementById('isTitle').value
    const price = parseInt(document.getElementById('isPrice').value)
    const thumbnail = document.getElementById('isThumbnail').value

    const content_message_response = document.getElementById('content_message_response')

    data={title,price,thumbnail}
    console.log(data)
    axios.post('/producto',{data})
    .then((response)=>{ 

        console.log(response);

        const state = response.data.state

        if (state === "error") {
            content_message_response.innerHTML=response.data.message
            content_message_response.style.display = 'block'
            setTimeout(() => {
                content_message_response.style.display = 'none'
            }, 3000);
        }else if(state === "success"){
            content_message_response.innerHTML=response.data.message
            content_message_response.style.display = 'block'
            setTimeout(() => {
                content_message_response.style.display = 'none'
            }, 3000);

            socket.emit('processAddProduct',"registro correcto")

        }
        

    })

}

// async function getProducts(){
//     const response = await fetch('/productos')
//     const products = await  response.json()
//     return await products
// }

window.addEventListener('load', () => { 

    // const allProducts=[]
    


    // fetch("/productos")
    // .then((response) => {response.json})
    // .then((data)=>{console.log(data)})

    // const AllDataProducts=  getProducts()

    // console.log(AllDataProducts)

    // console.log("hola")

    // axios.get(`/productos`)
    // .then((response) => {response.json})
    // .then((data)=>{console.log(data)})

})