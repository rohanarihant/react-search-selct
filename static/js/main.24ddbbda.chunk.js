(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,a,n){"use strict";n.r(a);var t=n(1),o=n.n(t),i=n(26),s=n.n(i),r=n(27),l=n(28),c=n(32),h=n(29),u=n(33),d=n(0),g=n(30),b=n.n(g),w=n(31),m=n.n(w),O=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District Of Columbia","Federated States Of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],f=function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={suggestions:[]},n.handleClear=n.handleClear.bind(Object(d.a)(Object(d.a)(n))),n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSelection=n.handleSelection.bind(Object(d.a)(Object(d.a)(n))),n.handleSearch=n.handleSearch.bind(Object(d.a)(Object(d.a)(n))),n.suggestionRenderer=n.suggestionRenderer.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(a,e),Object(l.a)(a,[{key:"handleClear",value:function(){this.setState({suggestions:[]})}},{key:"handleChange",value:function(e){this.setState({suggestions:O.filter(function(a){return a.toLocaleLowerCase().startsWith(e.toLocaleLowerCase())})})}},{key:"handleSelection",value:function(e){e&&console.info('Selected "'.concat(e,'"'))}},{key:"handleSearch",value:function(e){e&&console.info('Searching "'.concat(e,'"'))}},{key:"suggestionRenderer",value:function(e,a){return o.a.createElement("span",null,o.a.createElement("strong",null,e))}},{key:"render",value:function(){return o.a.createElement(m.a,{autoFocus:!0,placeholder:"search and select any city",onChange:this.handleChange,onClear:this.handleClear,onSelection:this.handleSelection,onSearch:this.handleSearch,suggestions:this.state.suggestions,suggestionRenderer:this.suggestionRenderer,styles:b.a})}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,a,n){},34:function(e,a,n){e.exports=n(113)}},[[34,1,2]]]);
//# sourceMappingURL=main.24ddbbda.chunk.js.map