import {ProductCardComponent} from "../../Components/product-card/index.js";

import {ProductPage} from "../products/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/236x/7c/9a/13/7c9a13045cb6540525e7901147d4239f.jpg",
                title: "Хочешь принять ванную после тяжелого дня ?" ,
                text: "Тогда тыкай лапкой по ссылке ниже ↓"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/736x/04/d4/19/04d419e9ade15db2a9e24c48b9b874d1.jpg",
                title: "Хочешь пройти диспансеризацию?",
                text: "Тогда тыкай лапкой по ссылке ниже ↓"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/564x/25/46/6b/25466bd62217e2fe774f5663899023a7.jpg",
                title: " Хочешь, чтобы хозяин оплатил вкусный корм?",
                text: "Тогда тыкай лапкой по ссылке ниже ↓"
            },
            
        ]
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
    
}