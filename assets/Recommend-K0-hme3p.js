import{b as _e,i as Pe,u as He,r as p,c as z,a as e,t as de,w as J,s as ze,o as ue,d as Re,e as Oe,p as Ve,f as De,g as Ue,h as Ge,j as ge,k as te,l as ye,m as Fe,n as k,q as P,v as ee,x as F,y as Z,z as L,A as V,B as Q,C as D,E as me,D as Ke,F as x,T as he,G as j,H as We,I as Ie,J as Ce,K as re,L as ie,M as je,_ as we,N as Xe,O as Ye,P as qe,Q as Je,R as Qe,S as Ze,U as xe,V as et,W as tt,X as at,Y as st,Z as nt,$ as ot,a0 as lt,a1 as rt,a2 as it,a3 as ut,a4 as ct}from"./index-BNr6xA4Y.js";import{u as vt}from"./index-BFl8cwif.js";const ft=_e({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:{type:Boolean,default:!1}}),dt={change:(s,H)=>[s,H].every(Pe)},be=Symbol("carouselContextKey"),pe=300,mt=(s,H,o)=>{const{children:n,addChild:N,removeChild:b}=vt(ge(),"ElCarouselItem"),M=He(),a=p(-1),d=p(null),E=p(!1),_=p(),T=p(0),S=p(!0),m=p(!0),v=p(!1),I=z(()=>s.arrow!=="never"&&!e($)),R=z(()=>n.value.some(t=>t.props.label.toString().length>0)),B=z(()=>s.type==="card"),$=z(()=>s.direction==="vertical"),K=z(()=>s.height!=="auto"?{height:s.height}:{height:`${T.value}px`,overflow:"hidden"}),l=de(t=>{g(t)},pe,{trailing:!0}),i=de(t=>{U(t)},pe),C=t=>S.value?a.value<=1?t<=1:t>1:!0;function f(){d.value&&(clearInterval(d.value),d.value=null)}function w(){s.interval<=0||!s.autoplay||d.value||(d.value=setInterval(()=>O(),s.interval))}const O=()=>{m.value||(v.value=!0),m.value=!1,a.value<n.value.length-1?a.value=a.value+1:s.loop&&(a.value=0)};function g(t){if(m.value||(v.value=!0),m.value=!1,De(t)){const W=n.value.filter(G=>G.props.name===t);W.length>0&&(t=n.value.indexOf(W[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const u=n.value.length,A=a.value;t<0?a.value=s.loop?u-1:0:t>=u?a.value=s.loop?0:u-1:a.value=t,A===a.value&&r(A),ce()}function r(t){n.value.forEach((u,A)=>{u.translateItem(A,a.value,t)})}function X(t,u){var A,W,G,Y;const q=e(n),ve=q.length;if(ve===0||!t.states.inStage)return!1;const $e=u+1,Ne=u-1,fe=ve-1,Be=q[fe].states.active,Me=q[0].states.active,Le=(W=(A=q[$e])==null?void 0:A.states)==null?void 0:W.active,Ae=(Y=(G=q[Ne])==null?void 0:G.states)==null?void 0:Y.active;return u===fe&&Me||Le?"left":u===0&&Be||Ae?"right":!1}function ae(){E.value=!0,s.pauseOnHover&&f()}function se(){E.value=!1,w()}function ne(){v.value=!1}function h(t){e($)||n.value.forEach((u,A)=>{t===X(u,A)&&(u.states.hover=!0)})}function c(){e($)||n.value.forEach(t=>{t.states.hover=!1})}function y(t){t!==a.value&&(m.value||(v.value=!0)),a.value=t}function U(t){s.trigger==="hover"&&t!==a.value&&(a.value=t,m.value||(v.value=!0))}function oe(){g(a.value-1)}function ke(){g(a.value+1)}function ce(){f(),s.pauseOnHover||w()}function Ee(t){s.height==="auto"&&(T.value=t)}function Te(){var t;const u=(t=M.default)==null?void 0:t.call(M);if(!u)return null;const A=Ue(u),W="ElCarouselItem",G=A.filter(Y=>Ge(Y)&&Y.type.name===W);return(G==null?void 0:G.length)===2&&s.loop&&!B.value?(S.value=!0,G):(S.value=!1,null)}J(()=>a.value,(t,u)=>{r(u),S.value&&(t=t%2,u=u%2),u>-1&&H("change",t,u)}),J(()=>s.autoplay,t=>{t?w():f()}),J(()=>s.loop,()=>{g(a.value)}),J(()=>s.interval,()=>{ce()});const le=ze();return ue(()=>{J(()=>n.value,()=>{n.value.length>0&&g(s.initialIndex)},{immediate:!0}),le.value=Re(_.value,()=>{r()}),w()}),Oe(()=>{f(),_.value&&le.value&&le.value.stop()}),Ve(be,{root:_,isCardType:B,isVertical:$,items:n,loop:s.loop,addItem:N,removeItem:b,setActiveItem:g,setContainerHeight:Ee}),{root:_,activeIndex:a,arrowDisplay:I,hasLabel:R,hover:E,isCardType:B,isTransitioning:v,items:n,isVertical:$,containerStyle:K,isItemsTwoLength:S,handleButtonEnter:h,handleTransitionEnd:ne,handleButtonLeave:c,handleIndicatorClick:y,handleMouseEnter:ae,handleMouseLeave:se,setActiveItem:g,prev:oe,next:ke,PlaceholderItem:Te,isTwoLengthShow:C,throttledArrowClick:l,throttledIndicatorHover:i}},ht=["aria-label"],pt=["aria-label"],_t=["onMouseenter","onClick"],gt=["aria-label"],yt={key:0},It={key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},Ct=L("defs",null,[L("filter",{id:"elCarouselHorizontal"},[L("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),L("filter",{id:"elCarouselVertical"},[L("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])],-1),wt=[Ct],bt="ElCarousel",St=te({name:bt}),kt=te({...St,props:ft,emits:dt,setup(s,{expose:H,emit:o}){const n=s,{root:N,activeIndex:b,arrowDisplay:M,hasLabel:a,hover:d,isCardType:E,items:_,isVertical:T,containerStyle:S,handleButtonEnter:m,handleButtonLeave:v,isTransitioning:I,handleIndicatorClick:R,handleMouseEnter:B,handleMouseLeave:$,handleTransitionEnd:K,setActiveItem:l,prev:i,next:C,PlaceholderItem:f,isTwoLengthShow:w,throttledArrowClick:O,throttledIndicatorHover:g}=mt(n,o),r=ye("carousel"),{t:X}=Fe(),ae=z(()=>{const h=[r.b(),r.m(n.direction)];return e(E)&&h.push(r.m("card")),h}),se=z(()=>{const h=[r.e("container")];return n.motionBlur&&e(I)&&h.push(e(T)?`${r.namespace.value}-transitioning-vertical`:`${r.namespace.value}-transitioning`),h}),ne=z(()=>{const h=[r.e("indicators"),r.em("indicators",n.direction)];return e(a)&&h.push(r.em("indicators","labels")),n.indicatorPosition==="outside"&&h.push(r.em("indicators","outside")),e(T)&&h.push(r.em("indicators","right")),h});return H({setActiveItem:l,prev:i,next:C}),(h,c)=>(k(),P("div",{ref_key:"root",ref:N,class:V(e(ae)),onMouseenter:c[7]||(c[7]=Q((...y)=>e(B)&&e(B)(...y),["stop"])),onMouseleave:c[8]||(c[8]=Q((...y)=>e($)&&e($)(...y),["stop"]))},[e(M)?(k(),ee(he,{key:0,name:"carousel-arrow-left",persisted:""},{default:F(()=>[Z(L("button",{type:"button",class:V([e(r).e("arrow"),e(r).em("arrow","left")]),"aria-label":e(X)("el.carousel.leftArrow"),onMouseenter:c[0]||(c[0]=y=>e(m)("left")),onMouseleave:c[1]||(c[1]=(...y)=>e(v)&&e(v)(...y)),onClick:c[2]||(c[2]=Q(y=>e(O)(e(b)-1),["stop"]))},[D(e(me),null,{default:F(()=>[D(e(Ke))]),_:1})],42,ht),[[x,(h.arrow==="always"||e(d))&&(n.loop||e(b)>0)]])]),_:1})):j("v-if",!0),e(M)?(k(),ee(he,{key:1,name:"carousel-arrow-right",persisted:""},{default:F(()=>[Z(L("button",{type:"button",class:V([e(r).e("arrow"),e(r).em("arrow","right")]),"aria-label":e(X)("el.carousel.rightArrow"),onMouseenter:c[3]||(c[3]=y=>e(m)("right")),onMouseleave:c[4]||(c[4]=(...y)=>e(v)&&e(v)(...y)),onClick:c[5]||(c[5]=Q(y=>e(O)(e(b)+1),["stop"]))},[D(e(me),null,{default:F(()=>[D(e(We))]),_:1})],42,pt),[[x,(h.arrow==="always"||e(d))&&(n.loop||e(b)<e(_).length-1)]])]),_:1})):j("v-if",!0),L("div",{class:V(e(se)),style:Ce(e(S)),onTransitionend:c[6]||(c[6]=(...y)=>e(K)&&e(K)(...y))},[D(e(f)),Ie(h.$slots,"default")],38),h.indicatorPosition!=="none"?(k(),P("ul",{key:2,class:V(e(ne))},[(k(!0),P(re,null,ie(e(_),(y,U)=>Z((k(),P("li",{key:U,class:V([e(r).e("indicator"),e(r).em("indicator",h.direction),e(r).is("active",U===e(b))]),onMouseenter:oe=>e(g)(U),onClick:Q(oe=>e(R)(U),["stop"])},[L("button",{class:V(e(r).e("button")),"aria-label":e(X)("el.carousel.indicator",{index:U+1})},[e(a)?(k(),P("span",yt,je(y.props.label),1)):j("v-if",!0)],10,gt)],42,_t)),[[x,e(w)(U)]])),128))],2)):j("v-if",!0),n.motionBlur?(k(),P("svg",It,wt)):j("v-if",!0)],34))}});var Et=we(kt,[["__file","carousel.vue"]]);const Tt=_e({name:{type:String,default:""},label:{type:[String,Number],default:""}}),$t=(s,H)=>{const o=Xe(be),n=ge(),N=.83,b=p(),M=p(!1),a=p(0),d=p(1),E=p(!1),_=p(!1),T=p(!1),S=p(!1),{isCardType:m,isVertical:v}=o;function I(l,i,C){const f=C-1,w=i-1,O=i+1,g=C/2;return i===0&&l===f?-1:i===f&&l===0?C:l<w&&i-l>=g?C+1:l>O&&l-i>=g?-2:l}function R(l,i){var C,f;const w=e(v)?((C=o.root.value)==null?void 0:C.offsetHeight)||0:((f=o.root.value)==null?void 0:f.offsetWidth)||0;return T.value?w*((2-N)*(l-i)+1)/4:l<i?-(1+N)*w/4:(3+N)*w/4}function B(l,i,C){const f=o.root.value;return f?((C?f.offsetHeight:f.offsetWidth)||0)*(l-i):0}const $=(l,i,C)=>{var f;const w=e(m),O=(f=o.items.value.length)!=null?f:Number.NaN,g=l===i;!w&&!Je(C)&&(S.value=g||l===C),!g&&O>2&&o.loop&&(l=I(l,i,O));const r=e(v);E.value=g,w?(T.value=Math.round(Math.abs(l-i))<=1,a.value=R(l,i),d.value=e(E)?1:N):a.value=B(l,i,r),_.value=!0,g&&b.value&&o.setContainerHeight(b.value.offsetHeight)};function K(){if(o&&e(m)){const l=o.items.value.findIndex(({uid:i})=>i===n.uid);o.setActiveItem(l)}}return ue(()=>{o.addItem({props:s,states:Ye({hover:M,translate:a,scale:d,active:E,ready:_,inStage:T,animating:S}),uid:n.uid,translateItem:$})}),qe(()=>{o.removeItem(n.uid)}),{carouselItemRef:b,active:E,animating:S,hover:M,inStage:T,isVertical:v,translate:a,isCardType:m,scale:d,ready:_,handleItemClick:K}},Nt=te({name:"ElCarouselItem"}),Bt=te({...Nt,props:Tt,setup(s){const H=s,o=ye("carousel"),{carouselItemRef:n,active:N,animating:b,hover:M,inStage:a,isVertical:d,translate:E,isCardType:_,scale:T,ready:S,handleItemClick:m}=$t(H),v=z(()=>[o.e("item"),o.is("active",N.value),o.is("in-stage",a.value),o.is("hover",M.value),o.is("animating",b.value),{[o.em("item","card")]:_.value,[o.em("item","card-vertical")]:_.value&&d.value}]),I=z(()=>{const B=`${`translate${e(d)?"Y":"X"}`}(${e(E)}px)`,$=`scale(${e(T)})`;return{transform:[B,$].join(" ")}});return(R,B)=>Z((k(),P("div",{ref_key:"carouselItemRef",ref:n,class:V(e(v)),style:Ce(e(I)),onClick:B[0]||(B[0]=(...$)=>e(m)&&e(m)(...$))},[e(_)?Z((k(),P("div",{key:0,class:V(e(o).e("mask"))},null,2)),[[x,!e(N)]]):j("v-if",!0),Ie(R.$slots,"default")],6)),[[x,e(S)]])}});var Se=we(Bt,[["__file","carousel-item.vue"]]);const Mt=Qe(Et,{CarouselItem:Se}),Lt=Ze(Se),At=s=>(lt("data-v-6e940c04"),s=s(),rt(),s),Pt={class:"recommend_wrapper layout-content"},Ht={class:"banner"},zt={class:"recommend-playlist"},Rt=At(()=>L("div",{class:"title"}," 推荐歌单 ",-1)),Ot={__name:"Recommend",setup(s){const H=at(),o=p([]),n=p([]);async function N(){const a=await st();o.value=a.banners}async function b(){const{result:a}=await nt();n.value=a}function M(a){H.push(`/playlistDetail/${a.id}`)}return ue(()=>{const{startLoading:a,stopLoading:d}=et();a(),Promise.all([N(),b()]).then(d),tt()}),(a,d)=>{const E=it,_=Lt,T=Mt,S=ut,m=ct,v=ot;return k(),P("div",Pt,[L("div",Ht,[D(T,{interval:4e3,type:"card",height:"200px"},{default:F(()=>[(k(!0),P(re,null,ie(o.value,I=>(k(),ee(_,{key:I.targetId},{default:F(()=>[D(E,{style:{width:"100%",height:"220px","border-radius":"10px"},src:I.imageUrl,lazy:""},null,8,["src"])]),_:2},1024))),128))]),_:1})]),L("div",zt,[Rt,D(v,{gutter:30},{default:F(()=>[(k(!0),P(re,null,ie(n.value,I=>(k(),ee(m,{key:I.id,span:4},{default:F(()=>[D(S,{"cover-url":I.picUrl,"play-count":I.playCount,name:I.name,onClick:R=>M(I)},null,8,["cover-url","play-count","name","onClick"])]),_:2},1024))),128))]),_:1})])])}}},Ut=xe(Ot,[["__scopeId","data-v-6e940c04"]]);export{Ut as default};