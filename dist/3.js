(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(7),o=n(14),a=l.createStore(o.default);t.default=a},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(7),o=n(15);t.default=l.combineReducers({user:o.default})},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=0,t)=>{switch(t.type){case"INCREMENT":return e+1;default:return e}}},3:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return f})),n.d(t,"mount",(function(){return m})),n.d(t,"unmount",(function(){return p}));var l=n(5),o=n.n(l),a=n(16),r=n.n(a),i=n(35),c=n.n(i),s=n(36),u=n.n(s);var d=c()({React:o.a,ReactDOM:r.a,rootComponent:u.a,domElementGetter:function(){return document.getElementById("microservice-app-react")}}),f=[d.bootstrap],m=[d.mount],p=[d.unmount]},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(5),o=n(51),a=n(13),r=n(18),i=n(44),c=r.createGlobalStyle`
  body{
    box-sizing: border-box;
    background-color: #0e2439;
    font-family: "Source Sans Pro","Helvetica Neue",Helvetica,sans-serif;
    font-size: 14px;
  }
`;t.default=()=>l.createElement(o.Provider,{store:a.default},l.createElement(c,null),l.createElement(i.default,null))},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(5),o=n(22),a=n(48),r=n(50);t.default=()=>l.createElement(o.BrowserRouter,null,l.createElement(o.Switch,null,l.createElement(o.Route,{exact:!0,path:"/",component:a.default}),l.createElement(o.Route,{exact:!0,path:"/detail",component:r.default})))},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(5),o=n(18),a=n(49),r=o.default.div`
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    margin-block-start: 15em;
`;t.default=()=>l.createElement(r,null,l.createElement(a.default,null))},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(5),o=n(18),a=n(22),r=o.default.ol`
    padding: 0px 0 40px;
    list-style: none;
`,i=o.default.li`
    align-items: center;
    display: flex;
    position: relative;

    &:not(:first-child){
        margin-top: 16px;
    }
`,c=o.default.div`
    height: 44px;
    width: 44px;
    margin: 0 3px
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    transition: all .1s;

    &:hover i{
        color: #e6375a;
    }
`,s=o.default.i`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #9cb3c9;
    margin-bottom: 5px;
    
`,u=o.default.span`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #9cb3c9;
`,d=o.default(a.Link)`
    width: calc(100% - 44px - 8px - 16px);
    color: #9cb3c9;
    align-items: flex-start;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    text-align: left;
    display: block;

    &:hover > div{
        cursor: pointer;
    }
    &:hover > div:nth-child(1) {
        color: #e6375a;
    }
    &:hover > div:nth-child(2){
        color: #9cb3c9;
    }
`,f=o.default.div`
    color: #9cb3c9;
    font-size: 17px;
    padding: 5px 0;
    transition: color 180ms;
    flex: 0 0 auto;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: now
`,m=o.default.div`
    font-size: 15px;
    color: #63809c;
    margin-top: 1px;
    transition: color 180ms;
    flex: 0 0 auto;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;t.default=()=>l.createElement(r,null,l.createElement(i,null,l.createElement(c,null,l.createElement(s,{className:"fas fa-thumbs-up"}),l.createElement(u,null,"10")),l.createElement(d,{to:"#"},l.createElement(f,null,"Got our first paying customers!"),l.createElement(m,null,'Hey everyone! This is Allen from Stagelight.io, a company that\'s providing a "demo as a service" for SaaS websites and products. In the points below,'))),l.createElement(i,null,l.createElement(c,null,l.createElement(s,{className:"fas fa-thumbs-up"}),l.createElement(u,null,"10")),l.createElement(d,{to:"#"},l.createElement(f,null,"Got our first paying customers!"),l.createElement(m,null,'Hey everyone! This is Allen from Stagelight.io, a company that\'s providing a "demo as a service" for SaaS websites and products. In the points below,'))),l.createElement(i,null,l.createElement(c,null,l.createElement(s,{className:"fas fa-thumbs-up"}),l.createElement(u,null,"10")),l.createElement(d,{to:"#"},l.createElement(f,null,"Got our first paying customers!"),l.createElement(m,null,'Hey everyone! This is Allen from Stagelight.io, a company that\'s providing a "demo as a service" for SaaS websites and products. In the points below,'))),l.createElement(i,null,l.createElement(c,null,l.createElement(s,{className:"fas fa-thumbs-up"}),l.createElement(u,null,"10")),l.createElement(d,{to:"#"},l.createElement(f,null,"Got our first paying customers!"),l.createElement(m,null,'Hey everyone! This is Allen from Stagelight.io, a company that\'s providing a "demo as a service" for SaaS websites and products. In the points below,'))))},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(5);t.default=()=>l.createElement("p",null,"Detail Page")}}]);
//# sourceMappingURL=3.js.map