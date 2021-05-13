import React from 'react';


export const Menu = (props) => {
    //TODO проверка данных - Заменить курсы с ссылками на них 1,2,3 на ссылки из CorsesList.jsx
   
    const entries = props.entries || [];
    return (
        <nav>
        <ul>
          <li><a href="http://localhost:1234">Главная</a></li> 
          <li> 
              <div className="dropdown">
                  <button onСlick="RedTeamFunction()"  className="dropbtn"><a href="http://localhost:1234/coursesList">Курсы</a></button>
                  <div id="courses" className="dropdown-content">
                    <a href="http://localhost:1234/coursesList/course1">Курс 1</a>
                    <a href="http://localhost:1234/coursesList/course2">Курс 2</a> 
                    <a href="http://localhost:1234/coursesList/course3">Курс 3</a> 
                  </div>
              </div>
          </li>
          <li><a href="">Log in</a></li>
        </ul>
        </nav>
    );
};


export default Menu;