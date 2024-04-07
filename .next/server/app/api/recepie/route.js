"use strict";(()=>{var e={};e.id=676,e.ids=[676],e.modules={5890:e=>{e.exports=require("better-sqlite3")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7921:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>m,originalPathname:()=>f,patchFetch:()=>_,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>g});var a={};t.r(a),t.d(a,{GET:()=>u});var i=t(5419),n=t(9108),s=t(9678),o=t(342);async function u(e){let r=new URL(e.url).searchParams.get("id");if(!r)return Response.json({data:null});let t=(0,o.getById)(r);return Response.json({data:t})}let p=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/recepie/route",pathname:"/api/recepie",filename:"route",bundlePath:"app/api/recepie/route"},resolvedPagePath:"C:\\Users\\yagiz\\Desktop\\recepie-share-app\\app\\api\\recepie\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:d,headerHooks:m,staticGenerationBailout:g}=p,f="/api/recepie/route";function _(){return(0,s.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}},5419:(e,r,t)=>{e.exports=t(517)},342:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});let a=(0,t(6783)._(t(5890)).default)("meals.db");e.exports={getAllMeals:function(){return a.prepare("SELECT * FROM meals").all()},getById:function(e){return a.prepare("SELECT * FROM meals WHERE id = (?);").get(e)},insertMeal:function(e){a.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(e)}}},6783:(e,r,t)=>{function a(e){return e&&e.__esModule?e:{default:e}}t.r(r),t.d(r,{_:()=>a,_interop_require_default:()=>a})}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638],()=>t(7921));module.exports=a})();