(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{3658:function(e,t,n){Promise.resolve().then(n.bind(n,7023))},2092:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(7437),r=n(1438),a=n.n(r);function c(){return(0,s.jsx)("span",{className:a().loader})}},7023:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(7437),r=n(7616),a=n.n(r),c=n(2265),i=n(7907),o=n(2092),l=n(3663).lW;function u(){let e=(0,i.useRouter)(),t=(0,i.useSearchParams)(),n=t.get("image"),r=t.get("id"),[u,f]=(0,c.useState)(null),[_,d]=(0,c.useState)(null),[h,p]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{p(!0),fetch("api/meals?image=".concat(n)).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{let t=JSON.parse(e.data);t=t.data,f(t=new l.from(t).toString("base64"))}).finally(()=>{p(!1)})},[n]),(0,c.useEffect)(()=>{fetch("api/recepie?id=".concat(r)).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{d(e.data)})},[r]),(0,s.jsxs)("div",{className:a().card,children:[h?(0,s.jsx)(o.Z,{}):(0,s.jsx)("img",{src:"data:image/*;base64,".concat(u),alt:"meal img"}),_&&(0,s.jsx)("p",{className:a().title,children:_.title}),(0,s.jsx)("p",{className:a().recepie,children:_&&_.instructions}),(0,s.jsx)("button",{className:a().btn,onClick:function(){e.push("/",{scroll:!1})},children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,s.jsx)("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})]})}},1438:function(e){e.exports={loader:"spinner_loader__7f7b4",rotation:"spinner_rotation__7SaE9"}},7616:function(e){e.exports={card:"meal_card__LB_de",recepie:"meal_recepie__9_Aj6",btn:"meal_btn__d7Rbj",title:"meal_title__ECwhX"}}},function(e){e.O(0,[192,971,69,744],function(){return e(e.s=3658)}),_N_E=e.O()}]);