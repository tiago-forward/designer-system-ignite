import{R as f,r as m}from"./index-B-o1Wr-g.js";import{j as E}from"./jsx-runtime-j_jdvEMj.js";import{r as qe}from"./index-BDlsjaCx.js";var S="colors",w="sizes",g="space",Se={gap:g,gridGap:g,columnGap:g,gridColumnGap:g,rowGap:g,gridRowGap:g,inset:g,insetBlock:g,insetBlockEnd:g,insetBlockStart:g,insetInline:g,insetInlineEnd:g,insetInlineStart:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,marginBlock:g,marginBlockEnd:g,marginBlockStart:g,marginInline:g,marginInlineEnd:g,marginInlineStart:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,paddingBlock:g,paddingBlockEnd:g,paddingBlockStart:g,paddingInline:g,paddingInlineEnd:g,paddingInlineStart:g,top:g,right:g,bottom:g,left:g,scrollMargin:g,scrollMarginTop:g,scrollMarginRight:g,scrollMarginBottom:g,scrollMarginLeft:g,scrollMarginX:g,scrollMarginY:g,scrollMarginBlock:g,scrollMarginBlockEnd:g,scrollMarginBlockStart:g,scrollMarginInline:g,scrollMarginInlineEnd:g,scrollMarginInlineStart:g,scrollPadding:g,scrollPaddingTop:g,scrollPaddingRight:g,scrollPaddingBottom:g,scrollPaddingLeft:g,scrollPaddingX:g,scrollPaddingY:g,scrollPaddingBlock:g,scrollPaddingBlockEnd:g,scrollPaddingBlockStart:g,scrollPaddingInline:g,scrollPaddingInlineEnd:g,scrollPaddingInlineStart:g,fontSize:"fontSizes",background:S,backgroundColor:S,backgroundImage:S,borderImage:S,border:S,borderBlock:S,borderBlockEnd:S,borderBlockStart:S,borderBottom:S,borderBottomColor:S,borderColor:S,borderInline:S,borderInlineEnd:S,borderInlineStart:S,borderLeft:S,borderLeftColor:S,borderRight:S,borderRightColor:S,borderTop:S,borderTopColor:S,caretColor:S,color:S,columnRuleColor:S,fill:S,outline:S,outlineColor:S,stroke:S,textDecorationColor:S,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ke=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,V=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Ke))(t);return o in e?e[o]:e[o]=r(t,...n)}},M=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ue=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Je}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Xe=/\s+(?![^()]*\))/,F=e=>t=>e(...typeof t=="string"?String(t).split(Xe):[t]),fe={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:F((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:F((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:F((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:F((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:F((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:F((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,Qe=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,et=(e,t)=>e in tt&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ne(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ne(e)}:${n}fit-content`)+i):String(t),tt={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},A=e=>e?e+"-":"",ke=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,a)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?A(t)+(a.includes("$")?"":A(r))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),rt=/\s*,\s*(?![^()]*\))/,nt=Object.prototype.toString,D=(e,t,r,n,o)=>{let i,l,a;const s=(d,h,u)=>{let c,p;const b=k=>{for(c in k){const v=c.charCodeAt(0)===64,R=v&&Array.isArray(k[c])?k[c]:[k[c]];for(p of R){const C=/[A-Z]/.test(x=c)?x:x.replace(/-[^]/g,I=>I[1].toUpperCase()),U=typeof p=="object"&&p&&p.toString===nt&&(!n.utils[C]||!h.length);if(C in n.utils&&!U){const I=n.utils[C];if(I!==l){l=I,b(I(p)),l=null;continue}}else if(C in fe){const I=fe[C];if(I!==a){a=I,b(I(p)),a=null;continue}}if(v&&(y=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(I,z,P,W,B,j)=>{const _=re.test(z),q=.0625*(_?-1:1),[K,de]=_?[W,z]:[z,W];return"("+(P[0]==="="?"":P[0]===">"===_?"max-":"min-")+K+":"+(P[0]!=="="&&P.length===1?de.replace(re,(Ze,ee,te)=>Number(ee)+q*(P===">"?1:-1)+te):de)+(B?") and ("+(B[0]===">"?"min-":"max-")+K+":"+(B.length===1?j.replace(re,(Ze,ee,te)=>Number(ee)+q*(B===">"?-1:1)+te):j):"")+")"})),U){const I=v?u.concat(c):[...u],z=v?[...h]:Qe(h,c.split(rt));i!==void 0&&o(ge(...i)),i=void 0,s(p,z,I)}else i===void 0&&(i=[[],h,u]),c=v||c.charCodeAt(0)!==36?c:`--${A(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,p=U?p:typeof p=="number"?p&&C in ot?String(p)+"px":String(p):ke(et(C,p??""),n.prefix,n.themeMap[C]),i[0].push(`${v?`${c} `:`${ne(c)}:`}${p}`)}}var y,x};b(d),i!==void 0&&o(ge(...i)),i=void 0};s(e,t,r)},ge=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,ot={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},me=e=>String.fromCharCode(e+(e>25?39:97)),N=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=me(r%52)+n;return me(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),G=["themed","global","styled","onevar","resonevar","allvar","inline"],it=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},at=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},n=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(it(a)){for(let s=0,d=a.cssRules;d[s];++s){const h=Object(d[s]);if(h.type!==1)continue;const u=Object(d[s+1]);if(u.type!==4)continue;++s;const{cssText:c}=h;if(!c.startsWith("--sxs"))continue;const p=c.slice(14,-3).trim().split(/\s+/),b=G[p[0]];b&&(t||(t={sheet:a,reset:n,rules:{},toString:r}),t.rules[b]={group:u,index:s,cache:new Set(p)})}if(t)break}if(!t){const a=(s,d)=>({type:d,cssRules:[],insertRule(h,u){this.cssRules.splice(u,0,a(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let a=G.length-1;a>=0;--a){const s=G[a];if(!l[s]){const d=G[a+1],h=l[d]?l[d].index:i.cssRules.length;i.insertRule("@media{}",h),i.insertRule(`--sxs{--sxs:${a}}`,h),l[s]={group:i.cssRules[h+1],index:h,cache:new Set([a])}}st(l[s])}};return n(),t},st=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},H=Symbol(),lt=V(),pe=(e,t)=>lt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[M]){n.type==null&&(n.type=o[M].type);for(const i of o[M].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(ct(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),dt(e,n,t)}),ct=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${A(o.prefix)}c-${N(n)}`,l=[],a=[],s=Object.create(null),d=[];for(const c in r)s[c]=String(r[c]);if(typeof e=="object"&&e)for(const c in e){h=s,u=c,Je.call(h,u)||(s[c]="undefined");const p=e[c];for(const b in p){const k={[c]:String(b)};String(b)==="undefined"&&d.push(c);const y=p[b],x=[k,y,!ue(y)];l.push(x)}}var h,u;if(typeof t=="object"&&t)for(const c of t){let{css:p,...b}=c;p=typeof p=="object"&&p||{};for(const y in b)b[y]=String(b[y]);const k=[b,p,!ue(p)];a.push(k)}return[i,n,l,a,s,d]},dt=(e,t,r)=>{const[n,o,i,l]=ut(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(u=>{function c(){for(let p=0;p<c[H].length;p++){const[b,k]=c[H][p];u.rules[b].apply(k)}return c[H]=[],null}return c[H]=[],c.rules={},G.forEach(p=>c.rules[p]={apply:b=>c[H].push([p,b])}),c})(r):null,s=(a||r).rules,d=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,h=u=>{u=typeof u=="object"&&u||ft;const{css:c,...p}=u,b={};for(const x in i)if(delete p[x],x in u){let v=u[x];typeof v=="object"&&v?b[x]={"@initial":i[x],...v}:(v=String(v),b[x]=v!=="undefined"||l.has(x)?v:i[x])}else b[x]=i[x];const k=new Set([...o]);for(const[x,v,R,C]of t.composers){r.rules.styled.cache.has(x)||(r.rules.styled.cache.add(x),D(v,[`.${x}`],[],e,z=>{s.styled.apply(z)}));const U=he(R,b,e.media),I=he(C,b,e.media,!0);for(const z of U)if(z!==void 0)for(const[P,W,B]of z){const j=`${x}-${N(W)}-${P}`;k.add(j);const _=(B?r.rules.resonevar:r.rules.onevar).cache,q=B?s.resonevar:s.onevar;_.has(j)||(_.add(j),D(W,[`.${j}`],[],e,K=>{q.apply(K)}))}for(const z of I)if(z!==void 0)for(const[P,W]of z){const B=`${x}-${N(W)}-${P}`;k.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),D(W,[`.${B}`],[],e,j=>{s.allvar.apply(j)}))}}if(typeof c=="object"&&c){const x=`${n}-i${N(c)}-css`;k.add(x),r.rules.inline.cache.has(x)||(r.rules.inline.cache.add(x),D(c,[`.${x}`],[],e,v=>{s.inline.apply(v)}))}for(const x of String(u.className||"").trim().split(/\s+/))x&&k.add(x);const y=p.className=[...k].join(" ");return{type:t.type,className:y,selector:d,props:p,toString:()=>y,deferredInjector:a}};return ie(h,{className:n,selector:d,[M]:t,toString:()=>(r.rules.styled.cache.has(n)||h(),n)})},ut=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),r.push(i),o.push(...a);for(const s in l){const d=l[s];(n[s]===void 0||d!=="undefined"||a.includes(d))&&(n[s]=d)}}return[t,r,n,new Set(o)]},he=(e,t,r,n)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,d=0,h=!1;for(s in i){const u=i[s];let c=t[s];if(c!==u){if(typeof c!="object"||!c)continue e;{let p,b,k=0;for(const y in c){if(u===String(c[y])){if(y!=="@initial"){const x=y.slice(1);(b=b||[]).push(x in r?r[x]:y.replace(/^@media ?/,"")),h=!0}d+=k,p=!0}++k}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!p)continue e}}}(o[d]=o[d]||[]).push([n?"cv":`${s}-${i[s]}`,l,h])}return o},ft={},gt=V(),mt=(e,t)=>gt(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=N(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}D(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return ie(n,{toString:n})}),pt=V(),ht=(e,t)=>pt(e,()=>r=>{const n=`${A(e.prefix)}k-${N(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];D(r,[],[],e,a=>i.push(a));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n};return ie(o,{get name(){return o()},toString:o})}),bt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+A(this.prefix)+A(this.scale)+this.token}toString(){return this.computedValue}},xt=V(),yt=(e,t)=>xt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${A(e.prefix)}t-${N(n)}`}`,i={},l=[];for(const s in n){i[s]={};for(const d in n[s]){const h=`--${A(e.prefix)}${s}-${d}`,u=ke(String(n[s][d]),e.prefix,s);i[s][d]=new bt(d,u,s,e.prefix),l.push(`${h}:${u}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const s=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(s)}return r};return{...i,get className(){return a()},selector:o,toString:a}}),St=V(),kt=V(),vt=e=>{const t=(r=>{let n=!1;const o=St(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},h={prefix:l,media:a,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Se},utils:typeof i.utils=="object"&&i.utils||{}},u=at(s),c={css:pe(h,u),globalCss:mt(h,u),keyframes:ht(h,u),createTheme:yt(h,u),reset(){u.reset(),c.theme.toString()},theme:{},sheet:u,config:h,prefix:l,getCssText:u.toString,toString:u.toString};return String(c.theme=c.createTheme(d)),c});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>kt(r,()=>{const o=pe(r,n);return(...i)=>{const l=o(...i),a=l[M].type,s=f.forwardRef((d,h)=>{const u=d&&d.as||a,{props:c,deferredInjector:p}=l(d);return delete c.as,c.ref=h,p?f.createElement(f.Fragment,null,f.createElement(u,c),f.createElement(p,null)):f.createElement(u,c)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[M]=l[M],s}}))(t),t},$t=m.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ve=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function be(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var ae=m.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,d=be(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=m.useContext($t),u=h.color,c=u===void 0?"currentColor":u,p=h.size,b=h.weight,k=b===void 0?"regular":b,y=h.mirrored,x=y===void 0?!1:y,v=be(h,["color","size","weight","mirrored"]);return f.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??p,height:o??p,fill:n??c,viewBox:"0 0 256 256",transform:l||x?"scale(-1, 1)":void 0},v,d),!!r&&f.createElement("title",null,r),a,f.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??k,n??c))});ae.displayName="IconBase";var O=new Map;O.set("bold",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return f.createElement(f.Fragment,null,f.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});O.set("light",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Ct=function(t,r){return ve(t,r,O)},$e=m.forwardRef(function(e,t){return f.createElement(ae,Object.assign({ref:t},e,{renderPath:Ct}))});$e.displayName="Check";var T=new Map;T.set("bold",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return f.createElement(f.Fragment,null,f.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});T.set("light",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Et=function(t,r){return ve(t,r,T)},Ce=m.forwardRef(function(e,t){return f.createElement(ae,Object.assign({ref:t},e,{renderPath:Et}))});Ce.displayName="User";function Ee(e,t=[]){let r=[];function n(i,l){const a=m.createContext(l),s=r.length;r=[...r,l];function d(u){const{scope:c,children:p,...b}=u,k=(c==null?void 0:c[e][s])||a,y=m.useMemo(()=>b,Object.values(b));return E.jsx(k.Provider,{value:y,children:p})}function h(u,c){const p=(c==null?void 0:c[e][s])||a,b=m.useContext(p);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,h]}const o=()=>{const i=r.map(l=>m.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return m.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[n,Rt(o,...t)]}function Rt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=n.reduce((a,{useScope:s,scopeName:d})=>{const u=s(i)[`__scope${d}`];return{...a,...u}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function se(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}var Y=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};function wt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Re(...e){return t=>e.forEach(r=>wt(r,t))}function we(...e){return m.useCallback(Re(...e),e)}var Ie=m.forwardRef((e,t)=>{const{children:r,...n}=e,o=m.Children.toArray(r),i=o.find(zt);if(i){const l=i.props.children,a=o.map(s=>s===i?m.Children.count(l)>1?m.Children.only(null):m.isValidElement(l)?l.props.children:null:s);return E.jsx(oe,{...n,ref:t,children:m.isValidElement(l)?m.cloneElement(l,void 0,a):null})}return E.jsx(oe,{...n,ref:t,children:r})});Ie.displayName="Slot";var oe=m.forwardRef((e,t)=>{const{children:r,...n}=e;if(m.isValidElement(r)){const o=Pt(r);return m.cloneElement(r,{...Bt(n,r.props),ref:t?Re(t,o):o})}return m.Children.count(r)>1?m.Children.only(null):null});oe.displayName="SlotClone";var It=({children:e})=>E.jsx(E.Fragment,{children:e});function zt(e){return m.isValidElement(e)&&e.type===It}function Bt(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{i(...a),o(...a)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}function Pt(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var jt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Z=jt.reduce((e,t)=>{const r=m.forwardRef((n,o)=>{const{asChild:i,...l}=n,a=i?Ie:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),E.jsx(a,{...l,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),le="Avatar",[At,Pr]=Ee(le),[Wt,ze]=At(le),Be=m.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=m.useState("idle");return E.jsx(Wt,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i,children:E.jsx(Z.span,{...n,ref:t})})});Be.displayName=le;var Pe="AvatarImage",je=m.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,l=ze(Pe,r),a=Mt(n),s=se(d=>{o(d),l.onImageLoadingStatusChange(d)});return Y(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?E.jsx(Z.img,{...i,ref:t,src:n}):null});je.displayName=Pe;var Ae="AvatarFallback",We=m.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=ze(Ae,r),[l,a]=m.useState(n===void 0);return m.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>a(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?E.jsx(Z.span,{...o,ref:t}):null});We.displayName=Ae;function Mt(e){const[t,r]=m.useState("idle");return Y(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=l=>()=>{n&&r(l)};return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}var Nt=Be,Lt=je,Ot=We;function xe(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Tt({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=_t({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,a=se(r),s=m.useCallback(d=>{if(i){const u=typeof d=="function"?d(e):d;u!==e&&a(u)}else o(d)},[i,e,o,a]);return[l,s]}function _t({defaultProp:e,onChange:t}){const r=m.useState(e),[n]=r,o=m.useRef(n),i=se(t);return m.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}function Ft(e){const t=m.useRef({value:e,previous:e});return m.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Dt(e){const[t,r]=m.useState(void 0);return Y(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,d=Array.isArray(s)?s[0]:s;l=d.inlineSize,a=d.blockSize}else l=e.offsetWidth,a=e.offsetHeight;r({width:l,height:a})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function Vt(e,t){return m.useReducer((r,n)=>t[r][n]??r,e)}var Me=e=>{const{present:t,children:r}=e,n=Ut(t),o=typeof r=="function"?r({present:n.isPresent}):m.Children.only(r),i=we(n.ref,Ht(o));return typeof r=="function"||n.isPresent?m.cloneElement(o,{ref:i}):null};Me.displayName="Presence";function Ut(e){const[t,r]=m.useState(),n=m.useRef({}),o=m.useRef(e),i=m.useRef("none"),l=e?"mounted":"unmounted",[a,s]=Vt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const d=J(n.current);i.current=a==="mounted"?d:"none"},[a]),Y(()=>{const d=n.current,h=o.current;if(h!==e){const c=i.current,p=J(d);e?s("MOUNT"):p==="none"||(d==null?void 0:d.display)==="none"?s("UNMOUNT"):s(h&&c!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Y(()=>{if(t){const d=u=>{const p=J(n.current).includes(u.animationName);u.target===t&&p&&qe.flushSync(()=>s("ANIMATION_END"))},h=u=>{u.target===t&&(i.current=J(n.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:m.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}function J(e){return(e==null?void 0:e.animationName)||"none"}function Ht(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var ce="Checkbox",[Gt,jr]=Ee(ce),[Yt,Zt]=Gt(ce),Ne=m.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:d,...h}=e,[u,c]=m.useState(null),p=we(t,R=>c(R)),b=m.useRef(!1),k=u?!!u.closest("form"):!0,[y=!1,x]=Tt({prop:o,defaultProp:i,onChange:d}),v=m.useRef(y);return m.useEffect(()=>{const R=u==null?void 0:u.form;if(R){const C=()=>x(v.current);return R.addEventListener("reset",C),()=>R.removeEventListener("reset",C)}},[u,x]),E.jsxs(Yt,{scope:r,state:y,disabled:a,children:[E.jsx(Z.button,{type:"button",role:"checkbox","aria-checked":L(y)?"mixed":y,"aria-required":l,"data-state":Te(y),"data-disabled":a?"":void 0,disabled:a,value:s,...h,ref:p,onKeyDown:xe(e.onKeyDown,R=>{R.key==="Enter"&&R.preventDefault()}),onClick:xe(e.onClick,R=>{x(C=>L(C)?!0:!C),k&&(b.current=R.isPropagationStopped(),b.current||R.stopPropagation())})}),k&&E.jsx(qt,{control:u,bubbles:!b.current,name:n,value:s,checked:y,required:l,disabled:a,style:{transform:"translateX(-100%)"}})]})});Ne.displayName=ce;var Le="CheckboxIndicator",Oe=m.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=Zt(Le,r);return E.jsx(Me,{present:n||L(i.state)||i.state===!0,children:E.jsx(Z.span,{"data-state":Te(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});Oe.displayName=Le;var qt=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=m.useRef(null),l=Ft(r),a=Dt(t);return m.useEffect(()=>{const s=i.current,d=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(d,"checked").set;if(l!==r&&u){const c=new Event("click",{bubbles:n});s.indeterminate=L(r),u.call(s,L(r)?!1:r),s.dispatchEvent(c)}},[l,r,n]),E.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:L(r)?!1:r,...o,tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function L(e){return e==="indeterminate"}function Te(e){return L(e)?"indeterminate":e?"checked":"unchecked"}var Kt=Ne,Jt=Oe,Xt=Object.defineProperty,Qt=Object.defineProperties,er=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&ye(e,r,t[r]);if(X)for(var r of X(t))Fe.call(t,r)&&ye(e,r,t[r]);return e},tr=(e,t)=>Qt(e,er(t)),rr=(e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&X)for(var n of X(e))t.indexOf(n)<0&&Fe.call(e,n)&&(r[n]=e[n]);return r},nr={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},or={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},ir={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},ar={default:"Roboto, sans-serif",code:"monospace"},sr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},lr={regular:"400",medium:"500",bold:"700"},cr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:$,css:Ar,globalCss:Wr,keyframes:De,getCssText:Mr,theme:Nr,createTheme:Lr,config:Or}=vt({themeMap:tr(Q({},Se),{height:"space",width:"space"}),theme:{colors:nr,fontSizes:sr,fontWeights:lr,fonts:ar,lineHeights:cr,radii:ir,space:or}}),dr=$("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});dr.displayName="Box";var Ve=$("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Ve.displayName="Text";var ur=$("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});ur.displayName="Heading";var fr=$(Nt,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),gr=$(Lt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),mr=$(Ot,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Ue(e){return f.createElement(fr,null,f.createElement(gr,Q({},e)),f.createElement(mr,{delayMs:600},f.createElement(Ce,null)))}Ue.displayName="Avatar";var pr=$("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});pr.displayName="Button";var hr=$("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),br=$("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),xr=$("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function He(e){var t=e,{prefix:r}=t,n=rr(t,["prefix"]);return f.createElement(hr,null,!!r&&f.createElement(br,null,r),f.createElement(xr,Q({},n)))}He.displayName="TextInput";var yr=$("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});yr.displayName="TextArea";var Sr=$(Kt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),kr=De({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),vr=De({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),$r=$(Jt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${kr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${vr} 200ms ease-out`}});function Ge(e){return f.createElement(Sr,Q({},e),f.createElement($r,{asChild:!0},f.createElement($e,{weight:"bold"})))}Ge.displayName="Checkbox";var Cr=$("div",{}),Er=$(Ve,{color:"$gray200",defaultVariants:{size:"xs"}}),Rr=$("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),wr=$("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Ye({size:e,currentStep:t=1}){return f.createElement(Cr,null,f.createElement(Er,null,"Passo ",t," de ",e),f.createElement(Rr,{css:{"--steps-size":e}},Array.from({length:e},(r,n)=>n+1).map(r=>f.createElement(wr,{key:r,active:t>=r}))))}Ye.displayName="MultiStep";Ue.__docgenInfo={description:"",methods:[],displayName:"Avatar"};Ge.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};Ye.__docgenInfo={description:"",methods:[],displayName:"MultiStep",props:{currentStep:{defaultValue:{value:"1",computed:!1},required:!1}}};He.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{Ue as A,dr as B,Ge as C,ur as H,ae as I,Ye as M,Ve as T,yr as a,He as b,pr as c,ve as r};
