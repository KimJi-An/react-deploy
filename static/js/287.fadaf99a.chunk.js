"use strict";(self.webpackChunkkakao_tech_campus_frontend_project=self.webpackChunkkakao_tech_campus_frontend_project||[]).push([[287],{287:(t,e,a)=>{a.d(e,{worker:()=>l});var n=a(8689),s=a(8840);const d=[n.rest.post("".concat(s.C1,"/api/members/register"),(async(t,e,a)=>(alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e(a.status(201),a.json({message:"User registered successfully"}))))),n.rest.post("https://api.example.com/api/members/login",(async(t,e,a)=>{const{email:n,password:s}=await t.json();return"test@example.com"===n&&"password1234"===s?e(a.status(200),a.json({token:"fake-token"})):e(a.status(403),a.json({message:"Invalid email or password"}))}))];var m=a(4456);const r=[n.rest.get((0,m.oX)(),((t,e,a)=>e(a.status(200),a.json(o))))],o=[{id:2920,name:"\uc0dd\uc77c",description:"\uac10\ub3d9\uc744 \ub192\uc5ec\uc904 \uc0dd\uc77c \uc120\ubb3c \ub9ac\uc2a4\ud2b8",color:"#5949a3",imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"},{id:2930,name:"\uad50\ud658\uad8c",description:"\ub193\uce58\uba74 \ud6c4\ud68c\ud560 \uad50\ud658\uad8c \ud2b9\uac00",color:"#9290C3",imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240131153049_5a22b137a8d346e9beb020a7a7f4254a.jpg"}];var i=a(4715),c=a(2382),p=a(5569);const u=[n.rest.get((0,p.Gm)({categoryId:"2920"}),((t,e,a)=>e(a.status(200),a.json(g)))),n.rest.get((0,p.Gm)({categoryId:"2930"}),((t,e,a)=>e(a.status(200),a.json(g)))),n.rest.get((0,i.oR)(":productId"),((t,e,a)=>e(a.status(200),a.json(g.content[0])))),n.rest.get((0,c.HQ)(":productId"),((t,e,a)=>e(a.status(200),a.json([{id:1,name:"Option A",quantity:10},{id:2,name:"Option B",quantity:20}]))))],g={content:[{id:3245119,name:"[\ub2e8\ub3c5\uac01\uc778] \ud53c\ub80c\uccb4 1221 \uc5d0\ub514\uc158 \uc624\ub4dc\ucf54\ub871 50ml (13\uc885 \ud0dd1)",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240215083306_8e1db057580145829542463a84971ae3.png",price:145e3,categoryId:"2920"},{id:2263833,name:"\uc678\uc2dd \ud1b5\ud569\uad8c 10\ub9cc\uc6d0\uad8c",imageUrl:"https://st.kakaocdn.net/product/gift/product/20200513102805_4867c1e4a7ae43b5825e9ae14e2830e3.png",price:1e5,categoryId:"2920"},{id:6502823,name:"[\uc120\ubb3c\ud3ec\uc7a5/\ubbf8\ub2c8\ud37c\ud4f8\uc99d\uc815] \ub514\ucf04\ud130 \ub9ac\ub4dc \ub514\ud4e8\uc800 300ml + \uba54\uc138\uc9c0\uce74\ub4dc",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240215112140_11f857e972bc4de6ac1d2f1af47ce182.jpg",price:108e3,categoryId:"2920"},{id:1181831,name:"[\uc120\ubb3c\ud3ec\uc7a5] \uc18c\ubc14\uc96c \uc624 \ub4dc \ub69c\uc648\ub81b 60ML",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240214150740_ad25267defa64912a7c030a7b57dc090.jpg",price:122e3,categoryId:"2920"},{id:1379982,name:"[\uc815\uad00\uc7a5] \ud64d\uc0bc\uc815 \uc5d0\ube0c\ub9ac\ud0c0\uc784 \ub9ac\ubbf8\ud2f0\ub4dc (10ml x 30\ud3ec)",imageUrl:"https://st.kakaocdn.net/product/gift/product/20240118135914_a6e1a7442ea04aa49add5e02ed62b4c3.jpg",price:133e3,categoryId:"2920"}],pageable:{offset:0,sort:{empty:!1,unsorted:!0,sorted:!1},unpaged:!1,paged:!0,pageSize:10,pageNumber:0},last:!0,totalPages:1,totalElements:5,size:10,number:0,sort:{empty:!1,unsorted:!0,sorted:!1},first:!0,numberOfElements:5,empty:!1},h=[n.rest.get("".concat(s.C1,"/api/wishes"),(async(t,e,a)=>{if(!t.headers.get("Authorization"))return e(a.status(401),a.json({message:"Invalid or missing token"}));const n=parseInt(t.url.searchParams.get("page")||"0",10),s=parseInt(t.url.searchParams.get("size")||"10",10),d=((t,e)=>{const a=t*e,n=a+e;return F.content.slice(a,n)})(n,s),m=F.content.length,r=Math.ceil(m/s);return e(a.status(200),a.json({content:d.map((t=>({id:t.id,name:t.product.name,price:t.product.price,imageUrl:t.product.imageUrl}))),pageable:{sort:{sorted:!0,unsorted:!1,empty:!1},pageNumber:n,pageSize:s,offset:n*s,unpaged:!1,paged:!0},totalPages:r,totalElements:m,last:n+1===r,number:n,size:s,numberOfElements:d.length,first:0===n,empty:0===d.length}))})),n.rest.delete("".concat(s.C1,"/api/wishes/:wishId"),((t,e,a)=>{const{wishId:n}=t.params,s=F.content.findIndex((t=>t.id===Number(n)));return-1!==s?(F.content.splice(s,1),e(a.status(204))):e(a.status(404),a.json({message:"Wish not found"}))})),n.rest.post("".concat(s.C1,"/api/wishes/:productId"),((t,e,a)=>{const{productId:n}=t.params;if(!t.headers.get("Authorization"))return e(a.status(401),a.json({message:"Invalid or missing token"}));if(F.content.find((t=>t.product.id===Number(n))))return e(a.status(400),a.json({message:"Product already in wishlist"}));const s={id:F.content.length+1,product:{id:Number(n),name:"Product ".concat(String.fromCharCode(65+F.content.length)),price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}};return F.content.push(s),e(a.status(201),a.json(s))}))],F={content:[{id:1,product:{id:1,name:"Product A",price:100,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:2,product:{id:2,name:"Product B",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:3,product:{id:3,name:"Product C",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:4,product:{id:4,name:"Product D",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:5,product:{id:5,name:"Product E",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:6,product:{id:6,name:"Product F",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:7,product:{id:7,name:"Product G",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:8,product:{id:8,name:"Product H",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:9,product:{id:9,name:"Product I",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:10,product:{id:10,name:"Product J",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}},{id:11,product:{id:11,name:"Product K",price:150,imageUrl:"https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"}}],pageable:{sort:{sorted:!0,unsorted:!1,empty:!1},pageNumber:0,pageSize:10,offset:0,unpaged:!1,paged:!0},totalPages:5,totalElements:50,last:!1,number:0,size:10,numberOfElements:2,first:!0,empty:!1},l=(0,n.setupWorker)(...r,...u,...d,...h)}}]);
//# sourceMappingURL=287.fadaf99a.chunk.js.map