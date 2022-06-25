const socket = io.connect()

socket.on('allProductsServer', (products) => {
    renderProducts(products)
})

socket.on('allMessagesServer', (messages) => {
    renderMessages(messages)
})

function renderProducts(products){
    const head=`<table class="table table-sm table-dark" style="width: 100%">
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
    }).join(' ')

    const end =`
        </tbody>
    </table>
    `

    const newHtml=head+body+end

    document.getElementById("div_content_data").innerHTML=newHtml
}

function renderMessages(messages){

    const html = messages.map((index) => {
        return `
        <div class="item_message">
            <span class="email">${index.email} </span><span class="fecha">[${index.date}]: </span><i class="mensaje">${index.text}</i>
        </div>
            `
      }).join(' ')
    
    document.getElementById('content_message').innerHTML = html
}

function addProduct(){
    const title = document.getElementById('isTitle').value
    const price = document.getElementById('isPrice').value
    const thumbnail = document.getElementById('isThumbnail').value

    const content_message_response = document.getElementById('content_message_response')

    data={title,price,thumbnail}

    axios.post('/producto',{data})
    .then((response)=>{ 

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

function addMessage(){

    const email=document.getElementById("isUser").value
    const text=document.getElementById("isText").value

    data={email,text}

    axios.post('/message',{data})
    .then((result) => {
        console.log(result);
        socket.emit('processAddMessage',"Se registro un mensaje")
    })

    

}
