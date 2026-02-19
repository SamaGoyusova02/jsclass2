class Burgers{
    constructor(title, text ,price , img){
        this.title = title
        this.text = text
        this.price = price
        this.img = img
    }
    showburgers(){
        return `
            <div  data-aos="zoom-in"   data-aos-duration="2000" class=" w-[340px] h-[390px] rounded-[20px] overflow-hidden bg-[#222831] hover:scale-[1.05] duration-700 ease-in-out">
            <div class="bg-[#f1f2f3] w-[360px] flex justify-center items-center h-[200px] rounded-bl-[40px]">
                <img class="w-[170px] hover:scale-[1.1] duration-300 ease-in-out"  src="${this.img}" alt=""/>
            </div>
            <div class="px-3">
                <p class="text-white font-[500] text-xl mt-3">${this.title}</p>
                <p class="text-white mt-3">${this.text}</p>
                <div class="flex justify-between items-center mt-3">
                    <p class="text-white text-xl">$ ${this.price}</p>
                    <p class="bg-[#ffbe33] w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><i class="fa-solid fa-cart-shopping text-white"></i></p>
                </div>
            </div>
        </div>

        `
    }
}
let cardcontainer = document.getElementById('cardcontainer')
let burgerarray = [
    new Burgers('Delicious Pizza' , 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 20 , 'https://themewagon.github.io/feane/images/f1.png'),
    new Burgers('Delicious Burger' , 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',15, 'https://themewagon.github.io/feane/images/f2.png'),
    new Burgers('Delicious Pizza', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 17 , 'https://themewagon.github.io/feane/images/f3.png'),
    new Burgers('Delicious Pasta' , 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 18 , 'https://themewagon.github.io/feane/images/f4.png'),
    new Burgers('French Fries', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 10 , 'https://themewagon.github.io/feane/images/f5.png'),
    new Burgers('Delicious Pizza', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 15 , 'https://themewagon.github.io/feane/images/f6.png'),
    new Burgers('Tasty Burger', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 12 , 'https://themewagon.github.io/feane/images/f7.png'),
    new Burgers('Tasty Burger', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',14 , 'https://themewagon.github.io/feane/images/f8.png'),
    new Burgers('Delicious Pasta', 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',10 , 'https://themewagon.github.io/feane/images/f9.png')

]
for (let s = 0; s < burgerarray.length; s++) {
    cardcontainer.innerHTML += burgerarray[s].showburgers()
    
}