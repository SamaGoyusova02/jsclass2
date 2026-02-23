class Burgers{
    constructor(id ,title, text ,price , img){
        this.title = title
        this.text = text
        this.price = price
        this.img = img
        this.id = id
    }
    showburgers(){
        return `
            <div id = "${this.id}" data-aos="zoom-in"   data-aos-duration="2000" class=" w-[310px] h-[390px] rounded-[20px] overflow-hidden bg-[#222831] hover:scale-[1.05] duration-700 ease-in-out">
            <div class="bg-[#f1f2f3] w-[310px] flex justify-center items-center h-[200px] rounded-bl-[40px]">
                <img class="w-[170px] hover:scale-[1.1] duration-300 ease-in-out"  src="${this.img}" alt=""/>
            </div>
            <div class="px-3">
                <p class="text-white font-[500] text-xl mt-3 ">${this.title}</p>
                <p class="text-white mt-3">${this.text}</p>
                <div class="flex justify-between items-center mt-3">
                    <p class="text-white text-xl ml2">$ ${this.price}</p>
                    <p onclick = "showid(${this.id})" class="bg-[#ffbe33] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><i class="fa-solid fa-cart-shopping text-white"></i></p>
                </div>
            </div>
        </div>

        `
    }
}
let cardcontainer = document.getElementById('cardcontainer')
let burgerarray = [
    new Burgers(1,'Delicious Pizza' , 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 20 , 'https://themewagon.github.io/feane/images/f1.png'),
    new Burgers(2,'Delicious Burger' , 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',15, 'https://themewagon.github.io/feane/images/f2.png'),
    new Burgers(3,'Delicious Pizza', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 17 , 'https://themewagon.github.io/feane/images/f3.png'),
    new Burgers(4,'Delicious Pasta' , 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 18 , 'https://themewagon.github.io/feane/images/f4.png'),
    new Burgers(5,'French Fries', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 10 , 'https://themewagon.github.io/feane/images/f5.png'),
    new Burgers(6,'Delicious Pizza', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 15 , 'https://themewagon.github.io/feane/images/f6.png'),
    new Burgers(7,'Tasty Burger', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 12 , 'https://themewagon.github.io/feane/images/f7.png'),
    new Burgers(8,'Tasty Burger', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',14 , 'https://themewagon.github.io/feane/images/f8.png'),
    new Burgers(9,'Delicious Pasta', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',10 , 'https://themewagon.github.io/feane/images/f9.png')

]
for (let s = 0; s < burgerarray.length; s++) {
    cardcontainer.innerHTML += burgerarray[s].showburgers()
    
}

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

let mainsebet = [];
function showid(id) {
  mainsebet.push(id);
  showsebet()
}


   let incart = document.getElementById('incart')
  function opensebet(){
    incart.style.display === 'none' ? incart.style.display = 'block': incart.style.display = 'none'
  }
  function closebutton(){
    incart.style.display = 'none'
  }
let cardcont = document.getElementById('cardcont')

  function showsebet() {
  cardcont.innerHTML = "";
  cardcont.innerHTML = mainsebet.map((id, item) => {
    const fastfood = burgerarray.find(s => s.id === id)

    return `
         <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
                  <div class="col-span-2 flex items-center gap-6">
                    <div class="w-20 h-20 shrink-0">
                      <img src='${fastfood.img}'
                        class="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 class="text-[15px] font-semibold text-slate-900">${fastfood.title}</h3>
                      
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <h4 class="text-[15px] font-semibold text-slate-900">${fastfood.price}$</h4>
                    <svg onclick="removesebet(${item})" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-red-500 ml-auto"
                      viewBox="0 0 320.591 320.591">
                      <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"></path>
                      <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>

    
    
    `

  })
    .join("")
}

function removesebet(item) {
 mainsebet.splice(item, 1)
  showsebet()
}