(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4195],{5880:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(7294),l=n(9349),r=n(6742),i=n(2263),c="heroBanner_1ZBZ",o="buttons_irzW",m=n(2122),s=n(6010),d="features_pzNA",u=n(4098),p=[{title:"Async",icon:a.createElement(u.V5G,{size:26}),description:a.createElement(a.Fragment,null,"Relying on SQLx, SeaORM is a new library with async support from day 1.")},{title:"Dynamic",icon:a.createElement(u.Ktg,{size:26}),description:a.createElement(a.Fragment,null,"Built upon SeaQuery, SeaORM allows you to build complex queries without 'fighting the ORM'.")},{title:"Testable",icon:a.createElement(u.ZSR,{size:26}),description:a.createElement(a.Fragment,null,"Use mock connections to write unit tests for your logic.")},{title:"Service Oriented",icon:a.createElement(u.x_i,{size:26}),description:a.createElement(a.Fragment,null,"Quickly build services that join, filter, sort and paginate data in APIs.")}];function E(e){var t=e.icon,n=e.title,l=e.description;return a.createElement("div",{className:(0,s.Z)("col col--6")},a.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px"}},a.createElement("div",{style:{display:"flex"}},a.createElement("div",{style:{paddingRight:"22px"}},t),a.createElement("h3",{style:{fontSize:"20px"}},n)),a.createElement("p",null,l)))}function f(){return a.createElement("section",{className:(0,s.Z)("home-section","home-section-alt",d)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--11 col--offset-1"},a.createElement("div",{className:"row"},p.map((function(e,t){return a.createElement(E,(0,m.Z)({key:t},e))})))))))}var g="features_33En",y="table_3qoy";function v(){return a.createElement("section",{className:(0,s.Z)("home-section",g)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:(0,s.Z)("col col--12")},a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h2",null,"Comparison with Diesel")))),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,s.Z)("col col--6 col--offset-5")},a.createElement("table",{className:y},a.createElement("tr",null,a.createElement("th",null,"Diesel"),a.createElement("th",null,"SeaORM")),a.createElement("tr",null,a.createElement("td",null,"Sync"),a.createElement("td",null,"Async")),a.createElement("tr",null,a.createElement("td",null,"Static"),a.createElement("td",null,"Dynamic")),a.createElement("tr",null,a.createElement("td",null,"Native Driver"),a.createElement("td",null,"Pure Rust")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"Relational")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"Schema first")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"With Cli tools")))))))}var h=n(1395),w=n(8215),b=n(4544),N=n(5350),_=n(7410);(void 0!==n.g?n.g:window).Prism=_.Z,n(767);var k=[{title:"Select",code:'// find all models\nlet cakes: Vec<cake::Model> = Cake::find().all(db).await?;\n\n// find and filter\nlet chocolate: Vec<cake::Model> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .all(db)\n    .await?;\n\n// find one model\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\nlet cheese: cake::Model = cheese.unwrap();\n\n// find related models (lazy)\nlet fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;\n\n// find related models (eager)\nlet cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;'},{title:"Insert",code:'let apple = fruit::ActiveModel {\n    name: Set("Apple".to_owned()),\n    ..Default::default() // no need to set primary key\n};\n \nlet pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default()\n};\n \n// insert one\nlet res: InsertResult = Fruit::insert(pear).exec(db).await?;\n \nprintln!("InsertResult: {}", res.last_insert_id);\n \n// insert many\nFruit::insert_many(vec![apple, pear]).exec(db).await?;'},{title:"Update",code:'use sea_orm::sea_query::{Expr, Value};\n\nlet pear: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\n \nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\npear.name = Set("Sweet pear".to_owned());\n \n// update one\nlet pear: fruit::ActiveModel = Fruit::update(pear).exec(db).await?;\n \n// update many: UPDATE "fruit" SET "cake_id" = NULL WHERE "fruit"."name" LIKE \'%Apple%\'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(Value::Null))\n    .filter(fruit::Column::Name.contains("Apple"))\n    .exec(db)\n    .await?;'},{title:"Save",code:'let banana = fruit::ActiveModel {\n    id: Unset(None),\n    name: Set("Banana".to_owned()),\n    ..Default::default()\n};\n\n// create, because primary key `id` is `Unset`\nlet mut banana = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// update, because primary key `id` is `Set`\nlet banana = banana.save(db).await?;'},{title:"Delete",code:'let orange: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet orange: fruit::ActiveModel = orange.unwrap().into();\n\n// delete one\nfruit::Entity::delete(orange).exec(db).await?;\n// or simply\norange.delete(db).await?;\n\n// delete many: DELETE FROM "fruit" WHERE "fruit"."name" LIKE \'Orange\'\nfruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains("Orange"))\n    .exec(db)\n    .await?;'}];function S(){var e=(0,i.Z)().siteConfig.themeConfig.prism,t=(0,N.Z)().isDarkTheme,n=t?e.darkTheme:e.theme;return a.createElement("section",{className:(0,s.Z)("home-section","home-section-alt",g)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:(0,s.Z)("col col--12")},a.createElement("div",{className:"padding-horiz--md"},a.createElement("h2",{className:"text--center"},"A quick taste of SeaORM"),a.createElement(h.Z,{className:(0,s.Z)("aa"),defaultValue:k[0].title,values:k.map((function(e){var t=e.title;e.code;return{label:t,value:t}}))},k.map((function(e,l){var r=e.title,i=e.code;return a.createElement(w.Z,{key:l,value:r},a.createElement(b.ZP,(0,m.Z)({},b.lG,{code:i,theme:n,language:"rust"}),(function(e){var n=e.className,l=e.tokens,r=e.getLineProps,i=e.getTokenProps;return a.createElement("pre",{className:""+n,style:{backgroundColor:t?"#111":"#fff"}},l.map((function(e,t){return a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return a.createElement("span",i({token:e,key:t}))})))})))})))}))))))))}function M(){var e=(0,i.Z)().siteConfig;return a.createElement("header",{className:c},a.createElement("style",null,"\n      @media only screen and (max-width: 480px) {\n        #homepageBanner {\n          display: none;\n        }\n      }\n      @media only screen and (min-width: 481px) {\n        #homepageLogo {\n          display: none;\n        }\n      }\n      "),a.createElement("div",{className:"container"},a.createElement("img",{id:"homepageLogo",width:"90%",src:"/SeaORM/img/SeaORM logo.png"}),a.createElement("img",{id:"homepageBanner",width:"90%",src:"/SeaORM/img/SeaORM banner.png"}),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:o},a.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/index"},"Getting Started"))))}function x(){(0,i.Z)().siteConfig;return a.createElement(l.Z,{description:"\ud83d\udc1a An async & dynamic ORM for Rust"},a.createElement(M,null),a.createElement("main",null,a.createElement(f,null),a.createElement(v,null),a.createElement(S,null)))}}}]);