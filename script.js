let menu = document.querySelector(".menu");
console.log(menu);
let menuList = document.createElement("div");

menuList.innerHTML = `
        <div class="menu-list">
        <p class="close">X</p>
            <div class="content">
               
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Blog<i class="bi bi-chevron-down"></i>
                        <ul class="drop-down">
                            <li>Blog Home</li>
                            <li>Blog Single</li>
                        </ul>
                    </li>
                    <li>Contact</li>
                    <li>Drop-down<i class="bi bi-chevron-down"></i>
                        <ul class="drop-down">
                            <li>Elements</li>
                            <li>Products</li>
                            <li>Level2 <i class="bi bi-chevron-down"></i>
                                <ul class="drop-down1">
                                    <li>item1</li>
                                    <li>item2</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `;
menu.addEventListener("click", () => {
    console.log("salam");

    document.body.appendChild(menuList);

    let content = document.querySelector(".content");

    
    let close = menuList.querySelector(".close");
    close.addEventListener("click", () => {
        menuList.remove();
    });
});

document.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        navbar.style.backgroundColor = "rgb(138, 144, 255)";
        navbar.style.height = "70px";
        navbar.style.opacity = ".9"
        navbar.style.zIndex = "99"

    } else {

        navbar.style.backgroundColor = "transparent"
        navbar.style.height = "100px";



    }
})
let products = document.querySelector(".items");

const getAllByType = function () {
    fetch(`http://localhost:3000/all`)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                products.innerHTML += `
                    <div class="item">
                        <img src="${element.img}" alt="">
                        <div class="info">
                            <p class="name">${element.name}</p>
                            <p class="info">${element.info}</p>
                            <button>VIEW DETAILS</button>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

getAllByType();


