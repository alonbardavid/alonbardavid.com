var metadata =module.exports = {
    getPosts:function(){
        return Object.keys(metadata.pages).filter(function(p){
            return p.indexOf("posts/") ==0;
        }).map(function(p){
            return metadata.pages[p];
        })
    },
    pages: {
        "posts/multiple_sites_with_mvc_5":{
            "title":"Multiple sites with MVC5",
            "description":"A simple way to work with multiple whitelabel sites in ASP.net, ",
            "tags":[".net","MVC","C#","Entity Framework","ASP","Programming"],
            "route":"/posts/multiple_sites_with_mvc_5",
            "publishDate":"2016-11-12T00:00:00.000Z"
        },
        "blog":{
            "title":"Blog",
            "route":"/blog"
        },
        "projects":{
            "title":"Projects",
            "route":"/projects"
        },
        "index": {
            "title":"",
            route:""
        }
    },
    aroundTheWeb: [
        {
            title:"GitHub",
            url:"https://github.com/alonbardavid"
        },
        {
            title:"Twitter",
            url:"https://twitter.com/alonbardavid"
        },
        {
            title:"Stackoverflow",
            url:"https://stackoverflow.com/users/1764456/alon-bar-david"
        }
    ],
    projects: [
        {
            title:"Visor",
            description:"Authentication and Authorization framework for angular.js",
            url:"https://github.com/alonbardavid/visor"
        },
        {
            title:"angular-nested-include",
            description:"Call onload after nested ng-include templates finished compiling",
            url:"https://github.com/alonbardavid/angular-nested-include"
        },
        {
            title:"Lograp",
            description:"Logging wrapper for Winston that automatically adds time and call path"
        },
        {
            title:"Moonshine",
            description:"Work in progress web framework for node.js",
            url:"https://github.com/alonbardavid/moonshine"
        }
    ]
}
