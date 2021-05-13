import React from 'react';


export const Menu = (props) => {
    //TODO проверка данных - Заменить курс 1,2,3 на ссылки из CorsesList.jsx
   
    const entries = props.entries || [];
    return (
        <nav>
        <ul>
          <li><a href="">Главная</a></li> 
          <li> 
              <div class="dropdown">
                  <button onclick="RedTeamFunction()"  class="dropbtn">Курсы</button>
                  <div id="courses" class="dropdown-content">
                    <a href="">Курс 1</a>
                    <a href="">Курс 2</a> 
                    <a href="">Курс 3</a> 
                  </div>
              </div>
          </li>
          <li><a href="">Log in</a></li>
        </ul>
        </nav>
    );
};


export default Menu;