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
        <div>
            <p>Курс 1</p>
            <p>Описание 1 курса</p>
            <ul className="course">
                <li className="block">Занятие 1</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession1">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 2</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession2">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block" >Занятие 3</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession3">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 4</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession4">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 5</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession5">Перейти</a></li>
            </ul>
        </div>
    );
};

export const Course2 = (props) => {
    //TODO импортировать в курс 1
   
    const entries = props.entries || [];
    return (
        <div>
            <p>Курс 2</p>
            <p>Описание 2 курса</p>
            <ul className="course">
                <li className="block">Занятие 1</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession1">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 2</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession2">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block" >Занятие 3</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession3">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 4</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession4">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 5</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession5">Перейти</a></li>
            </ul>
        </div>
    );
};

export const Course3 = (props) => {
    //TODO импортировать в курс 1
   
    const entries = props.entries || [];
    return (
        <div>
            <p>Курс 3</p>
            <p>Описание 3 курса</p>
            <ul className="course">
                <li className="block">Занятие 1</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession1">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 2</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession2">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block" >Занятие 3</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession3">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 4</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession4">Перейти</a></li>
            </ul>
            <ul className="course">
                <li className="block">Занятие 5</li> 
                <li>Сколько страниц в занятии</li>
                <li><a href="http://localhost:1234/coursesList/course1/lession5">Перейти</a></li>
            </ul>
        </div>
    );
};