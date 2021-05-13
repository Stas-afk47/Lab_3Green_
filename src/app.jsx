import React from 'react';
import CoursesList from './components/CoursesList';
import Menu from './components/Menu';

export const App = (props) => {
    console.log(window.location);

    const textValue = 'Это какой-то текст';
    let page = "notCoursesList"; //допустим как-то вычислили страницу
    let pageContent;
    console.log ("URL"+window.location.pathname);
    if (window.location.href.indexOf("/coursesList/") > 0) {
        let url = window.location.pathname ;
        url = url.replace('/coursesList/','');
        pageContent = ( 
            <CoursesList 
                entries={props.courses.entries}
                error={props.courses.error}
            >
                Это {url} <b>курс</b>
            </CoursesList>
        );
    } else if (window.location.href.indexOf("/coursesList") > 0) {
        pageContent = ( 
            <CoursesList 
                entries={props.courses.entries}
                error={props.courses.error}
            >
                Ниже <b>список курсов</b>
            </CoursesList>
        );
    } else {
        pageContent = (
            <div> это не список курсов, другая страница, говорю же! </div>
            );
    }
    return (
        <div>
            <Menu />
            <h1>Hello, React! </h1>
            <p>{textValue}</p>
            <hr></hr>
            <b>{props.something}</b>
            <hr/>
            <hr />
            {pageContent}
        </div>
    );
};


export default App;