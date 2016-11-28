import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import crossroads from 'crossroads';
import './style.scss';

let render = function(path){
    return require(`promise?global,pages\/[filename]!./pages/${path}`)().then(args=>{
        ReactDOM.render(
            React.createElement(args.default || args),
            document.getElementById('root')
        );
    });
}
if (typeof document == 'undefined') {
    var currentPath = null;
    render = function (path){
        currentPath = path;
    }
    module.exports = function render(locals) {
        crossroads.parse(locals.path);
        return require(`promise?global,pages\/[filename]!./pages/${currentPath}`)()
            .then(args=>{
                return {
                    root:ReactDOMServer.renderToString(React.createElement(args.default || args))
                };
            });
    };
}
crossroads.addRoute("/",render.bind(this,"main"))
crossroads.addRoute("/{path*}",render)


// Client render (optional):
if (typeof document !== 'undefined') {
    if (window.History) {
        window.addEventListener('popstate', () =>{
            window.dispatchEvent(new Event('changestate'));
        });
        window.addEventListener('changestate',()=>{
            crossroads.parse(document.location.pathname + document.location.search);
        })
        document.addEventListener('click',(event)=>{
            if (event.target.tagName.toLowerCase() == 'a') {
                event.preventDefault();
                window.history.pushState(null,null,event.target.href);
                window.dispatchEvent(new Event('changestate'));
            }
        })
    }
    crossroads.parse(document.location.pathname + document.location.search)
}

