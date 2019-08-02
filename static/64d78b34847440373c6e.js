/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){},149:function(t,e,n){},150:function(t,e,n){},151:function(t,e,n){"use strict";var c=n(143);n.n(c).a},152:function(t,e,n){"use strict";var c=n(144);n.n(c).a},153:function(t,e,n){t.exports=n.p+"img/129776a.jpg"},154:function(t,e,n){t.exports=n.p+"img/64fc981.jpg"},155:function(t,e,n){"use strict";var c=n(145);n.n(c).a},156:function(t,e,n){"use strict";var c=n(146);n.n(c).a},157:function(t,e,n){"use strict";var c=n(147);n.n(c).a},158:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c,l=(c=n(159))&&"object"==typeof c&&"default"in c?c.default:c,r={name:"vue-tabs",props:{activeTabColor:String,activeTextColor:String,disabledColor:String,disabledTextColor:String,textPosition:{type:String,default:"center"},type:{type:String,default:"tabs"},direction:{type:String,default:"horizontal"},centered:Boolean,value:[String,Number,Object]},data:function(){return{activeTabIndex:0,tabs:[]}},computed:{isTabShape:function(){return"tabs"===this.type},isStacked:function(){return"vertical"===this.direction},classList:function(){return"nav "+(this.isTabShape?"nav-tabs":"nav-pills")+" "+(this.centered?"nav-justified":"")+" "+(this.isStacked?"nav-stacked":"")},stackedClass:function(){return this.isStacked?"stacked":""},activeTabStyle:function(){return{backgroundColor:this.activeTabColor,color:this.activeTextColor}}},methods:{navigateToTab:function(t,e){this.changeTab(this.activeTabIndex,t,e)},activateTab:function(t){this.activeTabIndex=t;var e=this.tabs[t];e.active=!0,this.$emit("input",e.title)},changeTab:function(t,e,n){var c=this.tabs[t]||{},l=this.tabs[e];l.disabled||(this.activeTabIndex=e,c.active=!1,l.active=!0,this.$emit("input",this.tabs[e].title),this.$emit("tab-change",e,l,c),this.tryChangeRoute(n))},tryChangeRoute:function(t){this.$router&&t&&this.$router.push(t)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);this.tabs.splice(e,0,t)},removeTab:function(t){var e=this.tabs,n=e.indexOf(t);n>-1&&e.splice(n,1)},getTabs:function(){return this.$slots.default?this.$slots.default.filter(function(t){return t.componentOptions}):[]},findTabAndActivate:function(t){var e=this.tabs.findIndex(function(e,n){return e.title===t||n===t});e!==this.activeTabIndex&&(-1!==e?this.changeTab(this.activeTabIndex,e):this.changeTab(this.activeTabIndex,0))},renderTabTitle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n=this.$createElement;if(0!==this.tabs.length){var c=this.tabs[t],l=c.active,title=c.title,r={color:this.activeTabColor};"center"===e&&(r.color=this.activeTextColor);var o=n("span",{class:"title title_"+e,style:l?r:{}},["center"===e&&this.renderIcon(t),title]);return c.$slots.title?c.$slots.title:c.$scopedSlots.title?c.$scopedSlots.title({active:l,title:title,position:e,icon:c.icon,data:c.tabData}):o}},renderIcon:function(t){var e=this.$createElement;if(0!==this.tabs.length){var n=this.tabs[t],c=n.icon,l=e("i",{class:c},[" "]);return!n.$slots.title&&c?l:void 0}},tabStyles:function(t){return t.disabled?{backgroundColor:this.disabledColor,color:this.disabledTextColor}:{}},renderTabs:function(){var t=this,e=this.$createElement;return this.tabs.map(function(n,c){if(n){var r=n.route,title=(n.id,n.title),o=(n.icon,n.tabId),d=t.activeTabIndex===c;return e("li",l([{attrs:{name:"tab",id:"t-"+o,"aria-selected":d,"aria-controls":"p-"+o,role:"tab"},class:["tab",{active:d},{disabled:n.disabled}],key:title},{on:{click:function(e){for(var l=arguments.length,o=Array(l>1?l-1:0),d=1;d<l;d++)o[d-1]=arguments[d];(function(){return!n.disabled&&t.navigateToTab(c,r)}).apply(void 0,[e].concat(o))}}}]),["top"===t.textPosition&&t.renderTabTitle(c,t.textPosition),e("a",l([{attrs:{href:"#",role:"tab"},style:d?t.activeTabStyle:t.tabStyles(n),class:[{active_tab:d},"tabs__link"]},{on:{click:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),c=1;c<e;c++)n[c-1]=arguments[c];(function(t){return t.preventDefault(),!1}).apply(void 0,[t].concat(n))}}}]),["center"!==t.textPosition&&!n.$slots.title&&t.renderIcon(c),"center"===t.textPosition&&t.renderTabTitle(c,t.textPosition)]),"bottom"===t.textPosition&&t.renderTabTitle(c,t.textPosition)])}})}},render:function(){var t=arguments[0],e=this.renderTabs();return t("div",{class:["vue-tabs",this.stackedClass]},[t("div",{class:[{"nav-tabs-navigation":!this.isStacked},{"left-vertical-tabs":this.isStacked}]},[t("div",{class:["nav-tabs-wrapper",this.stackedClass]},[t("ul",{class:this.classList,attrs:{role:"tablist"}},[e])])]),t("div",{class:["tab-content",{"right-text-tabs":this.isStacked}]},[this.$slots.default])])},watch:{tabs:function(t){t.length>0&&!this.value&&(t.length<=this.activeTabIndex?this.activateTab(this.activeTabIndex-1):this.activateTab(this.activeTabIndex)),t.length>0&&this.value&&this.findTabAndActivate(this.value)},value:function(t){this.findTabAndActivate(t)}}},o={name:"v-tab",props:{title:{type:String,default:""},icon:{type:String,default:""},tabData:{default:null},beforeChange:{type:Function},id:String,route:{type:[String,Object]},disabled:Boolean,transitionName:String,transitionMode:String},computed:{isValidParent:function(){return"vue-tabs"===this.$parent.$options.name},hash:function(){return"#"+this.id},tabId:function(){return this.id?this.id:this.title}},data:function(){return{active:!1,validationError:null}},mounted:function(){this.$parent.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.$parent.removeTab(this)},render:function(){return(0,arguments[0])("section",{class:"tab-container",attrs:{id:"p-"+this.tabId,"aria-labelledby":"t-"+this.tabId,role:"tabpanel"},directives:[{name:"show",value:this.active}]},[this.$slots.default])}},d={install:function(t){t.component("vue-tabs",r),t.component("v-tab",o)}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(d),window.VueTabs=d),e.default=d,e.VueTabs=r,e.VTab=o},159:function(t,e){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function c(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce(function(a,b){var t,e,l,r,o;for(l in b)if(t=a[l],e=b[l],t&&n.test(l))if("class"===l&&("string"==typeof t&&(o=t,a[l]=t={},t[o]=!0),"string"==typeof e&&(o=e,b[l]=e={},e[o]=!0)),"on"===l||"nativeOn"===l||"hook"===l)for(r in e)t[r]=c(t[r],e[r]);else if(Array.isArray(t))a[l]=t.concat(e);else if(Array.isArray(e))a[l]=[t].concat(e);else for(r in e)t[r]=e[r];else a[l]=b[l];return a},{})}},160:function(t,e,n){},161:function(t,e,n){"use strict";var c=n(148);n.n(c).a},162:function(t,e,n){"use strict";var c=n(149);n.n(c).a},163:function(t,e,n){"use strict";var c=n(150);n.n(c).a},164:function(t,e,n){"use strict";n.r(e);var c={name:"navbar-top",data:function(){return{lastKnownScrollPosition:0,ticking:!1,isNavbarOpen:!1}},methods:{handleScroll:function(){var t=this.$refs["c-navbar-top"];window.scrollY>100?t.classList.add("c-navbar-top--has-background"):t.classList.remove("c-navbar-top--has-background")},toggleNavbar:function(){this.isNavbarOpen=!this.isNavbarOpen},throttleScrollHandling:function(){var t=this;this.lastKnownScrollPosition=window.scrollY,this.ticking||window.requestAnimationFrame(function(){t.handleScroll(),t.ticking=!1}),this.ticking=!0}},created:function(){window.addEventListener("scroll",this.throttleScrollHandling)},mounted:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.throttleScrollHandling)}},l=(n(151),n(17)),r=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{ref:"c-navbar-top",staticClass:"navbar is-dark c-navbar-top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"},{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"navbar-item",staticStyle:{"background-color":"rgb(23, 38, 43)"},attrs:{href:"#home_page"}},[n("p",{staticClass:"is-size-12 has-text-white text-logo"},[t._v("velaso")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isNavbarOpen},on:{click:t.toggleNavbar}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])]),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isNavbarOpen}},[n("div",{staticClass:"navbar-end"},[n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"},{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"navbar-item is-uppercase has-background-link text-shadow",attrs:{href:"#promotions"}},[t._v("Акции")]),t._v(" "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"},{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"navbar-item is-uppercase ",attrs:{href:"#ceilings"}},[t._v("Натяжные потолки")]),t._v(" "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"},{name:"scroll-spy",rawName:"v-scroll-spy"}],staticClass:"navbar-item is-uppercase",attrs:{href:"#conditioners"}},[t._v("Монтаж кондиционеров")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",staticStyle:{"background-color":"rgb(23, 38, 43)"},attrs:{href:"tel:+79026069700"}},[e("p",{staticClass:"is-7 has-text-primary"},[this._v("\n            +7 902 606-97-00\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",staticStyle:{"background-color":"rgb(23, 38, 43)"},attrs:{href:"tel:+79514508894"}},[e("p",{staticClass:"is-7 has-text-warning"},[this._v("\n            +7 951 450-88-94\n            ")])])}],!1,null,"5735545b",null).exports,o=(n(44),{$_veeValidate:{validator:"new"},name:"contact",data:function(){return{name:"",email:"",message:""}},methods:{cancel:function(){this.name="",this.email="",this.message=""}}}),d=(n(152),Object(l.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section is-medium",staticStyle:{"background-color":"#354856"},attrs:{id:"contact"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-spaced has-text-centered has-text-grey-lighter"},[this._v("Тут контакты итд")])])])])}],!1,null,"6441cab2",null).exports),m=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-fullheight",attrs:{id:"home_page"}},[e("div",{staticClass:"c-projects__showcase tile"},[e("div",{staticClass:"tile"},[e("a",{attrs:{href:"#ceilings"}},[e("figure",{staticClass:"c-projects__thumbnail image tile"},[e("img",{attrs:{src:n(153),alt:"Mendelable"}}),this._v(" "),e("figcaption",{staticClass:"has-text-centered"},[e("h2",{staticClass:"title"},[this._v("Натяжные потолки")])])])])]),this._v(" "),e("div",{staticClass:"tile"},[e("a",{attrs:{href:"#conditioners"}},[e("figure",{staticClass:"c-projects__thumbnail image tile"},[e("img",{attrs:{src:n(154),alt:"Freatle"}}),this._v(" "),e("figcaption",{staticClass:"has-text-centered"},[e("h2",{staticClass:"title"},[this._v("Монтаж кондиционеров и сплит систем")])])])])])])])}],v={name:"projects-showcase"},h=(n(155),Object(l.a)(v,function(){this.$createElement;this._self._c;return this._m(0)},m,!1,null,"24180428",null).exports),f={name:"item-ceil",props:["ceil"]},_=(n(156),Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card card-equal-height"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{attrs:{src:t.ceil.image,alt:"Image"}})])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.ceil.name))]),t._v(" "),t.ceil.id?n("div",[n("ul",t._l(t.ceil.id,function(e){return n("li",[n("p",{staticClass:"media-content"},[n("strong",[t._v(t._s(e[0]))]),e[1]?n("span",[t._v(": "+t._s(e[1]))]):t._e()])])}),0)]):t._e()])])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("div",{staticClass:"card-footer-item has-text-right"},[n("span",{domProps:{innerHTML:t._s(t.ceil.description)}})])])])},[],!1,null,"d9508bf6",null).exports),C={name:"item-ceil",props:["ceil"]},y=(n(157),Object(l.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-card card-equal-height",class:t.ceil.style},[n("div",{staticClass:"meta"},[n("div",{staticClass:"photo",style:{"background-image":"url("+t.ceil.image+")"}})]),t._v(" "),n("div",{staticClass:"description"},[n("h1",[t._v(t._s(t.ceil.title))]),t._v(" "),n("h2",[t._v(t._s(t.ceil.price))]),t._v(" "),n("p",[t._v(t._s(t.ceil.subtitle))])])])},[],!1,null,"07d23733",null).exports),x=n(158),S=(n(160),{name:"team",components:{ItemCeil:_,ItemCond:y,VueTabs:x.VueTabs,VTab:x.VTab},data:function(){return{ceilsService:[{title:"Ремонт",price:"от 1500 рублей.",image:"./images/ceilings/ceilservice1.jpg",style:"alt"},{title:"Слив воды",price:"от 1500 рублей.",image:"./images/ceilings/ceilservice2.jpg",style:""}],descriptions:["<strong>Б</strong>есплатный выезд замерщика.","<strong>М</strong>онтаж любой сложности, любых фактур полотен.","<strong>Б</strong>ыстрая установка без пыли и строительного мусора.","<strong>П</strong>олотно из экологичных материалов."],kitchen:[{id:[["Площадь","9 кв.м"],["Профиль","12м"],["Точечных светильников","6"],["Обработка углов","7"],["Обход трубы","1"]],name:"MSD зеленый глянец",image:"./images/ceilings/kitchen1.jpg",description:"<b>~ 4150 рублей</em>"},{id:[["Площадь","8.5 кв.м"],["Профиль","11м"],["Установка люстры","1"],["Обработка углов","4"],["Обход трубы","1"]],name:"MSD бежевый глянец",image:"./images/ceilings/kitchen2.jpg",description:"<b>~ 3650 рублей</em>"},{id:[["Площадь","7.5 кв.м"],["Профиль","10м"],["Установка люстры","1"],["Точечных светильников","3"],["Совмещение цветов","5"],["Обработка углов","4"],["Обход трубы","1"]],name:"MSD бежевый и белый глянец",image:"./images/ceilings/kitchen3.jpg",description:"<b>~ 8850 рублей</em>"}],bedroom:[{id:[["Площадь","10.5 кв.м"],["Профиль","15м"],["Крепление под люстру","1"],["Установка люстры","1"],["Обработка углов","4"],["Обход трубы","2"]],name:"MSD белый глянец",image:"./images/ceilings/bedroom1.jpg",description:"<b>~ 3950 рублей</em>"},{id:[["Площадь","15 кв.м"],["Профиль","16м"],["Обработка углов","4"],["Точечных светильников","8"]],name:"MSD белый глянец",image:"./images/ceilings/bedroom2.jpg",description:"<b>~ 5400 рублей</em>"},{id:[["Площадь","14 кв.м"],["Профиль","15м"],["Обработка углов","4"],["Точечных светильников","8"]],name:"MSD сатин фотопечать",image:"./images/ceilings/bedroom3.jpg",description:"<b>~ 12999 рублей</em>"}],corridor:[{id:[["Площадь","5.5 кв.м"],["Профиль","9м"],["Точечных светильников","4"],["Обработка углов","4"]],name:"MSD белый глянец",image:"./images/ceilings/corridor1.jpg",description:"<b>~ 3500 рублей</em>"},{id:[["Площадь","5 кв.м"],["Профиль","8м"],["Точечных светильников","5"],["Обработка углов","4"]],name:"MSD белый глянец",image:"./images/ceilings/corridor2.jpg",description:"<b>~ 3600 рублей</em>"},{id:[["Площадь","7.5 кв.м"],["Профиль","28м"],["Светодиодная лента","15м"],["Обработка углов","6"]],name:"Резной потолок + фотопечать",image:"./images/ceilings/corridor3.jpg",description:"<b>~ 14000 рублей</em>"}],balcony:[{id:[["Площадь","5 кв.м"],["Профиль","12м"],["Люстр","2"],["Обработка углов","4"]],name:"MSD белый глянец",image:"./images/ceilings/balcony1.jpg",description:"<b>~ 2899 рублей</em>"},{id:[["Площадь","6 кв.м"],["Профиль","14м"],["Люстр","6"],["Обработка углов","4"]],name:"MSD белый глянец",image:"./images/ceilings/balcony2.jpg",description:"<b>~ 3350 рублей</em>"}],bath:[{id:[["Площадь","5 кв.м"],["Профиль","8м"],["Точечных светильников","6"],["Обработка углов","6"]],name:"MSD белый глянец",image:"./images/ceilings/bath1.jpg",description:"<b>~ 3400 рублей</em>"},{id:[["Площадь","4.5 кв.м"],["Профиль","9м"],["Точечных светильников","4"],["Обработка углов","6"]],name:"MSD белый глянец",image:"./images/ceilings/bath2.jpg",description:"<b>~ 3150 рублей</em>"},{id:[["Площадь","4 кв.м"],["Профиль","8м"],["Точечных светильников","4"],["Обработка углов","4"]],name:"MSD белый глянец",image:"./images/ceilings/bath3.jpg",description:"<b>~ 3100 рублей</em>"}],livingRoom:[{id:[["Площадь","16 кв.м"],["Профиль","17м"],["Крепление под люстру","1"],["Установка люстры","1"],["Обработка углов","4"],["Обход трубы","1"]],name:"MSD белый глянец",image:"./images/ceilings/livroom1.jpg",description:"<b>~ 4250 рублей</em>"},{id:[["Площадь","18 кв.м"],["Профиль","17м"],["Крепление под люстру","1"],["Установка люстры","1"],["Обработка углов","4"],["Потайная гардина","3м"]],name:"MSD белый глянец",image:"./images/ceilings/livroom2.jpg",description:"<b>~ 5399 рублей</em>"},{id:[["Площадь","17 кв.м"],["Профиль","20м"],["Крепление под люстру","1"],["Установка люстры","1"],["Обработка углов","6"]],name:"MSD белый глянец",image:"./images/ceilings/livroom3.jpg",description:"<b>~ 5600 рублей</em>"}],gardines:[{name:"Гардина на базовом потолке",image:"./images/ceilings/gard1.jpg"},{name:"Гардина на базовом потолке (торцевание)",image:"./images/ceilings/gard2.jpg"},{name:"Гардина на натяжном потолке",image:"./images/ceilings/gard3.jpg"}],ceilsBig:[{id:[["Площадь","19 кв.м"],["Обработано углов","4"],["Точечных светильников","10"],["Люстры","2"]],name:"Глянцевый",image:"./images/ceilings/ceil9.jpg",description:"<b>от 7500 рублей</em>"},{id:[["Площадь","17 кв.м"]],name:"Матовый",image:"./images/ceilings/ceiling12.jpg",description:"<b>(!) 3999 рублей</em>"},{id:[["Площадь","17 кв.м"],["Обработано углов","4"],["Люстра"],["Ниша под гардину"]],name:"Сатиновый",image:"./images/ceilings/ceiling3.jpg",description:"<b>от 4800 рублей</em>"}],ceilsMin:[{name:"Двухуровневый",avatar:"https://avatars2.githubusercontent.com/u/3439246?v=4&s=460",image:"./images/ceilings/ceiling4.jpg",description:"<b>от 10000 рублей</em>"},{name:"Парящий",image:"./images/ceilings/ceiling15.jpg",description:"<b>от 10000 рублей</em>"},{name:"Фотопечать",image:"./images/ceilings/ceiling16.jpg",description:"<b>от 11000 рублей</em>"},{name:"Звездное небо",image:"./images/ceilings/ceiling17.jpg",description:"<b>от 22000 рублей</em>"}]}},mounted:function(){this.ceilsBig.sort(function(){return.5-Math.random()}),this.ceilsMin.sort(function(){return.5-Math.random()})}}),w=(n(161),Object(l.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ceilings",attrs:{id:"ceilings"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"text-shadow title is-uppercase has-text-centered",staticStyle:{color:"white"}},[t._v("Натяжные потолки")]),t._v(" "),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-four-fifths"},[n("div",{staticClass:"card-description"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("ul",[n("li",[n("p",{staticClass:"media-content has-text-centered",domProps:{innerHTML:t._s(t.descriptions[0])}}),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"media-content has-text-centered",domProps:{innerHTML:t._s(t.descriptions[1])}}),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"media-content has-text-centered",domProps:{innerHTML:t._s(t.descriptions[2])}}),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"media-content has-text-centered",domProps:{innerHTML:t._s(t.descriptions[3])}})])])])])])])]),t._v(" "),t._m(0),t._v(" "),n("vue-tabs",{attrs:{centered:""}},[n("v-tab",{attrs:{title:"Популярное"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.ceilsBig,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0),t._v(" "),n("div",{staticClass:"columns is-multiline"},t._l(t.ceilsMin,function(t){return n("div",{staticClass:"column is-one-quarter-desktop is-half-tablet"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Зал"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.livingRoom,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Спальня"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.bedroom,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Кухня"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.kitchen,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Коридор"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.corridor,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Ванна"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.bath,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Балкон"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.balcony,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)]),t._v(" "),n("v-tab",{attrs:{title:"Виды гардин"}},[n("div",{staticClass:"columns is-multiline is-centered is-one-quarter-desktop is-half-tablet"},t._l(t.gardines,function(t){return n("div",{staticClass:"column"},[n("item-ceil",{attrs:{ceil:t}})],1)}),0)])],1),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"columns is-mobile is-multiline"},[n("div",{staticClass:"column is-half-desktop is-half-mobile is-half-tablet"},[n("item-cond",{attrs:{ceil:t.ceilsService[0]}})],1),t._v(" "),n("div",{staticClass:"column is-half-desktop is-half-mobile is-half-tablet"},[n("item-cond",{attrs:{ceil:t.ceilsService[1]}})],1)]),t._v(" "),t._m(2)],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"text-shadow subtitle is-uppercase has-text-centered",staticStyle:{color:"white"}},[this._v("Примеры работ:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"text-shadow subtitle is-uppercase has-text-centered",staticStyle:{color:"white"}},[this._v("Обслуживание:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"tel:+79026069700"}},[e("h2",{staticClass:"text-shadow title has-text-primary has-text-centered"},[this._v("Возникли вопросы?"),e("br"),this._v("Cвяжитесь с нами:"),e("br"),this._v("+7 902 606-97-00")])])])}],!1,null,null,null).exports),T={name:"team",components:{ItemCond:y},data:function(){return{ceilsService:[{title:"Установка",price:"от 4500р.",image:"./images/conditioners/conditioner5.jpg",style:"alt"},{title:"Заправка и обслуживание",price:"от 1500р.",image:"./images/conditioners/conditioner6.jpg",style:""}],ceils:[{title:"Монтаж и обслуживание ",subtitle:"кондиционеров, сплит-систем любой сложности, в соответствии с проектным дизайном зданий.",image:"./images/conditioners/fasad.jpg",style:"alt"},{title:"Опыт",subtitle:"долгосрочного сотрудничества с крупными заказчиками и торговыми сетями.",image:"./images/conditioners/big.jpg",style:""},{title:"Сотрудничество",subtitle:"с производителями и официальными дилерскими центрами. ",image:"./images/conditioners/conditioner2.jpg",style:"alt"},{title:"Поможем",subtitle:"в поиске и выборе кондиционеров по выгодным вам условиям.",image:"./images/conditioners/conditioner4.jpg",style:""}]}}},j=Object(l.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticStyle:{"background-color":"#B4C0CC"},attrs:{id:"conditioners"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"title is-uppercase has-text-centered",staticStyle:{color:"black"}},[t._v("Монтаж кондиционеров и сплит систем")]),t._v(" "),n("div",{staticClass:"columns is-mobile is-multiline"},[n("div",{staticClass:"column is-half-desktop is-half-tablet"},[n("item-cond",{attrs:{ceil:t.ceilsService[0]}})],1),t._v(" "),n("div",{staticClass:"column is-half-desktop is-half-tablet"},[n("item-cond",{attrs:{ceil:t.ceilsService[1]}})],1)]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("item-cond",{attrs:{ceil:t.ceils[0]}})],1),t._v(" "),n("div",{staticClass:"column"},[n("item-cond",{attrs:{ceil:t.ceils[1]}})],1)]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("item-cond",{attrs:{ceil:t.ceils[2]}})],1),t._v(" "),n("div",{staticClass:"column"},[n("item-cond",{attrs:{ceil:t.ceils[3]}})],1)]),t._v(" "),t._m(1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"subtitle is-uppercase has-text-centered",staticStyle:{color:"white"}},[this._v("О нас:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"tel:+79514508894"}},[e("h2",{staticClass:"text-shadow title has-text-warning has-text-centered"},[this._v("Возникли вопросы?"),e("br"),this._v("Cвяжитесь с нами:"),e("br"),this._v("+7 951 450-88-94")])])])}],!1,null,null,null).exports,k={name:"item-ceil",props:["ceil"]},$=(n(162),Object(l.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blog-card",class:t.ceil.style},[n("div",{staticClass:"meta"},[n("div",{staticClass:"photo",style:{"background-image":"url("+t.ceil.image+")"}})]),t._v(" "),n("div",{staticClass:"description"},[n("h1",[t._v(t._s(t.ceil.title))]),t._v(" "),n("h2",[t._v(t._s(t.ceil.subtitle))])])])])},[],!1,null,"66f37f3f",null).exports),E=(n(90),{components:{ItemPromo:$},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},ceils:[{title:"ШОК ЦЕНА! Потолок 18кв - 3999 рублей",image:"./images/promo/lowprice.jpg",style:"alt"},{title:"Скидка пенсионерам 10%",image:"./images/promo/promo1.jpg",style:"alt"},{title:"Светильники GX-53 в подарок",image:"./images/promo/promo2.png",style:""},{title:"Потолок в подарок",subtitle:"При заказе потолков от 25 кв.м, до 5 кв.м в подарок.",image:"./images/promo/promo3.jpg",style:"alt"}]}}}),M=(n(163),{name:"team",components:{PromotionSlider:Object(l.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{attrs:{options:t.swiperOption}},[n("swiper-slide",[n("item-promo",{attrs:{ceil:t.ceils[0]}})],1),t._v(" "),n("swiper-slide",[n("item-promo",{attrs:{ceil:t.ceils[1]}})],1),t._v(" "),n("swiper-slide",[n("item-promo",{attrs:{ceil:t.ceils[2]}})],1),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)},[],!1,null,"0a14fe26",null).exports},data:function(){return{}}}),O={components:{Ceilings:w,Conditioners:j,ProjectsShowcase:h,Contact:d,NavbarTop:r,Promotions:Object(l.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",staticStyle:{"background-color":"#354856"},attrs:{id:"promotions"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-uppercase has-text-centered",staticStyle:{color:"white"}},[this._v("Акции")]),this._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-four-fifths"},[e("promotion-slider")],1)])])])},[],!1,null,null,null).exports}},I=Object(l.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navbar-top"),this._v(" "),e("projects-showcase"),this._v(" "),e("promotions"),this._v(" "),e("ceilings"),this._v(" "),e("conditioners"),this._v(" "),this._m(0)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer",staticStyle:{"background-color":"#354856"}},[e("div",{staticClass:"content has-text-centered"},[e("p",{staticClass:"has-text-warning text-shadow"},[this._v("velaso.ru")]),this._v(" "),e("p",{staticClass:"has-text-white text-shadow"},[this._v("\n          Монтаж, установка, обслуживание, ремонт: кондиционеров, сплит-систем, натяжных потолков.\n          "),e("br"),this._v("Гарантия качества.\n        ")])])])}],!1,null,null,null);e.default=I.exports}}]);