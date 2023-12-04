export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class="card mb-3" style="width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="${data.src}" class="img-fluid" alt="картинка">
                    </div>
                    <div class="col-md-5">
                        <div class="card-body ">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Груминг собак
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <h4>Наши грумеры вернут вашу собаку к заводским настройкам всего лишь за 2000 руб.</h4>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Услуги ветеренара
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body"> 
                          <h4> Болит лапка или живот? Отросли когти или появился зубной камень? А возможно нужно подобрать хорошие витамины? Наша команда ветеренаров поможет вам со всеми вопросами!</h4> 
                          <p> Цены могут варьироваться в зависимости от предоставленной услуги. Все можно уточнить у администратора по номеру 8-808-808-08-08.</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Зоо-магазин
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <h4> Нужен корм растительного или животного происхождения? Может минеральный или комбинированный? Или же биологически активные добавки? Не переживайте, наш продавец-консультант поможет вам определиться с выбором!</h4>
                          </div>
                        </div>
                      </div>
                    </div>   
                        </div>
                        
  
                    </div>
                </div>
            </div>
            `
        );
    }
    

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}