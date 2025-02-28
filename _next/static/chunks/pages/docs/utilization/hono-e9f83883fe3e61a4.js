(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{682:(i,s,t)=>{"use strict";t.d(s,{O:()=>e});let e=[{data:{index:{title:"Introduction",type:"page",hidden:!0,display:"hidden"},docs:{title:"\uD83D\uDCD6 Guide Documents",type:"page"},playground:{title:"\uD83D\uDCBB Playground",type:"page"}}},{name:"docs",route:"/docs",children:[{data:{index:"\uD83D\uDE4B\uD83C\uDFFB‍♂️ Introduction",setup:"\uD83D\uDCE6 Setup",pure:"⛲ Pure TypeScript","-- features":{type:"separator",title:"\uD83D\uDCD6 Features"},validators:"Runtime Validators",json:"Enhanced JSON",llm:"LLM Function Calling",protobuf:"Protocol Buffer",random:"Random Generator",misc:"Miscellaneous","-- appendix":{type:"separator",title:"\uD83D\uDD17 Appendix"},utilization:"Utilization Cases",api:{title:"⇲ API Documents",href:"/api",newWindow:!0},benchmark:{title:"⇲ Benchmark Result",href:"https://github.com/samchon/typia/tree/master/benchmark/results/AMD%20Ryzen%209%207940HS%20w%20Radeon%20780M%20Graphics",newWindow:!0},articles:{title:"⇲ dev.to Articles",href:"https://dev.to/samchon/series/22474",newWindow:!0}}},{name:"index",route:"/docs",frontMatter:{title:"Guide Documents > Introduction"}},{name:"json",route:"/docs/json",children:[{data:{schema:"JSON Schema",stringify:"stringify() functions",parse:"parse() functions"}},{name:"parse",route:"/docs/json/parse",frontMatter:{title:"Guide Documents > JSON < parse() functions"}},{name:"schema",route:"/docs/json/schema",frontMatter:{title:"Guide Documents > JSON > Schema"}},{name:"stringify",route:"/docs/json/stringify",frontMatter:{title:"Guide Documents > JSON > stringify() function"}}]},{name:"llm",route:"/docs/llm",children:[{data:{application:"application() functions",parameters:"parameters() function",schema:"schema() function",chat:"AI Chatbot Development",strategy:"Documentation Strategy"}},{name:"application",route:"/docs/llm/application",frontMatter:{title:"Guide Documents > Large Language Model > application() function"}},{name:"chat",route:"/docs/llm/chat",frontMatter:{title:"Guide Documents > Large Language Model > AI Chatbot Development"}},{name:"parameters",route:"/docs/llm/parameters",frontMatter:{title:"Guide Documents > Large Language Model > parameters() function"}},{name:"schema",route:"/docs/llm/schema",frontMatter:{title:"Guide Documents > Large Language Model > schema() function"}},{name:"strategy",route:"/docs/llm/strategy",frontMatter:{title:"Guide Documents > Large Language Model > Documentation Strategy"}}]},{name:"misc",route:"/docs/misc",frontMatter:{title:"Guide Documents > Miscellaneous"}},{name:"protobuf",route:"/docs/protobuf",children:[{data:{message:"Message Schema",encode:"encode() functions",decode:"decode() functions"}},{name:"decode",route:"/docs/protobuf/decode",frontMatter:{title:"Guide Documents > Protobuf > decode() functions"}},{name:"encode",route:"/docs/protobuf/encode",frontMatter:{title:"Guide Documents > Protobuf > encode() functions"}},{name:"message",route:"/docs/protobuf/message",frontMatter:{title:"Guide Documents > Protobuf > Schema"}}]},{name:"pure",route:"/docs/pure",frontMatter:{title:"Guide Documents > Pure TypeScript Type"}},{name:"random",route:"/docs/random",frontMatter:{title:"Guide Documents > random() function"}},{name:"setup",route:"/docs/setup",frontMatter:{title:"Guide Documents > Setup"}},{name:"utilization",route:"/docs/utilization",children:[{data:{nestjs:"NestJS",prisma:"Prisma",trpc:"tRPC",hono:"Hono"}},{name:"hono",route:"/docs/utilization/hono",frontMatter:{title:"Guide Documents > Utilization Cases > Hono"}},{name:"nestjs",route:"/docs/utilization/nestjs",frontMatter:{title:"Guide Documents > Utilization Cases > NestJS"}},{name:"prisma",route:"/docs/utilization/prisma",frontMatter:{title:"Guide Documents > Utilization Cases > Prisma"}},{name:"trpc",route:"/docs/utilization/trpc",frontMatter:{title:"Guide Documents > Utilization Cases > tRPC"}}]},{name:"validators",route:"/docs/validators",children:[{data:{assert:"assert() function",is:"is() function",validate:"validate() function",functional:"Functional Module",tags:"Special Tags"}},{name:"assert",route:"/docs/validators/assert",frontMatter:{title:"Guide Documents > Runtime Validators > assert() functions"}},{name:"functional",route:"/docs/validators/functional",frontMatter:{title:"Guide Documents > Runtime Validators > Functional Module"}},{name:"is",route:"/docs/validators/is",frontMatter:{title:"Guide Documents > Runtime Validators > is() functions"}},{name:"tags",route:"/docs/validators/tags",frontMatter:{title:"Guide Documents > Runtime Validators > Special Tags"}},{name:"validate",route:"/docs/validators/validate",frontMatter:{title:"Guide Documents > Runtime Validators > validate() functions"}}]}]},{name:"index",route:"/",frontMatter:{title:"Home"}},{name:"playground",route:"/playground",children:[{data:{index:{title:"Typia Playground",theme:{layout:"raw",footer:!1}}}},{name:"index",route:"/playground",frontMatter:{title:"Playground"}}]}]},5072:(i,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/utilization/hono",function(){return t(5429)}])},5429:(i,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h,useTOC:()=>l});var e=t(7876),n=t(1807),a=t(682),r=t(9707);function l(i){return[]}let h=(0,n.e)(function(i){let s={a:"a",code:"code",p:"p",pre:"pre",span:"span",...(0,r.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.a,{href:"https://hono.dev",children:"Hono"})," is a small, simple, and ultrafast web framework for the Edges."]}),"\n",(0,e.jsxs)(s.p,{children:["If you are using ",(0,e.jsx)(s.code,{children:"Hono"})," with ",(0,e.jsx)(s.code,{children:"typia"}),", you can use ",(0,e.jsxs)(s.a,{href:"https://github.com/honojs/middleware/tree/main/packages/typia-validator",children:[" ",(0,e.jsx)(s.code,{children:"@hono/typia-validator"})," "]})," to validate the request body."]}),"\n",(0,e.jsx)(s.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(s.code,{"data-line-numbers":"","data-line-numbers-max-digits":"2",children:[(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { Hono } "}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "hono"'}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { typiaValidator } "}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@hono/typia-validator'"})]}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" typia, { "}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"type"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" tags } "}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "typia"'}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(s.span,{children:" "}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { IBbsArticle } "}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "../structures/IBbsArticle"'}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsx)(s.span,{children:" "}),"\n",(0,e.jsx)(s.span,{"data-highlighted-line":"",children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"/** create a validate function */"})}),"\n",(0,e.jsxs)(s.span,{"data-highlighted-line":"",children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" validate"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" typia."}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"createValidate"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"IBbsArticle"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">();"})]}),"\n",(0,e.jsx)(s.span,{children:" "}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" app"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" new"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Hono"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,e.jsx)(s.span,{children:" "}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"app."}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"post"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"/"'}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,e.jsxs)(s.span,{"data-highlighted-line":"",children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  typiaValidator"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'json'"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", validate),"})]}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ("}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"c"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" data"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" c.req."}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"valid"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"json"'}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" c."}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"json"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,e.jsx)(s.span,{children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      id: data.id,"})}),"\n",(0,e.jsx)(s.span,{children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      title: data.title,"})}),"\n",(0,e.jsx)(s.span,{children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      body: data.body,"})}),"\n",(0,e.jsx)(s.span,{children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      created_at: data.created_at,"})}),"\n",(0,e.jsx)(s.span,{children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    });"})}),"\n",(0,e.jsx)(s.span,{children:(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  });"})}),"\n",(0,e.jsx)(s.span,{children:" "}),"\n",(0,e.jsxs)(s.span,{children:[(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,e.jsx)(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" app;"})]})]})})]})},"/docs/utilization/hono",{filePath:"pages/docs/utilization/hono.mdx",timestamp:1740713623e3,pageMap:a.O,frontMatter:{title:"Guide Documents > Utilization Cases > Hono"},title:"Guide Documents > Utilization Cases > Hono"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[1807,636,6593,8792],()=>s(5072)),_N_E=i.O()}]);