(this.webpackJsonpkoerselsfradrag=this.webpackJsonpkoerselsfradrag||[]).push([[0],{71:function(e,t,c){},72:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),s=c(32),n=c.n(s),j=(c(71),c(3)),i=(c(72),c(85)),d=c(86),l=c(63),b=c(80),h=c(84),O=c(87),o=c(81),g=c(7),x=Object(g.b)({key:"kilometerState",default:0}),u=Object(g.b)({key:"christmasOffState",default:!0}),f=Object(g.b)({key:"newYearsOffState",default:!0}),p=Object(g.b)({key:"workSpecialDaysState",default:null}),m=Object(g.b)({key:"homeWorkDaysState",default:0}),k=Object(g.b)({key:"vacationWeeksState",default:0}),y=Object(g.b)({key:"highRateState",default:!1}),v=Object(g.b)({key:"sickDaysState",default:0}),C=Object(g.b)({key:"daysOffState",default:[{title:"Palmes\xf8ndag",selected:!1},{title:"Sk\xe6rtorsdag",selected:!1},{title:"Langfredag",selected:!1},{title:"P\xe5skedag",selected:!1},{title:"2. p\xe5skedag",selected:!1},{title:"Store bededag",selected:!1},{title:"Pinsedag",selected:!1},{title:"2. pinsedag",selected:!1},{title:"Juledag",selected:!1},{title:"2. Juledag",selected:!1},{title:"Arbejdernes kampdag",selected:!1},{title:"Grundlovsdag",selected:!1}]}),w=c(1),S=function(){var e=Object(g.c)(x),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(g.c)(y),s=Object(j.a)(a,2),n=s[0],l=s[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,style:{margin:24},children:[Object(w.jsx)("label",{children:"Hvor langt har du til arbejde hver dag?"}),Object(w.jsx)(h.a,{size:"large",defaultValue:c,placeholder:"indtast kilometer",style:{padding:"24px !important"},addonAfter:"km",onChange:function(e){var t=parseInt(e.target.value,10);"number"==typeof t?(r(t),console.log("setting number"+t)):r(0)}})]})}),2*c>120&&Object(w.jsx)(i.a,{children:Object(w.jsx)(d.a,{span:20,offset:2,children:Object(w.jsx)(i.a,{justify:"start",children:Object(w.jsxs)(i.a,{style:{padding:6},children:[Object(w.jsx)(d.a,{span:20,children:Object(w.jsx)("label",{children:"Du har langt til arbejde - bor du i en yderkommune?"})}),Object(w.jsx)(d.a,{offset:1,span:1,children:Object(w.jsx)(O.a,{checkedChildren:"Ja",unCheckedChildren:"Nej",defaultChecked:n,onChange:function(e){return l(e)}})})]})})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,children:[c>0&&c<12&&Object(w.jsx)(o.a,{message:"Desv\xe6rre...",style:{width:"100%"},description:"Du skal k\xf8re mindst 12 kilometer hver vej, for at v\xe6re berettiget til k\xf8rselsfradrag",type:"warning",showIcon:!0}),c>=12&&Object(w.jsx)(o.a,{message:"Perfekt!",style:{width:"100%",marginTop:24},description:"Du har ".concat(2*c,"km til og fra arbejde hver dag."),type:"success",showIcon:!0}),c>60&&Object(w.jsx)(o.a,{message:"Bem\xe6rk!",style:{width:"100%",marginTop:24},description:"Du har ".concat(2*c,"km til og fra arbejde hver dag. - Det betyder din sats er 0,98 for hver kilometer over de 120 hvis du bor i en yderkommune"),type:"warning",showIcon:!0})]})})]})},F=c(38);var D=function(e){var t,c=Object(g.c)(C),r=Object(j.a)(c,2),a=r[0],s=r[1];return Object(w.jsx)(d.a,{flex:1,children:Object(w.jsx)(l.a,{style:{width:"250px"},block:!0,type:(null===(t=a.find((function(t){return t.title==e.data.title})))||void 0===t?void 0:t.selected)?"primary":"default",onClick:function(){var t,c,r,n=a.find((function(t){return t.title==e.data.title})),j=(t=a,c=a.indexOf(n),r={title:n.title,selected:!n.selected},[].concat(Object(F.a)(t.slice(0,c)),[r],Object(F.a)(t.slice(c+1))));s(j)},children:e.data.title})})},H=function(){var e=Object(g.c)(C),t=Object(j.a)(e,2),c=t[0],r=(t[1],Object(g.c)(u)),a=Object(j.a)(r,2),s=a[0],n=a[1],b=Object(g.c)(f),h=Object(j.a)(b,2),x=h[0],m=h[1],k=Object(g.c)(p),y=Object(j.a)(k,2),v=y[0],S=y[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,style:{margin:24},children:[Object(w.jsxs)(i.a,{style:{padding:6},children:[Object(w.jsx)(d.a,{span:8,children:Object(w.jsx)("label",{children:"Har du fri juleaftensdag?"})}),Object(w.jsx)(d.a,{offset:1,span:1,children:Object(w.jsx)(O.a,{checkedChildren:"Ja",unCheckedChildren:"Nej",defaultChecked:s,onChange:function(e){return n(e)}})})]}),Object(w.jsxs)(i.a,{style:{padding:6},children:[Object(w.jsx)(d.a,{span:8,children:Object(w.jsx)("label",{children:"Har du fri nyt\xe5rsaftensdag?"})}),Object(w.jsx)(d.a,{offset:1,span:1,children:Object(w.jsx)(O.a,{checkedChildren:"Ja",unCheckedChildren:"Nej",defaultChecked:x,onChange:function(e){return m(e)}})})]}),Object(w.jsxs)(i.a,{style:{padding:6},children:[Object(w.jsx)(d.a,{span:8,children:Object(w.jsx)("label",{children:"Har du arbejdet p\xe5 nogle af de normale helligdage?"})}),Object(w.jsx)(d.a,{span:1,offset:1,children:Object(w.jsx)(l.a,{size:"large",type:0==v?"primary":"default",onClick:function(){return S(!1)},children:"Nej"})}),Object(w.jsx)(d.a,{span:1,offset:1,children:Object(w.jsx)(l.a,{size:"large",type:1==v?"primary":"default",onClick:function(){return S(!0)},children:"Ja"})})]})]})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,children:[0==v&&Object(w.jsx)(o.a,{message:"Perfekt!",style:{width:"100%"},description:"Vi lader v\xe6re med at regne helligdage med",type:"success",showIcon:!0}),1==v&&Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(i.a,{justify:"start",children:[Object(w.jsx)("label",{children:"V\xe6lg de dage du har arbejdet"}),Object(w.jsx)(d.a,{span:12,offset:5,children:Object(w.jsx)(i.a,{gutter:[32,32],children:c.map((function(e){return Object(w.jsx)(D,{data:e})}))})})]})})]})})]})},I=c(82),P=function(){var e=Object(g.c)(k),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsx)(d.a,{span:20,style:{margin:24},children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:6,children:Object(w.jsxs)("label",{children:[" Hvor mange dages ferie har du haft?",Object(w.jsx)("br",{})," De fleste har 5 eller 6 uger"]})}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)(I.a,{size:"large",placeholder:"25",style:{padding:"24px !important"},onChange:function(e){return r(e)}})," "]})]})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,children:[c>0&&c<20&&Object(w.jsx)(o.a,{message:"Ok men...",style:{width:"100%"},description:"Kan de virkeligt passe du har holdt under 4 ugers ferie?",type:"warning",showIcon:!0}),c>19&&Object(w.jsx)(o.a,{message:"Perfekt!",style:{width:"100%"},description:"Vi regner ferien ud :)",type:"success",showIcon:!0})]})})]})},J=function(){var e=Object(g.c)(m),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{children:Object(w.jsx)(d.a,{children:Object(w.jsx)(o.a,{message:"Satans Corona...",style:{width:"100%"},description:Object(w.jsxs)("p",{children:["Corona har gjort mange ikke har v\xe6ret s\xe5 meget p\xe5 arbejde som normalt. Danmark lukkede ned d. 11 Marts 2020, og var lukket frem til d. 30 Marts 2020. Danmark lukkede delvist ned igen d. 7 December, og endnu mere ned d. 17 December og \xe5bnede f\xf8rst delvist op igen d. 8 Februar. Dermed er der store udsving alt efter hvor du har boet ift. hvor mange hjemmearbejdsdage du muligvis har haft. Har du generelt set v\xe6ret hjemsendt i lukkeperioden er det ca. ",Object(w.jsx)("strong",{children:"13 dage i for\xe5ret"}),", og ",Object(w.jsx)("strong",{children:"25 dage i julen og start 2021"}),". Var du hjemsendt i minksagsperioden var det yderligere fra d. 7 November til d. 23 November, eller ",Object(w.jsx)("strong",{children:"10 arbejdsdage"}),". Total set er det ",Object(w.jsx)("strong",{children:"48 arbejdsdage"})," du kan have mistet."]}),type:"info",showIcon:!0})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsx)(d.a,{span:20,style:{margin:24},children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:6,children:Object(w.jsx)("label",{children:"Hvor mange dage har du arbejdet hjemme fra?"})}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)(I.a,{size:"large",defaultValue:c,placeholder:"25",style:{padding:"24px !important"},onChange:function(e){return r(e)}})," "]})]})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,children:[c>0&&c<10&&Object(w.jsx)(o.a,{message:"Fair nok...",style:{width:"100%"},description:"Men husk lige p\xe5 de sikkert er virkeligt obs. p\xe5 folk som fors\xf8ger at hente nogle 'gratis' dage",type:"warning",showIcon:!0}),c>9&&Object(w.jsx)(o.a,{message:"Perfekt!",style:{width:"100%"},description:"Det tager vi med!",type:"success",showIcon:!0})]})})]})},N=function(){var e=Object(g.c)(v),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsx)(d.a,{span:20,style:{margin:24},children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:6,children:Object(w.jsx)("label",{children:"Hvor mange dage du v\xe6ret syg?"})}),Object(w.jsxs)(d.a,{children:[Object(w.jsx)(I.a,{size:"large",defaultValue:c,placeholder:"5",style:{padding:"24px !important"},onChange:function(e){return r(e)}})," "]})]})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,children:[0==c&&Object(w.jsx)(o.a,{message:"Champ",style:{width:"100%"},description:"Sygedage er for pussies alligevel!",type:"success",showIcon:!0}),0!=c&&Object(w.jsx)(o.a,{message:"Perfekt!",style:{width:"100%"},description:"Vi tager sygedagene med :)",type:"success",showIcon:!0})]})})]})},V=function(){var e=Object(g.c)(x),t=Object(j.a)(e,2),c=t[0],r=(t[1],Object(g.c)(C)),a=Object(j.a)(r,2),s=a[0],n=(a[1],Object(g.c)(u)),l=Object(j.a)(n,2),b=l[0],h=(l[1],Object(g.c)(f)),O=Object(j.a)(h,2),o=O[0],p=(O[1],Object(g.c)(k)),S=Object(j.a)(p,2),F=S[0],D=(S[1],Object(g.c)(v)),H=Object(j.a)(D,2),I=H[0],P=(H[1],Object(g.c)(m)),J=Object(j.a)(P,2),N=J[0],V=(J[1],Object(g.c)(y)),z=Object(j.a)(V,2),T=(z[0],z[1],function(){return 0+(1==b?1:0)+(1==o?1:0)+s.filter((function(e){return 1==e.selected})).length}),M=function(){return c>60?1.96*c*B:235.2*B+.98*(c-60)*B},B=254-T()-F-I-N;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsx)(d.a,{span:20,style:{margin:24},children:Object(w.jsx)("h1",{children:"Udregning"})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsxs)(d.a,{span:20,children:[Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Totale arbejdsdage"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:254})," dage"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Dine arbejdsdage"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:B})," dage"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Helligdage/Fridage"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:T()})," dage"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Feriedage"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:F})," dage"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Sygedage"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:I})," dage"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Coronadage/Hjemmedage"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:N})," dage"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"K\xf8rte kilometer"}),Object(w.jsxs)(d.a,{span:10,children:[Object(w.jsx)("strong",{children:c*B}),"km"]})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{style:{marginTop:24},span:10,children:"Fradrag"}),Object(w.jsx)(d.a,{span:10,children:Object(w.jsxs)("strong",{children:["kr. ",Math.round(M())]})})]}),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(d.a,{span:10,children:"Penge i lommen"}),Object(w.jsxs)(d.a,{span:10,children:["ca. ",Object(w.jsxs)("strong",{children:["kr. ",Math.round(.26*M())]})]})]})]})})]})},z=b.a.Step,T=[{title:"Hvor langt k\xf8rer du?",content:"First-content"},{title:"Har du arbejdet p\xe5 nogle helligdage?",content:"Second-content"},{title:"Hvor meget ferie har du haft?",content:"Last-content"},{title:"Hvor mange dage har du arbejdet hjemmefra?",content:"shit"},{title:"Har du v\xe6ret syg?",content:"shit"}],M=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(Object(w.jsx)(S,{})),n=Object(j.a)(s,2),h=n[0],O=n[1];return Object(r.useEffect)((function(){switch(c){case 0:O(Object(w.jsx)(S,{}));break;case 1:O(Object(w.jsx)(H,{}));break;case 2:O(Object(w.jsx)(P,{}));break;case 3:O(Object(w.jsx)(J,{}));break;case 4:O(Object(w.jsx)(N,{}));break;case 5:O(Object(w.jsx)(V,{}));break;default:O(Object(w.jsx)(S,{}))}}),[c]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{children:Object(w.jsx)(d.a,{span:24,children:Object(w.jsx)(b.a,{current:c,children:T.map((function(e){return Object(w.jsx)(z,{description:e.title},e.title)}))})})}),Object(w.jsx)(i.a,{justify:"start",children:Object(w.jsxs)(d.a,{span:24,children:[Object(w.jsx)(i.a,{children:Object(w.jsx)(d.a,{span:24,children:Object(w.jsx)("div",{style:{margin:50},children:h})})}),Object(w.jsxs)(i.a,{justify:"start",children:[c<4&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.a,{span:2,offset:1,children:Object(w.jsx)(l.a,{type:"primary",onClick:function(){return a(c-1)},children:"Forrige"})}),Object(w.jsx)(d.a,{span:2,offset:22,children:Object(w.jsx)(l.a,{onClick:function(){return a(c+1)},type:"primary",children:"N\xe6ste"})})]}),4==c&&Object(w.jsx)(d.a,{span:2,offset:22,children:Object(w.jsx)(l.a,{onClick:function(){return a(c+1)},type:"primary",children:"F\xe6rdigg\xf8r"})})]})]})})]})},B=c(88),L=c(89);Object(g.b)({key:"kilometerState",default:0});var E=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(w.jsxs)(g.a,{children:[Object(w.jsx)(i.a,{align:"middle",justify:"center",children:Object(w.jsx)(d.a,{children:Object(w.jsx)("h1",{children:"Beregn dit k\xf8rselsfradrag"})})}),c?Object(w.jsx)(i.a,{justify:"center",align:"top",children:Object(w.jsx)(d.a,{span:20,children:Object(w.jsx)(M,{})})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsx)(d.a,{children:Object(w.jsx)(B.a,{className:"car"})})}),Object(w.jsx)(i.a,{align:"middle",justify:"center",children:Object(w.jsx)(d.a,{span:10,children:Object(w.jsxs)("p",{children:["2020 har v\xe6ret et m\xe6rkeligt \xe5r, og det kan v\xe6re sv\xe6rt at vide hvor meget man nu lige k\xf8rte til og fra arbejde.",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Her er der en simpel udregner som hj\xe6lper dig p\xe5 rette vej, s\xe5 du b\xe5de f\xe5r det fradrag du er berettiget til, men ogs\xe5 passer p\xe5 ikke at f\xe5 et skattesm\xe6k.",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Eller, m\xe5ske er det bare en hj\xe6lp til lige at regne ud hvor mange penge du f\xe5r i h\xe6nderne for dit fradrag."]})})}),Object(w.jsx)(i.a,{justify:"center",children:Object(w.jsx)(d.a,{children:Object(w.jsx)(l.a,{size:"large",type:"primary",onClick:function(){return a(!0)},icon:Object(w.jsx)(L.a,{}),children:"Start"})})})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),a(e),s(e),n(e)}))};n.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root")),A()}},[[77,1,2]]]);
//# sourceMappingURL=main.9a1bb895.chunk.js.map