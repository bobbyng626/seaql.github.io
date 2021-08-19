(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7233],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9210:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],u={},c="Raw SQL",l={unversionedId:"basic-crud/raw-sql",id:"basic-crud/raw-sql",isDocsHomePage:!1,title:"Raw SQL",description:"Query by raw SQL",source:"@site/docs/04-basic-crud/07-raw-sql.md",sourceDirName:"04-basic-crud",slug:"/basic-crud/raw-sql",permalink:"/SeaORM/docs/basic-crud/raw-sql",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/04-basic-crud/07-raw-sql.md",version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1628662378,formattedLastUpdatedAt:"8/11/2021",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/SeaORM/docs/basic-crud/json"},next:{title:"One to One",permalink:"/SeaORM/docs/relation/one-to-one"}},s=[{value:"Query by raw SQL",id:"query-by-raw-sql",children:[]},{value:"Get raw SQL query",id:"get-raw-sql-query",children:[]},{value:"Use Raw Query &amp; Execute Interface",id:"use-raw-query--execute-interface",children:[{value:"Get Custom Result using <code>query_one</code> and <code>query_all</code> methods",id:"get-custom-result-using-query_one-and-query_all-methods",children:[]},{value:"Execute Query using <code>execute</code> method",id:"execute-query-using-execute-method",children:[]}]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raw-sql"},"Raw SQL"),(0,i.kt)("h2",{id:"query-by-raw-sql"},"Query by raw SQL"),(0,i.kt)("p",null,"You can select ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," from raw query, with appropriate syntax for binding parameters, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," for MySQL and SQLite, and ",(0,i.kt)("inlineCode",{parentName:"p"},"$N")," for Postgres."),(0,i.kt)("p",null,"TODO: to select into a custom model using ",(0,i.kt)("inlineCode",{parentName:"p"},"into_model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = cake::Entity::find().from_raw_sql(\n    Statement::from_sql_and_values(\n        DbBackend::Postgres, r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#, vec![1.into()]\n    )\n).one(&db).await?;\n')),(0,i.kt)("h2",{id:"get-raw-sql-query"},"Get raw SQL query"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"to_string")," methods on any CRUD operations to get the database specific raw SQL for debugging purpose."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::DatabaseBackend;\n\nassert_eq!(\n    cake_filling::Entity::find_by_id((6, 8))\n        .build(DatabaseBackend::MySql)\n        .to_string(),\n    vec![\n        "SELECT `cake_filling`.`cake_id`, `cake_filling`.`filling_id` FROM `cake_filling`",\n        "WHERE `cake_filling`.`cake_id` = 6 AND `cake_filling`.`filling_id` = 8",\n    ].join(" ")\n);\n')),(0,i.kt)("h2",{id:"use-raw-query--execute-interface"},"Use Raw Query & Execute Interface"),(0,i.kt)("p",null,"You can build SQL statement using ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-query")," and query / execute it directly on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseConnection")," interface inside SeaORM."),(0,i.kt)("h3",{id:"get-custom-result-using-query_one-and-query_all-methods"},"Get Custom Result using ",(0,i.kt)("inlineCode",{parentName:"h3"},"query_one")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"query_all")," methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"")),(0,i.kt)("h3",{id:"execute-query-using-execute-method"},"Execute Query using ",(0,i.kt)("inlineCode",{parentName:"h3"},"execute")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"")))}p.isMDXComponent=!0}}]);