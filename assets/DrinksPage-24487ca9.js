import{f as P,u as b,c as S,r as g,h as y,j as e,s as j,b as w,a as f,i as v}from"./index-c5e7975c.js";import{P as N}from"./PageTitle-2a99cf15.js";import{c as C,a as F,S as D}from"./createCollectionOptions-0119ced8.js";import{s as O,b as I,a as T,D as E}from"./drinksSelector-5e29913f.js";import{u as L,P as A,D as M}from"./DrinkImageComponent-aa4e8120.js";import{D as R}from"./paginationLimits-a54512ff.js";import{s as _}from"./scrollToTop-9bd6e429.js";import"./emotion-memoize.esm-f5713a00.js";import"./floating-ui.dom-93188c57.js";const k=()=>{const[r,m]=P(),o=r.get("search")??"",a=r.get("category")??"",i=r.get("ingredient")??"";return{search:o,category:a,ingredient:i,setDrinkFilter:(t,n)=>{n===""?r.delete(t):r.set(t,n),r.set("page",1),m(r)},resetDrinkFilters:()=>{m({search:"",category:"",ingredient:""})}}},U=()=>{const{t:r,i18n:m}=b(),{categories:o,ingredients:a}=S(),{search:i,category:c,ingredient:l,setDrinkFilter:t}=k(),n=g.useMemo(()=>C(o??[]),[o]),x=g.useMemo(()=>F(a??[]),[a]),{handleSubmit:h,setValue:p,watch:d}=y({defaultValues:{search:i||""}}),u=s=>{t("search",s.search)};return e.jsxs("div",{className:"flex flex-col items-center md:flex-row gap-[14px] md:gap-[8px] mt-[40px] md:mt-[60px] lg:mt-[80px]",children:[e.jsxs("form",{onSubmit:h(u),className:"flex flex-row w-full justify-between items-center md:w-[264px] hover:border-grey-text-color hover:color-transparent bg-transparent h-[54px] rounded-[200px] border-[1px] border-border-color  placeholder-border-color py-[18px] md:py-[14px] px-[24px]",children:[e.jsx("input",{className:"bg-transparent w-full outline-none text-[14px] md:text-[17px] leading-[1.29] md:leading-[1.56]",type:"text",placeholder:r("inputPlaceholder.DrinksSearch.text"),onChange:s=>{p("search",s.target.value)},value:d("search")}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{type:"reset",onClick:()=>{p("search",""),t("search","")},className:"w-[10px] h-[10px] md:w-[15px] md:h-[15px]",children:d("search")&&e.jsx("svg",{className:" stroke-primary-text-color w-[10px] h-[10px] md:w-[15px] md:h-[15px]",children:e.jsx("use",{href:j+"#icon-cross"})})}),e.jsx("button",{type:"submit",children:e.jsx("svg",{className:"stroke-primary-text-color ml-[10px] sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]",children:e.jsx("use",{href:j+"#icon-search"})})})]})]}),e.jsx(D,{options:n,placeholder:r("inputPlaceholder.DrinksSearch.SelectCategory"),classNamePrefix:"searchSelect",isClearable:c&&!0,onChange:s=>t("category",(s==null?void 0:s.value)||""),defaultValue:{value:c||"",label:c||r("inputPlaceholder.DrinksSearch.SelectCategory")}}),e.jsx(D,{options:x,placeholder:r("inputPlaceholder.DrinksSearch.SelectIngredients"),classNamePrefix:"searchSelect",isClearable:l&&!0,onChange:s=>t("ingredient",(s==null?void 0:s.value)||""),defaultValue:{value:l||"",label:l||r("inputPlaceholder.DrinksSearch.SelectIngredients")}})]})},$=()=>{const{t:r,i18n:m}=b(),o=w(),{page:a,per_page:i,countPagesOfPagination:c,setPage:l}=L(R),{search:t,category:n,ingredient:x}=k(),h=f(O),p=f(I),d=f(T);g.useEffect(()=>{const s=new URLSearchParams({page:a,per_page:i});t&&s.set("search",t),n&&s.set("category",n),x&&s.set("ingredient",x),o(v(s))},[a,i,t,n,x,o]);const u=!d&&p===0;return e.jsxs("div",{className:"mt-[40px]",children:[p>0&&e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]",children:h.map(s=>e.jsx(E,{drink:s},s._id))}),e.jsx(A,{totalCount:p,itemsPerPage:i,setPage:l,forcePage:a,initialPage:a,countPagesOfPagination:c})]}),u&&e.jsx(M,{description:r("DrinkImageComponent.Drinks")}),e.jsx("br",{})]})},X=()=>{const{t:r,i18n:m}=b();return g.useEffect(()=>{_()},[]),e.jsx("div",{className:`bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat`,children:e.jsxs("div",{className:"container mx-auto pb-[80px]",children:[e.jsx(N,{title:r("title.Drinks")}),e.jsx(U,{}),e.jsx($,{})]})})};export{X as default};