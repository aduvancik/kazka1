import "../src/style/app.scss";

function App() {

  const scrollToPizzaSection = () => {
    const pizzaSection = document.getElementById("pizza");
    pizzaSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <>
    <div className="app">
    <span className="sss" onClick={scrollToPizzaSection}></span>
      <h1 onClick={scrollToPizzaSection}>Меню</h1> 
      <div className="menu-items">
        <div className="menu-item">
          <p>Цибулеві кільця</p>
          <p></p>
          <p>60 грн / 10 шт</p>
        </div>
        <div className="menu-item">
          <p>Нагетси</p>
          <p></p>
          <p>70 грн / 8 шт</p>
        </div>
        <div className="menu-item">
          <p>Ковбаски гриль</p>
          <p></p>
          <p>60 грн / 100 г</p>
        </div>
        <div className="menu-item">
          <p>Картопля по селянськи</p>
          <p></p>
          <p>50 грн / 300 г</p>
        </div>
        <div className="menu-item">
          <p>Картопля Фрі</p>
          <p></p>
          <p>65 грн / 200 г</p>
        </div>
        <div className="menu-item">
          <p>Cоус</p>
          <p></p>
          <p>20 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Салат літний</p>
          <p></p>
          <p>50 грн / порція</p>
        </div>
        <div className="menu-item">
          <p>Салат грецький</p>
          <p></p>
          <p>110 грн / 250 г</p>
        </div>
        <div className="menu-item">
          <p>Салат цезар</p>
          <p></p>
          <p>130 грн / 250 г</p>
        </div>
        <div className="menu-item">
          <p>Печінка з цибулькою</p>
          <p></p>
          <p>75 грн / 250 г</p>
        </div>
        <div className="menu-item">
          <p>Відбивна куряча</p>
          <p></p>
          <p>60 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Відбивна свинна</p>
          <p></p>
          <p>60 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Чебурек класичний</p>
          <p></p>
          <p>70 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Чебурек класичний міні</p>
          <p></p>
          <p>50 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Чебурек м'ясо+сир</p>
          <p></p>
          <p>75 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Чебурек м'ясо+сир міні</p>
          <p></p>
          <p>60 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Чебурек м'ясо+сир+чилі</p>
          <p></p>
          <p>75 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Чебурек м'ясо+сир+чилі міні</p>
          <p></p>
          <p>60 грн / 1 шт</p>
        </div>
        <div className="menu-item">
          <p>Вареники з картоплею та шкварками </p>
          <p></p>
          <p> 60 грн / порція</p>
        </div>
        <div className="menu-item">
          <p>Вареники з картоплею та сиром</p>
          <p></p>
          <p>60 грн / порція</p>
        </div>
        <div className="menu-item">
          <p>Пельмені</p>
          <p></p>
          <p>70 грн / порція</p>
        </div>
        <div className="menu-item">
          <p>Деруни зі сметаною</p>
          <p></p>
          <p>70 грн / порція</p>
        </div>
        <div className="menu-item">
          <p>Дерун козацький</p>
          <p></p>
          <p>120 грн / порція</p>
        </div>
      </div>
    </div><div className="app">
        <h1 id="pizza">Піца</h1>
        <div className="menu-items">
          <div className="menu-item title">
            <p>Томатна основа</p>
            <p></p>
            <p>30 см</p>
          </div>
          <div className="menu-item">
            <p>Маргарита</p>
          {/* <span className="sklad">(Сир, томатний соус, моцарела, базилік)</span> */}
            <p></p>
            <p>160 грн</p>
          </div>
          <div className="menu-item">
            <p>Cалямі</p>
            <p></p>
            <p>180 грн</p>
          </div>
          <div className="menu-item">
            <p>Вегетаріана</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Тоскана</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Афіна</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Неаполітана</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Провинціале</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>М'ясна</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Марінара</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item title">
            <p>Вершкова основа</p>
            <p></p>
            <p>30 см</p>
          </div>
          <div className="menu-item">
            <p>Капрічоза</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Гавайська</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Палерма</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Верона</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Флоренція</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>Венеціала</p>
            <p></p>
            <p>200 грн</p>
          </div>
          <div className="menu-item">
            <p>4 сири</p>
            <p></p>
            <p>240 грн</p>
          </div>
      
        </div>
      </div>
      {/* <div className="app">
    <span className="sss" onClick={scrollToPizzaSection}></span>
      <h1 onClick={scrollToPizzaSection}>Пиво</h1> 
      <div className="menu-items">
        <div className="menu-item">
          <p>Микулин 900</p>
          <p></p>
          <p>60 грн / л</p>
        </div>
        <div className="menu-item">
          <p>Тернове поле</p>
          <p></p>
          <p>60 грн / л</p>
        </div>
        <div className="menu-item">
          <p>Микулин Медове</p>
          {/* <p></p> */}
          {/* <p>60 грн / л</p>
        </div>
        <div className="menu-item">
          <p>Кров москаля</p>
          <p></p>
          <p>60 грн / л</p>
        </div>
        <div className="menu-item">
          <p>Сидр грейфрукт</p>
          <p></p>
          <p>60 грн / л</p>
        </div>
        <div className="menu-item">
          <p>Ель Медуза</p>
          <p></p>
          <p>60 грн / л</p>
        </div> */}
       
      {/* </div> */}
    {/* </div>  */}
      </>
  );
}

export default App;
