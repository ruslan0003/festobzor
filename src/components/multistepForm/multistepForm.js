import React from 'react';

function MultistepForm() {
  
  return(
    <div className="multistep-form__container">
    <div className="multistep-form__progress-bar">
      <div className="multistep-form__step">
        <p>
          ФИО
        </p>
        <div className="multistep-form__bullet">
          <span>1</span>
        </div>
        <div className="multistep-form__check fas fa-check"></div>
      </div>
      <div className="multistep-form__step">
        <p>
          Контакты
        </p>
        <div className="multistep-form__bullet">
          <span>2</span>
        </div>
        <div className="multistep-form__check fas fa-check"></div>
      </div>
      <div className="multistep-form__step">
        <p>
          О проекте
        </p>
        <div className="multistep-form__bullet">
          <span>3</span>
        </div>
        <div className="multistep-form__check fas fa-check"></div>
      </div>
      <div className="multistep-form__step">
        <p>
          Пароль
        </p>
        <div className="multistep-form__bullet">
          <span>4</span>
        </div>
        <div className="multistep-form__check fas fa-check"></div>
      </div>
    </div>
    <div className="multistep-form__form-outer">
      <form action="#" className="multistep-form__form">
        <div className="multistep-form__page multistep-form__slide-page">
          <div className="multistep-form__title">
             Контактное лицо
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Фамилия
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Имя
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Должность
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <button className="multistep-form__firstNext next">Далее&nbsp;&rarr;</button>
          </div>
        </div>
        <div className="multistep-form__page">
          <div className="multistep-form__title">
            Контактные данные
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Email
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Телефон
            </div>
            <input type="number"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Адрес сайта
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field multistep-form__btns">
            <button className="multistep-form__prev-1 prev">&larr;&nbsp;Назад</button>
            <button className="multistep-form__next-1 next">Далее&nbsp;&rarr;</button>
          </div>
        </div>
        <div className="multistep-form__page">
          <div className="multistep-form__title">
             Ваша компания
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Название проекта
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Год основания
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Фестивалей в год
            </div>
            <select>
              <option>до 10</option>
              <option>10-30</option>
              <option>30-50</option>
              <option>50-100</option>
              <option>более 100</option>
            </select>
          </div>
          <div className="multistep-form__field multistep-form__btns">
            <button className="multistep-form__prev-2 prev">&larr;&nbsp;Назад</button>
            <button className="multistep-form__next-2 next">Далее&nbsp;&rarr;</button>
          </div>
        </div>
        <div className="multistep-form__page">
          <div className="multistep-form__title">
            Данные для входа
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
               Email
            </div>
            <input type="text"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Пароль
            </div>
            <input type="password"/>
          </div>
          <div className="multistep-form__field">
            <div className="multistep-form__label">
              Повторите пароль
            </div>
            <input type="password"/>
          </div>
          <div className="multistep-form__field multistep-form__btns">
            <button className="multistep-form__prev-3 prev">&larr;&nbsp;Назад</button>
            <button className="multistep-form__submit">Отправить&nbsp;&rarr;</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default MultistepForm;