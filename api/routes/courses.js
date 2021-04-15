const contentfulAPI = require('../contentful');

//обработчики 

exports.getAll = function(req, res){
    // как-то используем функцию contentfulAPI.getCoursesList() и, возможно, другие
    const data = contentfulAPI.getCoursesList();
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    
    res.send( JSON.stringify(data) );
}

exports.getOne = function(req, res){
    // как-то используем функцию contentfulAPI.getCoursesList() и, возможно, другие
    res.send();
}

