(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{8978:function(e,t,n){Promise.resolve().then(n.bind(n,3093))},3093:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),i=n(2265),s=n(1279),a=n.n(s),u=n(7907),c=n(6123),l=n(4887);n(5355);var o=(0,n(3472).$)("285c460f4d946d9fb1550aa007bb5ce84d00ef96");function m(){(0,u.useRouter)(),(0,i.useRef)();let[e,t]=(0,i.useState)(null),n=(0,i.useRef)(),s=e=>c.toast.error(e),[m,f]=(0,l.useFormState)(o,{message:null});return(0,i.useEffect)(()=>{let e=m.message;e&&s(e)},[m]),(0,r.jsx)("form",{action:f,children:(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)("label",{children:"title"}),(0,r.jsx)("input",{type:"text",name:"title",maxLength:20}),(0,r.jsx)("label",{children:"summary"}),(0,r.jsx)("textarea",{name:"summary"}),(0,r.jsx)("label",{children:"instructions"}),(0,r.jsx)("textarea",{name:"instructions",className:a().instructions}),(0,r.jsx)("label",{children:"creator name"}),(0,r.jsx)("input",{type:"text",name:"creator",maxLength:20}),(0,r.jsx)("label",{children:"creator email"}),(0,r.jsx)("input",{type:"text",name:"creatoremail"}),(0,r.jsx)("label",{children:"select image"}),(0,r.jsx)("input",{type:"file",accept:"image/png, image/jpeg, image/jpg",className:a().fileinput,ref:n,onChange:function(e){let[r]=n.current.files;r&&t(URL.createObjectURL(r))},name:"image"}),(0,r.jsx)("button",{type:"button",className:a().btnfile,onClick:function(){n.current.click()},children:"select file"}),(0,r.jsx)("label",{children:"img preview"}),(0,r.jsx)("div",{className:a().preview,children:e?(0,r.jsx)("img",{src:e}):(0,r.jsx)("p",{children:"no img selected"})}),(0,r.jsx)("label",{children:"submit"}),(0,r.jsx)("button",{type:"submit",className:a().btnsubmit,children:"submit"})]})})}},7907:function(e,t,n){"use strict";var r=n(5313);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},3472:function(e,t,n){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let r=n(5355);function i(e){let{createServerReference:t}=n(6671);return t(e,r.callServer)}},1279:function(e){e.exports={container:"forum_container__SkoXU",instructions:"forum_instructions__R9Egz",fileinput:"forum_fileinput__M6vaJ",btnfile:"forum_btnfile__NO0rz",btnsubmit:"forum_btnsubmit__PzrTA",preview:"forum_preview__mJU71"}}},function(e){e.O(0,[123,971,69,744],function(){return e(e.s=8978)}),_N_E=e.O()}]);