import{r as i,j as e,s as j,k as v,l as C,b as w}from"./index-8a90083d.js";import{D}from"./DrinksList-e53fc2fc.js";import{P as M}from"./PageTitle-8651f1ed.js";import{u as P,P as N,D as E}from"./DrinkImageComponent-78b6c1d7.js";import{M as I}from"./paginationLimits-a54512ff.js";import"./scrollToTop-9bd6e429.js";const L=({children:r,isOpen:s,closeFnc:n,content:a})=>{const t=i.useCallback(()=>{s&&n()},[s,n]);i.useEffect(()=>{const o=x=>{x.code==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t]);const c=o=>{o.target===o.currentTarget&&t()};return e.jsx("div",{className:"fixed bg-opacity-0 overflow-x-hidden overflow-y-auto left-0 top-0  w-full h-full pt-20 z-[100]",onClick:c,children:e.jsxs("div",{className:"absolute bg-primary-text-button-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px] items-center flex flex-col py-[50px] px-[25px] md:p-[50px] ",children:[e.jsx("button",{className:"absolute items-center flex justify-center top-[18px] right-[18px] rounded-[58px] hover:bg-primary-text-color transition-colors",onClick:t,children:e.jsx("svg",{className:"stroke-primary-text-color w-[24px] h-[24px] md:w-[32px] md:h-[32px] hover:stroke-primary-text-button-color transition-colors",children:e.jsx("use",{href:j+"#icon-cross"})})}),e.jsx("p",{className:"text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.33] mb-[25px] md:mb-[37px] text-center",children:a}),r]})})},F=({handleDeleteClick:r,closeMyDrinkModal:s,drinkId:n})=>e.jsxs("div",{className:"flex flex-row items-center space-x-2",children:[e.jsx("button",{className:"transition-colors bg-primary-text-color    hover:bg-filter-scroll-text  hover:text-primary-text-color py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] text-primary-text-button-color border-none",type:"button",onClick:()=>s(),children:"Cancel"}),e.jsx("button",{className:"transition-colors bg-filter-scroll-text   hover:bg-primary-text-color  hover:text-hover-text-color  py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] border-none",type:"button",onClick:()=>r(n),children:"Delete"})]}),B=()=>{const{page:r,per_page:s,countPagesOfPagination:n,setPage:a}=P(I),{data:t,error:c,isFetching:o,isError:x}=v({page:r,per_page:s});console.log(t);const[m]=C(),[p,d]=i.useState(!1),[u,g]=i.useState(null),y=()=>{d(!0)},l=()=>{d(!1)},h=async b=>{try{await m(b),l()}catch(k){console.error("Помилка видалення: ",k)}},f=!o&&(t==null?void 0:t.totalCount)===0;return e.jsx("div",{className:`bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat`,children:e.jsx("section",{className:"pb-[80px] md:pb-[140px] ",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx(M,{title:"My drinks"}),o&&e.jsx(w,{isStatic:!0}),(t==null?void 0:t.totalCount)>0&&e.jsxs(e.Fragment,{children:[e.jsx(D,{data:t.paginatedResult,openMyDrinkModal:y,onChooseItem:g}),e.jsx(N,{totalCount:t==null?void 0:t.totalCount,itemsPerPage:s,setPage:a,forcePage:r,initialPage:r,countPagesOfPagination:n})]}),f&&e.jsx(E,{description:"You don't have your own drinks yet"}),p&&e.jsx(L,{isOpen:p,closeFnc:l,content:"Are you sure you want to delete your drink?",children:e.jsx(F,{closeMyDrinkModal:l,handleDeleteClick:()=>h(u),drinkId:t})})]})})})};export{B as default};
