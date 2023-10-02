
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data =>  {
        const container = document.querySelector(".container");
        data.forEach((item) => {
            const itemHTML = `
                <div class="product">
                <div class="picture">
                <img src="${item.image}" alt="">
                </div>
                <div class="text">
                <h1>${item.category}</h1>
                <p>${item.id}</p>
                <p>${item.price}</p>
                <p>${item.rating}</p>
                <p>${item.title}</p>
                <p>${item.description.slice(0,20)}</p>
                </div>
                </div>
            `
            container.innerHTML += itemHTML;
        });
    });



    