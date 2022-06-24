fetch("https://fakestoreapi.com/products").then((data)=> {
    console.log(data);
    return data.json();
}).then((completedata)=>{
    let data1 ="";
    completedata.map((values)=>{
        data1+=
        `<div class="card">
        <img src="${values.image}" alt="" class="image">
        <title class="title">${values.title}</title>
        <div class="info">
            <p class="description"> ${values.description}</p>
            <div class="ratings">
    <div class="empty-stars"></div>
    <div class="full-stars"></div>
    </div>
    <div class="footer">
                <p class="price">${values.price}</p>
                <button>Buy Now</button>
            </div>
        </div>
       </div>`
    });document.getElementById("Main").innerHTML=data1;
    /* console.log(completedata); */
}).catch((err)=>{
    console.log(err)
})