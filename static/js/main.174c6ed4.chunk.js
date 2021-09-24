(this["webpackJsonphotel-simulator-react"]=this["webpackJsonphotel-simulator-react"]||[]).push([[0],{22:function(a,e,i){"use strict";i.r(e);var o=i(2),n=i.n(o),t=i(10),r=i.n(t),l=(i(9),i(5)),s=i(0);var c=function(a){var e=a.lugar,i=a.precio,o=a.tamanio,n=a.desdeNatural,t=a.hastaNatural;return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{className:"title",children:"Hoteles"}),Object(s.jsxs)("p",{className:"parrafo",children:["Desde ",n," - Hasta ",t," ",Object(s.jsx)("br",{}),"En ",e," ",Object(s.jsx)("br",{}),"De ",i," ",Object(s.jsx)("br",{}),"De ",o]})]})},d=i(3),u=i(4);var m=function(a){var e=a.lugar,i=a.precio,o=a.tamanio,n=a.estadoInicial,t=a.actualizarLugar,r=a.actualizarPrecio,l=a.actualizarTamanio,c=a.actualizarFechaDesde,m=a.actualizarFechaHasta;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("form",{action:"",id:"form",children:Object(s.jsxs)("nav",{className:"nav-bar",children:[Object(s.jsxs)("div",{className:"div-filter",children:[Object(s.jsx)("input",{value:n.actualizarFechaInicio,type:"date",className:"input",onChange:function(a){c(a.target.value)}}),Object(s.jsx)(d.a,{icon:u.d,className:"icon-filter"})]}),Object(s.jsxs)("div",{className:"div-filter",children:[Object(s.jsx)("input",{type:"date",className:"input",onChange:function(a){m(a.target.value)}}),Object(s.jsx)(d.a,{icon:u.e,className:"icon-filter"})]}),Object(s.jsxs)("div",{className:"div-filter",children:[Object(s.jsxs)("select",{value:e,className:"select",name:"country",id:"",onChange:function(a){t(a.target.value)},children:[Object(s.jsx)("option",{value:n.lugar,children:n.lugar}),Object(s.jsx)("option",{value:"argentina",children:"Argentina"}),Object(s.jsx)("option",{value:"brasil",children:"Brasil"}),Object(s.jsx)("option",{value:"chile",children:"Chile"}),Object(s.jsx)("option",{value:"uruguay",children:"Uruguay"})]}),Object(s.jsx)(d.a,{icon:u.c,className:"icon-filter"})]}),Object(s.jsxs)("div",{className:"div-filter",children:[Object(s.jsxs)("select",{value:i,className:"select",name:"price",id:"",onChange:function(a){r(a.target.value)},children:[Object(s.jsx)("option",{value:n.precio,children:n.precio}),Object(s.jsx)("option",{value:"1",children:"$"}),Object(s.jsx)("option",{value:"2",children:"$$"}),Object(s.jsx)("option",{value:"3",children:"$$$"}),Object(s.jsx)("option",{value:"4",children:"$$$$"})]}),Object(s.jsx)(d.a,{icon:u.b,className:"icon-filter"})]}),Object(s.jsxs)("div",{className:"div-filter",children:[Object(s.jsxs)("select",{value:o,className:"select",name:"size",id:"",onChange:function(a){l(a.target.value)},children:[Object(s.jsx)("option",{value:n.tamanio,children:n.tamanio}),Object(s.jsx)("option",{value:"pequenio",children:"Peque\xf1o"}),Object(s.jsx)("option",{value:"mediano",children:"Mediano"}),Object(s.jsx)("option",{value:"grande",children:"Grande"})]}),Object(s.jsx)(d.a,{icon:u.a,className:"icon-filter"})]}),Object(s.jsx)("button",{onClick:function(a){a.preventDefault(),c(n.desde),m(n.hasta),t(n.lugar),r(n.precio),l(n.tamanio)},children:Object(s.jsx)(d.a,{icon:u.f,className:"icon-trash"})})]})})})},p=function(a){var e=a.hotel;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"container-img",children:Object(s.jsx)("img",{src:e.photo,alt:e.name})}),Object(s.jsxs)("div",{className:"container-info",children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("p",{children:e.description})]}),Object(s.jsxs)("div",{className:"location-card",children:[Object(s.jsx)("img",{src:"./images/pin.svg",alt:"logo de ubicaci\xf3n"}),e.city,", ",e.country]}),Object(s.jsxs)("div",{className:"info-room-price",children:[Object(s.jsxs)("div",{className:"info-room",children:[Object(s.jsx)(d.a,{icon:u.a,className:"icon-room"}),e.rooms," Habitaciones"]}),Object(s.jsxs)("div",{className:"info-price",children:[Object(s.jsx)("span",{children:"$"}),Object(s.jsx)("span",{className:e.price>=2?"":"price-disabled",children:"$"}),Object(s.jsx)("span",{className:e.price>=3?"":"price-disabled",children:"$"}),Object(s.jsx)("span",{className:e.price>=4?"":"price-disabled",children:"$"})]})]}),Object(s.jsx)("button",{className:"button",children:"RESERVAR"})]})})},b=function(a){var e=a.mostrarListaFiltrada;return Object(s.jsx)("div",{className:"main-container",children:e.map((function(a,e){return Object(s.jsx)(p,{hotel:a},e)}))})},j=new Date,v=[{slug:"la-bamba-de-areco",name:"La Bamba de Areco",photo:"./images/la-bamba-de-areco.jpg",description:"La Bamba de Areco est\xe1 ubicada en San Antonio de Areco, en el coraz\xf3n de la pampa. Es una de las estancias m\xe1s antiguas de la Argentina, recientemente restaurada para ofrecer a sus hu\xe9spedes todo el confort y esplendor colonial.",availabilityFrom:j.valueOf(),availabilityTo:j.valueOf()+864e6,rooms:11,city:"Buenos Aires",country:"Argentina",price:4},{slug:"sainte-jeanne",name:"Sainte Jeanne Boutique & Spa",photo:"./images/sainte-jeanne.jpg",description:"Sainte Jeanne Hotel Boutique & Spa est\xe1 ubicado en el coraz\xf3n de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasi\xf3n por los detalles dan personalidad a esta c\xe1lida propuesta.",availabilityFrom:j.valueOf()+864e6,availabilityTo:j.valueOf()+1296e6,rooms:23,city:"Mar del Plata",country:"Argentina",price:2},{slug:"entre-cielos",name:"Entre Cielos",photo:"./images/entre-cielos.jpg",description:"Ubicado en una de las regiones vitivin\xedcolas m\xe1s grandes de Am\xe9rica Latina, Entre Cielos fue pensado y construido en un campo de 8 hect\xe1reas rodeado de vi\xf1edos malbec y una imponente vista de la Cordillera de Los Andes.",availabilityFrom:j.valueOf()+432e6,availabilityTo:j.valueOf()+1296e6,rooms:16,city:"Mendoza",country:"Argentina",price:4},{slug:"huacalera",name:"Hotel Huacalera",photo:"./images/huacalera.jpg",description:"Esta casona neocolonial, construida en la d\xe9cada de 1940, est\xe1 ubicada en el coraz\xf3n de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas monta\xf1osas, recorrido por el R\xedo Grande y declarado Patrimonio de la Humanidad en 2003.",availabilityFrom:j.valueOf()+1728e6,availabilityTo:j.valueOf()+2592e6,rooms:32,city:"Jujuy",country:"Argentina",price:1},{slug:"merced-del-alto",name:"La Merced del Alto",photo:"./images/merced-del-alto.jpg",description:"Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, r\xedos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaqu\xedes o simplemente a disfrutar de la paz del lugar.",availabilityFrom:j.valueOf(),availabilityTo:j.valueOf()+432e6,rooms:14,city:"Salta",country:"Argentina",price:2},{slug:"azur-real",name:"Azur Real Hotel",photo:"./images/azur-real.jpg",description:"La exclusividad rodeada de historia. Azur Real Hotel Boutique est\xe1 ubicado en el coraz\xf3n de la zona comercial y el centro hist\xf3rico de C\xf3rdoba, dentro de uno de los principales circuitos culturales y tur\xedsticos de la ciudad.",availabilityFrom:j.valueOf()+1296e6,availabilityTo:j.valueOf()+2592e6,rooms:16,city:"C\xf3rdoba",country:"Argentina",price:1},{slug:"rincon-del-socorro",name:"Rinc\xf3n del Socorro",photo:"./images/rincon-del-socorro.jpg",description:"Rinc\xf3n del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iber\xe1, un santuario de vida silvestre, donde la Fundaci\xf3n Conservation Land Trust decidi\xf3 desarrollar un ambicioso proyecto de recuperaci\xf3n y conservaci\xf3n.",availabilityFrom:j.valueOf()+432e6,availabilityTo:j.valueOf()+1296e6,rooms:11,city:"Corrientes",country:"Argentina",price:2},{slug:"luma-casa-de-montana",name:"Luma Casa de Monta\xf1a",photo:"./images/luma-casa-de-montana.jpg",description:"Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Monta\xf1a se presenta majestuosa pero a la vez simple y hogare\xf1a: un lugar diferente, atemporal y m\xe1gico.",availabilityFrom:j.valueOf(),availabilityTo:j.valueOf()+1296e6,rooms:8,city:"Villa La Angostura",country:"Argentina",price:2},{slug:"casa-turquesa",name:"Casa Turquesa",photo:"./images/casa-turquesa.jpg",description:"Casa Turquesa es una hist\xf3rica mansi\xf3n del siglo XVIII que recrea el encanto t\xedpico de Paraty, una de las herencias coloniales m\xe1s bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.",availabilityFrom:j.valueOf(),availabilityTo:j.valueOf()+432e6,rooms:9,city:"R\xedo de Janeiro",country:"Brasil",price:3},{slug:"vila-da-santa",name:"Vila Da Santa",photo:"./images/vila-da-santa.jpg",description:"Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su esp\xedritu original. Se abre a un gran patio central con dos piscinas de dise\xf1o, una de ellas climatizada.",availabilityFrom:j.valueOf()+864e6,availabilityTo:j.valueOf()+1296e6,rooms:19,city:"Buzios",country:"Brasil",price:3},{slug:"uxua-casa",name:"UXUA Casa Hotel & Spa",photo:"./images/uxua-casa.jpg",description:"UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extra\xeddos de la selva.",availabilityFrom:j.valueOf(),availabilityTo:j.valueOf()+864e6,rooms:11,city:"Bah\xeda",country:"Brasil",price:4},{slug:"ponta-dos-ganchos",name:"Ponta dos Ganchos",photo:"./images/ponta-dos-ganchos.jpg",description:"Ubicado a pasos de San Pablo, R\xedo de Janeiro, e incluso Buenos Aires, en una pen\xednsula privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa m\xe1s exclusivos del sur de Brasil.",availabilityFrom:j.valueOf()+432e6,availabilityTo:j.valueOf()+864e6,rooms:25,city:"Santa Catarina",country:"Brasil",price:4},{slug:"alto-atacama",name:"Alto Atacama",photo:"./images/alto-atacama.jpg",description:"Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukar\xe1 de Quitor en el imponente desierto de Atacama al norte de Chile.",availabilityFrom:j.valueOf(),availabilityTo:j.valueOf()+864e6,rooms:42,city:"San Pedro de Atacama",country:"Chile",price:4},{slug:"tierra-patagonia",name:"Tierra Patagonia",photo:"./images/tierra-patagonia.jpg",description:"Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de monta\xf1as, cascadas, glaciares, lagos y pe\xf1ascos, declarado Reserva de la Biosfera por la UNESCO en 1978.",availabilityFrom:j.valueOf()+2592e6,availabilityTo:j.valueOf()+3456e6,rooms:40,city:"Torres del Paine",country:"Chile",price:4},{slug:"vira-vira",name:"Vira Vira",photo:"./images/vira-vira.jpg",description:"Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicaci\xf3n privilegiada, muy cerca de Puc\xf3n, Chile. Su impresionante parque nativo de 23 hect\xe1reas a orillas del r\xedo Liucura ofrece un oasis \xfanico de paz y tranquilidad.",availabilityFrom:j.valueOf()+864e6,availabilityTo:j.valueOf()+1728e6,rooms:21,city:"Puc\xf3n",country:"Chile",price:4},{slug:"vik-chile",name:"Vik Chile",photo:"./images/vik-chile.jpg",description:"Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el dise\xf1o de vanguardia, una ubicaci\xf3n sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atenci\xf3n por el medioambiente.",availabilityFrom:j.valueOf()+432e6,availabilityTo:j.valueOf()+1728e6,rooms:22,city:"Millahue",country:"Chile",price:4},{slug:"casa-higueras",name:"Casa Higueras",photo:"./images/casa-higueras.jpg",description:"Ubicada en el coraz\xf3n del Cerro Alegre, frente a la imponente bah\xeda de Valpara\xedso, se encuentra Casa Higueras, el primer hotel boutique y de dise\xf1o del puerto.",availabilityFrom:j.valueOf()+432e6,availabilityTo:j.valueOf()+1296e6,rooms:20,city:"Valpara\xedso",country:"Chile",price:4},{slug:"campo-tinto",name:"Campo Tinto",photo:"./images/campo-tinto.jpg",description:"Campo Tinto es una chacra de 25 hect\xe1reas ubicada en el coraz\xf3n de San Roque, en medio del ondulante Carmelo, una zona de chacras, vi\xf1edos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.",availabilityFrom:j.valueOf()+216e7,availabilityTo:j.valueOf()+2592e6,rooms:4,city:"Colonia",country:"Uruguay",price:1}],g=function(){return Object(s.jsx)("div",{className:"error",children:Object(s.jsx)("p",{children:"No se encuentran resultados que coincidan con la b\xfasqueda"})})};function h(){var a={desde:"Seleccione una fecha",hasta:"Seleccione una fecha",lugar:"Todos los paises",precio:"Cualquier precio",tamanio:"Cualquier tama\xf1o"},e=Object(o.useState)(a.desde),i=Object(l.a)(e,2),n=i[0],t=i[1],r=Object(o.useState)(a.hasta),d=Object(l.a)(r,2),u=d[0],p=d[1],j=Object(o.useState)(a.lugar),h=Object(l.a)(j,2),y=h[0],O=h[1],f=Object(o.useState)(a.precio),x=Object(l.a)(f,2),C=x[0],N=x[1],A=Object(o.useState)(a.tamanio),T=Object(l.a)(A,2),S=T[0],z=T[1],F=new Date(n+"T00:00:00"),q=new Date(u+"T00:00:00"),L={weekday:"long",year:"numeric",month:"long",day:"numeric"},H=F.toLocaleDateString("es-AR",L),P=q.toLocaleDateString("es-AR",L),B=F.getTime(),D=q.getTime(),R=v.filter((function(e){return n!==a.desde&&u!==a.hasta?e.availabilityFrom>=B&&e.availabilityTo<=D:e})).filter((function(e){return y!==a.lugar?e.country.toLowerCase()===y:e})).filter((function(e){return S!==a.tamanio?"pequenio"===S?e.rooms<=10:"mediano"===S?e.rooms>10&&e.rooms<=20:e.rooms>20:e})).filter((function(e){return C!==a.precio?e.price===Number(C):e}));return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)(c,{fechaDesde:n,fechaHasta:u,lugar:y,precio:C,tamanio:S,estadoInicial:a,desdeNatural:H,hastaNatural:P}),Object(s.jsx)(m,{lugar:y,precio:C,tamanio:S,estadoInicial:a,actualizarLugar:O,actualizarPrecio:N,actualizarTamanio:z,actualizarFechaDesde:t,actualizarFechaHasta:p}),Object(s.jsx)("div",{children:0===R.length?Object(s.jsx)(g,{}):Object(s.jsx)(b,{mostrarListaFiltrada:R})})]})}var y=function(a){a&&a instanceof Function&&i.e(3).then(i.bind(null,23)).then((function(e){var i=e.getCLS,o=e.getFID,n=e.getFCP,t=e.getLCP,r=e.getTTFB;i(a),o(a),n(a),t(a),r(a)}))};i(21);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),y()},9:function(a,e,i){}},[[22,1,2]]]);
//# sourceMappingURL=main.174c6ed4.chunk.js.map