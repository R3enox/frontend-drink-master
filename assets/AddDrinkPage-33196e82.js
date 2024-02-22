import{p as j,r as p,u as f,z as v,j as e,s as h,e as k,F as w}from"./index-99deef67.js";import{c as g,S as b,b as A}from"./createCollectionOptions-335726e9.js";import{P as F}from"./PageTitle-4bc7f532.js";import"./floating-ui.dom-faba1b95.js";import"./emotion-memoize.esm-f5713a00.js";const I=r=>{const[l,a,i]=r.split("/").map(Number),n=new Date,u=n.getFullYear(),t=n.getMonth()+1,o=n.getDate();let s=u-i;return(t<a||t===a&&o<l)&&(s-=1),s},P=()=>{const{categories:r,glasses:l}=j(),[a,i]=p.useState(),[n,u]=p.useState(0),t=p.useMemo(()=>g(r??[]),[r]),o=p.useMemo(()=>g(l??[]),[l]),s=f(v);p.useEffect(()=>{if(s){const c=I(s.dateOfBirth);u(c)}},[s]);const d=c=>{const x=c.target.files[0],m=URL.createObjectURL(x);i(m)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("input",{id:"fileInput",type:"file",name:"drinkThumb",required:!0,className:"inputFile sr-only mt-[280px] ml-[170px]",onChange:d}),e.jsx("label",{htmlFor:"fileInput",className:"cursor-pointer",children:e.jsx("div",{className:"containerPhoto flex justify-center items-center w-[335px] h-[320px]  rounded-lg bg-primary-text-button-color bg-opacity-50 ",children:a===void 0?e.jsxs("div",{className:"flex flex-col pointer-events-none items-center w-20 h-[88px] ",children:[e.jsx("button",{tabIndex:"-1",type:"button",className:"addPhotoButton flex justify-center items-center  mb-[18px] w-[50px] h-[50px] bg-primary-text-color rounded-[6px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]",children:e.jsx("svg",{className:"svgPhotoAddDrink stroke-primary-text-button-color w-[28px] h-[28px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]",children:e.jsx("use",{href:h+"#icon-plus"})})}),e.jsx("p",{className:"font-medium text-base leading-[125%]",children:"Add image"})]}):e.jsx("img",{src:a,className:"block  w-[335px] h-[320px] rounded-[8px] "})})})]}),e.jsxs("div",{className:"flex flex-col gap-[31px] mb-10",children:[e.jsx("input",{type:"text",name:"drink",placeholder:"Enter item title",required:!0,className:"block pb-[14px] outline-none hover:placeholder-primary-text-color bg-transparent w-[335px]  h-[34px] border-b border-grey-text-color focus:outline-none focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm transition-all ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"}),e.jsx("input",{type:"text",name:"description",placeholder:"Enter about recipe",className:"block pb-[14px] outline-none hover:placeholder-primary-text-color   bg-transparent w-[335px] h-[34px] border-b border-grey-text-color  focus:outline-none  focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm transition-colors ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]",required:!0}),e.jsxs("div",{className:"relative",children:[e.jsx("label",{htmlFor:"selectCategory",className:"absolute top-0 left-0 hover:text-primary-text-color text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]",children:"Category"}),e.jsx(b,{id:"selectCategory",classNamePrefix:"custom_select",options:t,name:"category",defaultValue:t[0],isRequired:!0})]}),e.jsxs("div",{className:"relative",children:[e.jsx("label",{htmlFor:"selectGlass",className:"absolute top-0 left-0 text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]",children:"Glass"}),e.jsx(b,{id:"selectGlass",classNamePrefix:"custom_select",options:o,name:"glass",defaultValue:o[0],isRequired:!0})]})]}),e.jsx("div",{className:"mb-20 flex gap-x-3.5",children:n>=18?e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:"relative flex items-center gap-x-1 cursor-pointer ",children:[e.jsx("input",{type:"radio",name:"alcoholic",value:"Alcoholic",required:!0,className:"peer sr-only",defaultChecked:!0}),e.jsx("div",{className:" w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color "}),e.jsx("div",{className:" absolute  left-[3.6%] top-[28%;] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"}),e.jsx("span",{className:"text-grey-text-color  peer-checked:text-primary-text-color",children:"Alcoholic"})]}),e.jsxs("label",{className:"relative text-grey-text-color  flex items-center gap-x-1 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"alcoholic",value:"Non-alcoholic",required:!0,className:"peer sr-only"}),e.jsx("div",{className:" w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color "}),e.jsx("div",{className:" absolute  left-[2.8%]  top-[28%;] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"}),e.jsx("span",{className:"text-grey-text-color  peer-checked:text-primary-text-color",children:"Non-alcoholic"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:`relative flex items-center gap-x-1  ${n>=18?"cursor-pointer":""} `,children:[e.jsx("input",{type:"radio",name:"alcoholic",value:"Alcoholic",required:!0,className:"peer sr-only",disabled:!0}),e.jsx("div",{className:` w-4 h-4 p-0.5 border-grey-text-color 
                ${n>=18?"cursor-pointer":""}  rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color `}),e.jsx("div",{className:" absolute  left-[3.5%] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"}),e.jsx("span",{className:"text-grey-text-color  peer-checked:text-primary-text-color",children:"Alcoholic"})]}),e.jsxs("label",{className:"relative text-grey-text-color  flex items-center gap-x-1 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"alcoholic",value:"Non-alcoholic",required:!0,className:"peer sr-only",defaultChecked:!0}),e.jsx("div",{className:" w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color "}),e.jsx("div",{className:" absolute  left-[2.8%] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"}),e.jsx("span",{className:"text-grey-text-color  peer-checked:text-primary-text-color",children:"Non-alcoholic"})]})]})})]})},N=({text:r})=>e.jsx("h2",{className:"font-semibold text-2xl leading-[114%] mb-10 md:text-[40px] md:leading-[110%]",children:r}),D="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let y=(r=21)=>{let l="",a=crypto.getRandomValues(new Uint8Array(r));for(;r--;)l+=D[a[r]&63];return l};const q=({ingredientsOptions:r})=>{const[l,a]=p.useState(3),[i,n]=p.useState([]);p.useEffect(()=>{if(i.length===0){u(l);return}},[]);const u=d=>{const c=[];for(let x=0;x<d;x++){const m=y();c.push(e.jsxs("li",{className:"flex items-center mb-3.5 gap-x-2",children:[e.jsx(b,{className:"flex-initial w-52",name:"ingredientId",options:r,classNamePrefix:"ingredientsSelect",placeholder:r[x].label,isRequired:!0}),e.jsx("label",{children:e.jsx("input",{type:"text",placeholder:"1  cl",name:"measure",required:!0,className:"text-primary-text-color placeholder-primary-text-color bg-transparent w-[100px] h-[50px] border-grey-text-color border-[1px] rounded-[200px] pl-[18px] hover:border-primary-text-color focus:border-primary-text-color outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]  "})}),e.jsx("button",{type:"button",id:m,onClick:()=>s(m),children:e.jsx("svg",{className:" stroke-primary-text-color w-[18px] h-[18px] hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] ",children:e.jsx("use",{href:`${h}#icon-cross`})})})]},m))}n(c)},t=()=>{if(r.length<=l)return;const d=l+1;a(d);let c=Math.floor(Math.random()*r.length);const x=y();i.push(e.jsxs("li",{className:"flex items-center mb-3.5 gap-x-2",children:[e.jsx(b,{className:"flex-initial w-52",name:"title",options:r,classNamePrefix:"ingredientsSelect",placeholder:r[c].label,isRequired:!0}),e.jsx("label",{children:e.jsx("input",{type:"text",placeholder:"1  cl",name:"measure",required:!0,className:"text-primary-text-color placeholder-primary-text-color bg-transparent w-[100px] h-[50px] border-grey-text-color border-[1px] rounded-[200px] pl-[18px] hover:border-primary-text-color focus:border-primary-text-color outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]  "})}),e.jsx("button",{type:"button",id:x,onClick:()=>s(x),children:e.jsx("svg",{className:" stroke-primary-text-color w-[18px] h-[18px] hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] ",children:e.jsx("use",{href:`${h}#icon-cross`})})})]},x))},o=()=>{if(l<=3)return;const d=l-1;a(d),i.pop()},s=d=>{n(c=>c.filter(x=>x.key!==d)),a(c=>c-1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(N,{text:"Ingredients",className:"inline-block"}),e.jsxs("div",{id:"counter",className:"w-[104px] h-[38px]   flex justify-around items-center border-solid border-grey-text-color border-[1px] rounded-3xl",children:[e.jsx("button",{type:"button","data-action":"decrement",onClick:o,children:e.jsx("svg",{width:"16",height:"16",className:"stroke-primary-text-color ",children:e.jsx("use",{href:`${h}#icon-minus`})})}),e.jsx("span",{id:"value",className:"flex text-center",children:l}),e.jsx("button",{type:"button","data-action":"increment",onClick:t,children:e.jsx("svg",{width:"16",height:"16",className:"stroke-primary-text-color",children:e.jsx("use",{href:`${h}#icon-plus`})})})]})]}),e.jsx("ul",{className:"mb-20",children:i})]})},C=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{text:"Recipe Preparation"}),e.jsx("textarea",{className:"bg-transparent border-[1px] resize-none border-grey-text-color focus:outline-none focus:border-primary-text-color hover:border-primary-text-color w-[335px] h-[184px] rounded-[14px] mb-5 pl-[18px] pt-4  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]",name:"instructions",id:"",cols:"30",rows:"10",placeholder:"Enter the recipe",required:!0})]}),S=()=>{const{ingredients:r}=j(),l=f(k),a=[],i=p.useMemo(()=>A(r??[]),[r]),n=u=>{u.preventDefault(),a.length=0;const t=new FormData(u.currentTarget);console.log(t),t.getAll("ingredientId").forEach((o,s)=>{const d=t.getAll("measure")[s];a.push({title:i.find(c=>c.value===o).label,measure:d,ingredientId:o})}),t.delete("ingredientId"),t.delete("measure"),a.forEach((o,s)=>{t.append(`ingredients[${s}][title]`,o.title),t.append(`ingredients[${s}][measure]`,o.measure),t.append(`ingredients[${s}][ingredientId]`,o.ingredientId)}),t.forEach((o,s)=>{console.log("name: ",s),console.log("value: ",o)}),fetch("http://localhost:3000/api/drinks/own/add",{method:"POST",headers:{Authorization:`Bearer ${l}`},body:t}).then(o=>{o.ok?console.log("status 200"):console.log("Error:",o.statusText)})};return e.jsx("section",{className:"margin pb-20 pt-10",children:e.jsxs("form",{onSubmit:n,children:[e.jsx(P,{}),e.jsx(q,{ingredientsOptions:i}),e.jsx(C,{}),e.jsx("button",{type:"submit",className:"block w-[108px] h-[46px] border-2 border-primary-text-color outline-none  rounded-[42px] bg-primary-text-color text-primary-text-button-color hover:border-hover-button-border-color hover:border-2 focus:border-hover-button-border-color focus:border-2 focus:outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]",children:"Add"})]})})},z=()=>e.jsxs("section",{className:"pb-10 md:pb-20",children:[e.jsx("h2",{className:"font-medium text-lg text-primary-text-color mb-5  md:text-2xl md:mb-6 ",children:"Follow Us"}),e.jsx(w,{})]}),E=()=>e.jsx("section",{children:e.jsx("h2",{className:"font-medium text-lg text-primary-text-color mb-5  md:text-2xl md:mb-6 ",children:"Popular drinks"})}),O=()=>e.jsxs("main",{className:"container",children:[e.jsx(F,{title:"Add drink"}),e.jsx(S,{}),e.jsx(z,{}),e.jsx(E,{})]});export{O as default};
