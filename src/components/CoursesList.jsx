import React from 'react';


export const CoursesList = (props) => {
    //TODO проверка данных
   
    const entries = props.entries || [];
    let elements = [];
    for (let i = 0; i < 4; i++) {
        elements.push(
            <li> Элемент {i} </li>
        )
    }
    return (
        <div className="coursesList">
            {props.children}
            <ul>
                {entries.map( (item) => (
                    <li key={item} >{item}</li>
                ))}
            </ul>
        </div>
    );
};


export default CoursesList;




export const Course1 = (props) => {
    //TODO импортировать в курс 1
   
    const entries = props.entries || [];
    return (
        <ul>
            <p>Курс 1</p>
            <p>Описание 1 курса</p>
            <ul>
                <li>Занятие 1</li> 
                <li>Сколько страниц в занятии</li>
                 <li><a href="">Перейти</a></li>
            </ul>
        </ul>
    );
};