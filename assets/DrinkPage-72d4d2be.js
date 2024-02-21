import{j as e,b as o,v as g,u as p,w as h,n as u,r as b,x as j}from"./index-1eb3b5d0.js";const f=({cocktail:t})=>{if(!t)return null;const{drink:r,category:s,alcoholic:n,description:i,drinkThumb:d,favorites:l}=t;return e.jsxs("div",{className:" lg:flex justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"pb-2 font-semibold text-2xl leading-tight text-gray-100 md:font-semibold md:text-5xl md:leading-tight lg:font-semibold lg:text-5xl lg:leading-[1.0625]",children:r}),e.jsxs("p",{className:"font-normal text-xs leading-4 text-grey-text-color pb-5 md:font-normal md:text-base md:leading-5",children:[s,"/",n]}),e.jsx("p",{className:"font-normal text-base leading-tight text-gray-100 text-start md:font-normal md:leading-[22px] md:w-[593px] lg:leading-[1.375] ",children:i}),e.jsx("div",{className:"pt-10 pb-20",children:l?e.jsx("button",{className:"bg-primary-text-color border rounded-full px-10 py-3 w-56 h-12 font-semibold text-base leading-tight text-blue-900",type:"button",children:"Удалить из избранных"}):e.jsx("button",{className:"bg-primary-text-color  text-primary-text-button-color  rounded-full px-10 py-3 w-56 h-12 bg-white text-black lg:rounded-full lg:px-11 lg:py-4 lg:w-64 lg:h-14 hover:bg-button-hover-color hover:border hover:border-solid hover:border-primary-text-color hover:text-primary-text-color",type:"button",children:e.jsx("span",{className:" text-sm leading-4lg:font-semibold lg:text-base lg:leading-[1.125] ",children:"Add to favorite drinks"})})})]}),e.jsx("div",{children:e.jsx("img",{className:"w-[335px]  rounded-xl md:w-[704px] md:object-cover lg:w-[400px] ",src:d,alt:"poster cocktail"})})]})},w=({ingredients:t,currentIngred:r})=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mb-[42px] mt-[18px] font-medium text-base leading-5 text-grey-text-color md:mt-[80px] md:font-medium md:text-base lg:mt-[100px]",children:"Ingredients"}),e.jsx("div",{className:"grid grid-cols-2 gap-[20px] md:grid-cols-3 md:lg:grid-cols-5  md:gap-[22px]",children:t&&t.map(({_id:s,title:n,ingredientThumb:i,"thumb-medium":d,"thumb-small":l},a)=>e.jsxs("div",{className:"hover:scale-110 hover:cursor-pointer transition duration-250 md:w-[220px] md:h-[220px] lg:w-[220px]lg:h-[220px] md:mb-[22px]",children:[e.jsx("div",{className:"p-[25px] relative w-[157px] h-[157px] rounded-lg flex-col flex items-center bg-ingredients-card-bg md:w-[220px] md:h-[220px] lg:p-[32px]",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:i}),e.jsx("source",{media:"(min-width: 768px)",srcSet:d}),e.jsx("img",{src:l,alt:"",className:"w-[107px] h-[107px] md:w-[157px] md:h-[157px] lg:w-[157px] lg:h-[157px]"})]})}),e.jsxs("div",{className:"flex justify-between items-center mt-[8px] md:mt-[14px] ",children:[e.jsx("p",{className:" font-medium leading-5 text-xs md:text-lg md:leading-6 lg:font-medium lg:text-base lg:leading-[1.33333] ",children:n}),e.jsx("p",{className:"text-grey-text-color font-medium text-sm leading-5 md:font-medium md:text-base md:leading-[1.25] lg:text-base",children:r[a].measure})]})]},s))})]}),N="/frontend-drink-master/assets/drink-img-ds-8fcc529e.jpg",v="/frontend-drink-master/assets/drink-img-tb-d3bf7452.jpg",k="/frontend-drink-master/assets/drink-img-7ac9a40a.jpg",y=({description:t})=>e.jsxs("div",{className:"mb-[80px] mt-[80px]  md:mb-[140px] lg:flex lg:gap-[20px] ",children:[e.jsxs("div",{className:"lg:order-last",children:[e.jsx("h2",{className:"font-semibold w-[335px] text-4xl leading-7 mb-[40px] md:text-2xl md:leading-[1.1]",children:"Recipe Preparation"}),e.jsx("p",{className:" font-normal text-base leading-5 md:text-sm md:leading-[1.28571] lg:w-[594px] ",children:t&&t.instructions})]}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:N}),e.jsx("source",{media:"(min-width: 768px)",className:" ",srcSet:v}),e.jsx("img",{className:"rounded-xl w-[335px] mt-[40px] md:w-[704px] lg:w-[631px] lg:mt-[0px] ",src:k,alt:"cocktails"})]})]}),I=({drinkIdStorage:t})=>t.currentCocktails,T=({drinkIdStorage:t})=>t.isLoading,C=t=>!t||!t.ingredients?[]:t.ingredients.map(({ingredientId:r,measure:s})=>({ingredientId:r,measure:s})),m=()=>{const t=window.scrollY;t>0&&(window.requestAnimationFrame(m),window.scrollTo(0,t-t/8))},E=()=>{const t=o(I),r=o(T),s=o(g),n=p(),{drinkId:i}=h(),{ingredients:d}=u(),l=C(t),a=d&&d.filter(x=>l.find(({ingredientId:c})=>c===x._id));return b.useEffect(()=>{n(j(i)),m()},[i,n]),e.jsxs("section",{className:"mt-20 mb-20",children:[r&&e.jsx("h1",{children:"Loading..."}),s&&e.jsx("h1",{children:s}),e.jsxs("div",{className:"container mx-auto ",children:[e.jsx(f,{cocktail:t}),e.jsx(w,{ingredients:a,currentIngred:l}),e.jsx(y,{description:t})]})]})};export{E as default};
