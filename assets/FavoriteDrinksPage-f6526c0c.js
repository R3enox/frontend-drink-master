import{u as C,b as I,a as o,r as c,i as E,j as e,B as l,L,U as S,k as b}from"./index-0450f074.js";import{u as y,P as B,D as N}from"./DrinkImageComponent-60f2440c.js";import{P as O}from"./PageTitle-c4aa9257.js";import{D as T,M as U}from"./ModalButtons-35b6b555.js";import{F as R}from"./paginationLimits-a54512ff.js";import{S as w}from"./ScrollBtn-f9651282.js";const A=t=>t.favorites.favorites,_=t=>t.favorites.totalCount,q=t=>t.favorites.isLoading,z=t=>t.favorites.error,X=()=>{const{t,i18n:G}=C(),{page:s,per_page:a,countPagesOfPagination:g,setPage:f}=y(R),r=I(),d=o(A),i=o(_),m=o(q),x=o(z);c.useEffect(()=>{r(E())},[r]);const[v,p]=c.useState(!1),[F,j]=c.useState(null),k=()=>{p(!0)},n=()=>{p(!1)},D=async h=>{try{await r(b(h)),n()}catch(M){l.error(M.message)}},P=!m&&i===0,u=(s-1)*a;return e.jsx("div",{children:e.jsxs("section",{className:"pb-[80px] mb:pb-[140]",children:[e.jsxs("div",{className:"container mx-auto ",children:[x&&l.error(t("toastError.Favorite")),e.jsx(O,{title:t("title.Favorite")}),m&&e.jsx(L,{isStatic:!0}),i>0&&e.jsxs(e.Fragment,{children:[e.jsx(T,{data:d.slice(u,u+a),openMyDrinkModal:k,onChooseItem:j}),e.jsx(B,{totalCount:i,itemsPerPage:a,setPage:f,forcePage:s,page:s,initialPage:s,countPagesOfPagination:g})]}),P&&e.jsx(N,{description:t("DrinkImageComponent.Favorite")}),v&&e.jsx(S,{isOpen:v,closeFnc:n,content:t("UniversalModal.Favorite"),children:e.jsx(U,{closeMyDrinkModal:n,handleDeleteClick:()=>{D(F),l(t("toastError.FavoriteRemove"),{icon:!1})},drinkId:d})})]}),e.jsx(w,{})]})})};export{X as default};
