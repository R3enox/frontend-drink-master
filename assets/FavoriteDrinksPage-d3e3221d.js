import{v as i,w as a,j as e}from"./index-3b0a30fd.js";import{D as n}from"./DrinkImageComponent-3a6b55b3.js";import{P as m}from"./PageTitle-d53c631c.js";import{D as c}from"./DrinksList-31b94954.js";import"./Buttons-e1347dc5.js";const j=()=>{const{data:t,error:s,isFetching:o}=i(),[r]=a();return e.jsx("section",{className:"pb-[80px] mb:pb-[140]",children:e.jsxs("div",{className:"container mx-auto",children:[s&&e.jsx("p",{children:"Упс, что-то пошло не так!!"}),e.jsx(m,{title:"Favorites"}),t&&t.length>0?e.jsx(c,{data:t,onDelete:r}):e.jsx(n,{description:"You haven't added any favorite cocktails yet"}),o&&e.jsx("p",{children:"пошел за датой"})]})})};export{j as default};
