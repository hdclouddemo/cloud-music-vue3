import{U as V,ab as D,r as p,o as L,q as M,z as a,C as t,M as m,a as I,x as l,a8 as S,X as T,V as U,al as B,ad as P,W as z,a2 as N,ae as Y,n as $,ah as H,ag as R,am as j,ak as q,a0 as O,a1 as W}from"./index-CjM2ZCf2.js";import{E as X,a as F}from"./tab-pane-RHqxzkb9.js";import"./index-Bbv-URMj.js";const G=i=>(O("data-v-29576a9c"),i=i(),W(),i),J={class:"album-Detail_container layout-content"},K={class:"header"},Q={class:"cover"},Z={class:"info"},aa={class:"up-box"},sa={class:"playlist-title"},ta={class:"creator"},ea={class:"created-time"},oa={class:"down-box"},na=G(()=>a("i",{class:"iconfont icon-bofang-solid"},null,-1)),la={class:"content"},ia=["innerHTML"],ca={__name:"AlbumDetail",setup(i){const v=S(),C=T(),w=D(),s=p({}),f=p([]),b=p("playlist");async function x(){const{startLoading:c,stopLoading:e}=U();try{c();const{album:n,songs:u}=await B({id:v.params.id});s.value=n,f.value=u,s.value.description=s.value.description.replace(/\n/g,"<br/>");const o=new Image;o.src=n.blurPicUrl,o.crossOrigin="Anonymous",o.onload=async()=>{const d=await new P().getColor(o);z(d),document.documentElement.style.setProperty("--body-before-opacity",1)}}finally{e()}}function k(){w.playAll(s.value.tracks)}function A(c){C.push(`/userInfo/${c}`)}return L(()=>{x()}),(c,e)=>{var y,g;const n=N,u=Y,o=j,r=F,d=q,E=X;return $(),M("div",J,[a("div",K,[a("div",Q,[t(n,{src:s.value.blurPicUrl},null,8,["src"])]),a("div",Z,[a("div",aa,[a("p",sa,m(s.value.name),1),a("div",ta,[t(n,{src:(y=s.value.artist)==null?void 0:y.picUrl},null,8,["src"]),a("span",{class:"author",onClick:e[0]||(e[0]=_=>{var h;return A((h=s.value.artist)==null?void 0:h.id)})},m((g=s.value.artist)==null?void 0:g.name),1),a("span",ea,m(I(H)(s.value.publishTime).format("YYYY-MM-DD"))+"发布",1)])]),a("div",oa,[t(u,{class:"play-all-btn",type:"primary",onClick:e[1]||(e[1]=_=>k())},{default:l(()=>[na,R(" 播放全部 ")]),_:1})])])]),a("div",la,[t(E,{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=_=>b.value=_)},{default:l(()=>[t(r,{label:"歌曲",name:"playlist",lazy:""},{default:l(()=>[t(o,{"song-list":f.value},null,8,["song-list"])]),_:1}),t(r,{label:"评论",name:"review",lazy:""},{default:l(()=>[t(d,{id:I(v).params.id,type:"2","target-type":"2"},null,8,["id"])]),_:1}),t(r,{label:"专辑详情",name:"description",lazy:""},{default:l(()=>[a("div",{class:"description",innerHTML:s.value.description},null,8,ia)]),_:1})]),_:1},8,["modelValue"])])])}}},_a=V(ca,[["__scopeId","data-v-29576a9c"]]);export{_a as default};
