(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(68)},45:function(e,a,t){},64:function(e){e.exports={brands:[{id:1,brand:"youtube"},{id:2,brand:"vimeo"},{id:3,brand:"metacafe"}]}},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(26),c=t.n(o),l=t(8),s=t(11),i=t(17),u=t(32),p=(t(45),t(3)),d=t(4),m=t(6),g=t(5),h=t(7),b=t(18),v=t(19),f=t.n(v),y=function(e){return r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-auto mr-auto ml-auto tile tile-hero-link border-all rounded"},r.a.createElement("a",{href:e.link||"#",className:"tile-link",target:e.target||"_blank"},r.a.createElement("div",{className:"tile-hero"},r.a.createElement("img",{src:e.src||"http://www.fillmurray.com/300/200",alt:e.title||"Content Unavailable"})),r.a.createElement("div",{className:"tile-info"},r.a.createElement("div",{className:"tile-title"},e.title||"Content Unavailable"),r.a.createElement("div",{className:"tile-details"},e.children||"Nothing to see here."))))},E=t(1),O=function(e,a,t){return t||(t=e.location.search),f.a.parse(t)[a]},j=function(e,a,t){var n=e.match.url,r=f.a.parse(e.location.search);return r[a]=t,"".concat(n,"?").concat(f.a.stringify(r))},N=function(e,a,t){var n=j(e,a,t);e.history.push(n)},w=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(o)))).state={currPage:1,MAX_PAGES:3,LAST_PAGE:null},t.updatePage=function(e){switch(e){case"-1":var a=t.state.currPage-1;a<1&&(a=1),t.handlePageUpdate(a);break;case"+1":var n=t.state.currPage+1;t.handlePageUpdate(n);break;default:t.handlePageUpdate(e)}},t.handlePageUpdate=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.setState(Object(E.a)({},t.state,{currPage:parseInt(e)}),function(){N(t.props,"page",parseInt(e)),!a&&t.props.onPageUpdate&&t.props.onPageUpdate()})},t.dynamicPageButtons=function(){for(var e=[],a=function(){var a=t.state.currPage+n,o="page-item ".concat(a===t.state.currPage?"active":"");e.push(r.a.createElement("li",{className:"".concat(o),key:a},r.a.createElement("span",{className:"page-link",onClick:function(){t.updatePage(a)},page:a},a)))},n=0;n<t.state.MAX_PAGES;n++)a();return e},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.page||O(this.props,"page")||1;this.setState(Object(E.a)({},this.state,{currPage:parseInt(e)})),this.props.lastPage&&this.props.currPage<=this.props.lastPage&&this.setState(Object(E.a)({},this.state,{LAST_PAGE:parseInt(this.props.lastPage)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"pagination-holder","aria-label":this.props.ariaLabel},r.a.createElement("ul",{className:"pagination"},this.state.currPage>1?r.a.createElement("li",{className:"page-item",key:"-1"},r.a.createElement("span",{className:"page-link",onClick:function(){e.updatePage("-1")},page:"-1",rel:"previous"},"\xab")):null,this.dynamicPageButtons(),!this.state.LAST_PAGE||this.state.currPage+(this.state.MAX_PAGES-1)<this.state.LAST_PAGE?r.a.createElement("li",{className:"page-item",key:"+1"},r.a.createElement("span",{className:"page-link",onClick:function(){e.updatePage("+1")},page:"+1",rel:"next"},"\xbb")):null))}}]),a}(n.Component),k=Object(b.e)(w),S=function(e){var a=Math.ceil(10*e)/10;return a%1>0?a:parseInt(a)},C=function(e){var a=parseFloat(e/1e3),t=parseFloat(a/1e3),n=parseFloat(t/1e3),r=parseFloat(n/1e3);return a<1e3?S(a)+"K":t<1e3?S(t)+"M":n<1e3?S(n)+"B":S(r)+"T"},B=Object(b.e)(function(e){return r.a.createElement(r.a.Fragment,null,e.results?function(e){for(var a=[],t=0;t<12&&t<e.videos.length;t++){var n=e.videos[t];a.push(r.a.createElement(y,{title:n.title,src:n.default_thumb,link:n.url,key:"".concat(n.id,"_").concat(t)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"single-detail col"},C(n.views)," Views \xb7 ",r.a.createElement("span",{className:"success"},parseFloat(n.rating).toFixed(1),"%")),r.a.createElement("div",{className:"single-detail col"},n.duration))))}return a}(e.results):null,e.results?r.a.createElement("center",{className:"clear"},r.a.createElement(k,{ariaLabel:"footer-pagination",onPageUpdate:function(){},page:O(e,"page"),lastPage:"10"})):null)}),P=t(13),_=t(34),A=t.n(_),q=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={active:!1,classString:"search-bar",searchString:""},t.classString=function(){return"search-bar ".concat(t.state.active?"active":"hidden")},t.updateSearch=function(e){t.setState(Object(E.a)({},t.state,{searchString:e}))},t.isActive=function(){return!P.isMobile||t.state.active},t.onSearchClick=function(e){t.state.active?(t.state.searchString&&t.submit(),P.isMobile&&t.setState(Object(E.a)({},t.state,{active:!1}))):t.setState(Object(E.a)({},t.state,{active:!0}),function(){document.getElementsByClassName("react-search-field-input")[0].focus()})},t.preservePathUpdateParams=function(){t.props.match.url=t.props.location.pathname,t.props.history.push(j(t.props,"q",t.state.searchString))},t.submit=function(){t.preservePathUpdateParams(),t.setState(Object(E.a)({},t.state,{searchString:"",active:!P.isMobile}))},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState(Object(E.a)({},this.state,{active:this.isActive()}),this.setState(Object(E.a)({},this.state,{classString:this.classString()})))}},{key:"render",value:function(){var e=this;return r.a.createElement(A.a,{placeholder:"Search...",onChange:function(a,t){e.updateSearch(a)},onEnter:function(a,t){e.submit()},onSearchClick:function(a,t){e.onSearchClick(a)},searchText:this.state.searchString,classNames:this.classString()})}}]),a}(n.Component),R=Object(s.b)(function(e){return{meta:e.meta,brands:e.brands}},{})(Object(b.e)(q)),F=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",{className:"brand-color"},"Oops!"),r.a.createElement("div",null,"Looks like we couldn't find what you were looking for."),r.a.createElement("div",{className:"try-search"},r.a.createElement(R,null)))},U=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(m.a)(this,Object(g.a)(a).call(this,e))).state={hasError:!1},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidCatch",value:function(e,a){console.warn("ErrorBoundary Error:",e),console.warn("ErrorBoundary Info:",a),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?this.props.errorContent:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component),x=Object(b.e)(function(e){return O(e,"q")?r.a.createElement("div",{className:"results-banner"},"Displaying Results for: ",r.a.createElement("span",null,O(e,"q"))):null}),L="https://videofeed-api-git-master.devonwieczorek93.now.sh",D="youtube",M=function(e){var a="".concat(L,"/").concat(e,"/categories");return function(t){fetch(a).then(function(e){return e.json()}).then(function(a){var n={brand:e,attribute:"allCategories",value:a.categories};a.categories[0]&&0!==Object.keys(a.categories[0]).length||(n.value=[{}]),t({type:"update_brand_attribute",payload:n})}).catch(function(a){console.log("Error fetching categories for ".concat(e,":"),a),t({type:"update_brand_attribute",payload:{brand:e,attribute:"allCategories",value:[{}]}})})}},T=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).onRouteChanged=function(){var e=t.props,a=e.match,n=e.location,r=f.a.parse(t.props.location.search),o=a.params.brand||n.pathname.split("/")[1]||D;t.props.updateAllBrandInfo({activeBrand:o,page:r.page||1,search:r.q||"",category:r.category||"",queryString:n.search||""}),t.props.updateActiveBrand(o),t.handleCategories(o),t.delegateSearch(o,r.q,r.category)},t.delegateSearch=function(e,a,n){e=e||t.props.brands.activeBrand,a=a||O(t.props,"q"),n=n||O(t.props,"category"),a?(console.log("search by query: ",e,t.props.location.search),t.props.searchByQuery(e,t.props.location.search)):n?(console.log("search by category: ",e,n),t.props.searchByCategory(e,n)):(console.log("search by brand default: ",e),t.props.searchByBrandDefault(e))},t.handleCategories=function(e){var a=(e=e||t.props.providers[t.props.activeBrand]).allCategories;a&&0!==a.length||t.props.getCategoriesByBrand(e)},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged()}},{key:"componentDidMount",value:function(){console.log("Router props: ",this.props),this.onRouteChanged()}},{key:"render",value:function(){var e=this;return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",key:"homeFeed",component:function(){return r.a.createElement(U,{errorContent:r.a.createElement(F,null)},r.a.createElement(x,null),r.a.createElement(B,{results:e.props.api.searchResults}))}}),r.a.createElement(b.a,{exact:!0,path:"/404",key:"404page",component:F}),r.a.createElement(b.a,{path:"/:brand",key:"brand",component:function(){return r.a.createElement(U,{errorContent:r.a.createElement(F,null)},r.a.createElement(x,null),r.a.createElement(B,{results:e.props.api.searchResults}))}}),r.a.createElement(b.a,{key:"404fallback",component:F}))}}]),a}(n.Component),I=Object(s.b)(function(e){return{brands:e.brands,api:e.api}},{updateAllBrandInfo:function(e){return{type:"update_all_brand_info",payload:e}},updateActiveBrand:function(e){return{type:"update_active_brand",payload:e}},updateBrandAttribute:function(e,a,t){return{type:"update_brand_attribute",payload:{brand:e,attribute:a,value:t}}},getCategoriesByBrand:M,searchByQuery:function(e,a){return function(t){var n="".concat(L,"/").concat(e).concat(a);console.log("Calling ".concat(n,"...")),fetch(n).then(function(e){return e.json()}).then(function(e){t({type:"get_data",payload:e})}).catch(function(e){console.log("There was an error getting data from ".concat(n,":"),e)})}},searchByCategory:function(e,a){return function(t){var n="".concat(L,"/").concat(e).concat(a);console.log("Calling ".concat(n,"...")),fetch(n).then(function(e){return e.json()}).then(function(e){t({type:"get_data",payload:e})}).catch(function(e){console.log("There was an error getting data from ".concat(n,":"),e)})}},searchByBrandDefault:function(e){return function(a){var t="".concat(L,"/").concat(e);console.log("Calling ".concat(t,"...")),fetch(t).then(function(e){return e.json()}).then(function(e){a({type:"get_data",payload:e})}).catch(function(e){console.log("There was an error getting data from ".concat(t,":"),e)})}}})(Object(b.e)(T)),V=function(){return r.a.createElement("a",{className:"home-button secondary",href:"/"},r.a.createElement("div",{id:"logo"}," Video",r.a.createElement("span",{className:"brand-color"},"Feed")," "))},G=function(){return r.a.createElement("ul",{className:"navbar-nav"},function(){var e=[],a=t(64);for(var n in a.brands){var o=a.brands[n].brand.toLowerCase();e.push(r.a.createElement(l.b,{to:"/".concat(o),className:"nav-link border-bottom truncate",activeClassName:"active",key:n},o))}return e}())},z=Object(b.e)(function(e){var a=O(e,e.param);return r.a.createElement("div",{className:a===e.value?"".concat(e.className," ").concat(e.activeClassName):e.className,onClick:function(){e.match.url=e.location.pathname,e.history.push(j(e,e.param,e.value))}},e.children)}),X=function(e){return r.a.createElement("ul",{className:"navbar-nav"}," ",function(){var a=[];for(var t in e.categories){var n=e.categories[t].category.toLowerCase();a.push(r.a.createElement(z,{className:"nav-link border-bottom truncate",activeClassName:"active",param:"category",key:t,value:n},n))}return 0===a.length&&(a=r.a.createElement("i",{style:{fontSize:"12px"}},"No Categories Found.")),a}()," ")},J=function(e){var a=e.id,t=e.title,n=e.children;return r.a.createElement("div",{className:"panel-group"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("div",{className:"nav-link truncate","data-toggle":"collapse",href:"#".concat(a)},t))),r.a.createElement("div",{id:a,className:"panel-collapse collapse"},r.a.createElement("div",{className:"panel-body"},n))))},Q=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.BrowserView,null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item border-bottom"},r.a.createElement(R,null)))),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item border-bottom"},r.a.createElement(l.b,{to:"/",className:"nav-link truncate",activeClassName:"default"},"Home Feed")),r.a.createElement("li",{className:"nav-item border-bottom truncate"},r.a.createElement(J,{id:"brands-accordion",title:"Brands"},r.a.createElement(G,null))),r.a.createElement("li",{className:"nav-item border-bottom truncate"},r.a.createElement(J,{id:"categories-accordion",title:"Categories"},r.a.createElement(X,{categories:this.props.providers[this.props.activeBrand].allCategories})))))}}]),a}(n.Component),W=Object(s.b)(function(e){return Object(E.a)({},e.brands)},{getCategoriesByBrand:M})(Object(b.e)(Q)),H=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={isOpen:!1},t.toggleOpen=function(e){"undefined"!==typeof e?t.setState(Object(E.a)({},t.state,{isOpen:e})):t.setState(Object(E.a)({},t.state,{isOpen:!t.state.isOpen}))},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.toggleOpen(!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(V,null),r.a.createElement("button",{className:"navbar-toggler border-top border-bottom over-5",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent1","aria-controls":"navbarSupportedContent1","aria-expanded":this.state.isOpen?"true":"false","aria-label":"Toggle navigation",onClick:function(){e.toggleOpen()}}),r.a.createElement("div",{className:"".concat(this.state.isOpen?"show":"collapse"," navbar-collapse"),id:"navbarSupportedContent1"},r.a.createElement(W,null)))}}]),a}(n.Component),K=Object(b.e)(H),$=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dynamic-partner-logo"},r.a.createElement("img",{id:"partner-logo",className:this.props.className,src:this.props.partnerLogo,alt:this.props.alt||this.props.activeBrand}))}}]),a}(n.Component),Y=Object(s.b)(function(e){return Object(E.a)({},e.brands)},{})(Object(b.e)($)),Z=Object(b.e)(function(e){var a=e.match.params.brand||e.location.pathname.split("/")[1];return r.a.createElement("header",{className:"super container-fluid"},r.a.createElement(P.MobileView,{viewClassName:"mobile-nav"},r.a.createElement(K,null),r.a.createElement(R,null)),r.a.createElement(P.BrowserView,null,r.a.createElement(V,null),a?r.a.createElement(Y,null):r.a.createElement(R,null)))}),ee=function(){return r.a.createElement(P.BrowserView,{viewClassName:"siderail-nav nav-left col-lg-2 col-xl-2 float-left border-right"},r.a.createElement("nav",{className:"navbar web-nav"},r.a.createElement(W,null)))},ae=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log("App props: ",this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"app clear"},r.a.createElement(Z,null),r.a.createElement(ee,null),r.a.createElement("div",{className:"container col-sm-12 col-md-12 col-lg-10 col-xl-10 float-right clear"},r.a.createElement("div",{className:"feed-wrapper row col float-right"},r.a.createElement(I,null))))}}]),a}(n.Component),te=Object(b.e)(ae),ne=t(16),re={title:"VideoFeed | Clean React UI",description:"Reuseable React & SASS based components",keywords:"",subject:"",robots:"index,follow",ogTitle:"VideoFeed",ogImage:"../../public/favicon.ico",ogDescription:"Reuseable React & SASS based components",ogSiteName:"VideoFeed",ogType:"",ogURL:window.location.href},oe={searchResults:null},ce={activeBrand:D,page:1,search:"",category:"",queryString:"",partnerLogo:null,providers:{youtube:{brandName:"youtube",logo:"https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png",page:1,search:"",category:"",queryString:"",allCategories:[]},vimeo:{brandName:"vimeo",logo:"https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/PressRoom/563/cover_photo/large_slack-imgs.com.png",page:1,search:"",category:"",queryString:"",allCategories:[]},metacafe:{brandName:"metacafe",logo:"https://logonoid.com/images/metacafe-logo.png",page:1,search:"",category:"",queryString:"",allCategories:[]}}},le=Object(i.c)({meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"meta":var t=function(e,a){var t={};for(var n in e)a[n]?t[n]=a[n]:t[n]=e[n];return t}(re,a.payload);return Object(E.a)({},e,t);case"reset_meta":return Object(E.a)({},e,re);default:return e}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"get_data":return console.log("Got Search Results:",a.payload),Object(E.a)({},e,{searchResults:a.payload});default:return e}},brands:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"update_active_brand":return Object(E.a)({},e,{activeBrand:a.payload,partnerLogo:e.providers[a.payload].logo,page:e.providers[a.payload].page,search:e.providers[a.payload].search,category:e.providers[a.payload].category,queryString:e.providers[a.payload].queryString});case"update_all_brand_info":return Object(E.a)({},e,{activeBrand:a.payload.activeBrand,page:a.payload.page,search:a.payload.search,category:a.payload.category,queryString:a.payload.queryString,providers:Object(E.a)({},e.providers,Object(ne.a)({},a.payload.activeBrand,Object(E.a)({},e.providers[a.payload.activeBrand],{page:a.payload.page,search:a.payload.search,category:a.payload.category,queryString:a.payload.queryString})))});case"update_brand_attribute":return Object(E.a)({},e,{providers:Object(E.a)({},e.providers,Object(ne.a)({},a.payload.brand,Object(E.a)({},e.providers[a.payload.brand],Object(ne.a)({},a.payload.attribute,a.payload.value))))});case"reset_brand":return Object(E.a)({},e,{providers:Object(ne.a)({},a.payload,ce.providers[a.payload])});case"reset_all_brands":return Object(E.a)({},e,ce);default:return e}}}),se=t(35),ie=t.n(se),ue=function(e){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(ie.a,null,r.a.createElement("title",null,this.props.title),r.a.createElement("meta",{name:"description",content:this.props.description}),r.a.createElement("meta",{name:"keywords",content:this.props.keywords}),r.a.createElement("meta",{name:"subject",content:this.props.subject}),r.a.createElement("meta",{name:"robots",content:this.props.robots}),r.a.createElement("meta",{property:"og:title",content:this.props.ogTitle}),r.a.createElement("meta",{property:"og:image",content:this.props.ogImage}),r.a.createElement("meta",{property:"og:site_name",content:this.props.ogSiteName}),r.a.createElement("meta",{property:"og:description",content:this.props.ogDescription||this.props.description}),r.a.createElement("meta",{property:"og:url",content:this.props.ogURL||window.location.href}))}}]),a}(n.Component),pe=Object(s.b)(function(e){return Object(E.a)({},e.meta)},{})(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=Object(i.d)(le,{},Object(i.a)(u.a));c.a.render(r.a.createElement(s.a,{store:de},r.a.createElement(l.a,null,r.a.createElement(pe,null),r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.4e86e971.chunk.js.map