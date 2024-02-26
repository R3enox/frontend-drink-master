import{u as c,j as e,i as d,o as m,D as h,s as g}from"./index-ff5b122c.js";const u=({myDrink:t,openMyDrinkModal:l,onChooseItem:s})=>{const{t:x,i18n:b}=c(),{_id:o,drink:r,drinkThumb:n,alcoholic:p,description:i}=t,a=()=>{l(),s(o)};return e.jsxs("li",{className:"flex flex-col gap-[18px] md:gap-[24px] w-[335px] md:w-[342px] lg:w-[400px]",children:[e.jsx(d,{to:`../drink/${o}`,className:"overflow-hidden rounded-[8px]",children:e.jsx("img",{src:n||"placeholderImage",alt:r,className:"w-[335px] h-[360px] mb:w-[342px] mb:h-[360px] lg:w-[400px] lg:h-[400px] rounded-[8px] object-cover scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9]"})}),e.jsx("h3",{className:"mb-[4px] text-[18px] md:text-[24px] font-[500] leading-[1.33] text-ellipsis  line-clamp-1",children:r}),e.jsx("p",{className:"mb-[18px] text-[14px] md:mb-[24px] leading-[1.29] text-grey-text-color",children:x(p?"cocktailType.alco":"cocktailType.non")}),e.jsx("p",{className:"h-[75px] mb-[18px] md:mb-[24px]  md:h-[110px]  lg:h-[90px] text-ellipsis  line-clamp-4 md:line-clamp-5 lg:line-clamp-4 text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.38]",children:i}),e.jsxs("div",{className:"flex gap-[8px]",children:[e.jsx(m,{to:`/drink/${o}`,children:x("link.DrinksItem.SeeMore")}),e.jsx(h,{onClick:a,children:e.jsx("svg",{className:"fill-none hover:inherit w-[24px] h-[24px] ",children:e.jsx("use",{href:g+"#icon-trash"})})})]})]},o)},f=({data:t,openMyDrinkModal:l,onChooseItem:s})=>e.jsx("ul",{className:"flex flex-col gap-y-[40px] md:flex-row md:flex-wrap md:gap-x-[20px] md:gap-y-[80px]",children:t&&t.map(x=>e.jsx(u,{myDrink:x,openMyDrinkModal:l,onChooseItem:s},x._id))}),y=({handleDeleteClick:t,closeMyDrinkModal:l,drinkId:s})=>e.jsxs("div",{className:"flex flex-row items-center space-x-2",children:[e.jsx("button",{className:"transition-colors bg-primary-text-color    hover:bg-filter-scroll-text  hover:text-primary-text-color py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] text-primary-text-button-color border-none",type:"button",onClick:()=>l(),children:"Cancel"}),e.jsx("button",{className:"transition-colors bg-filter-scroll-text   hover:bg-primary-text-color  hover:text-hover-text-color  py-[16px] px-[41px] md:py-[18px] md:px-[69px] rounded-[42px] text-[16px] font-[600] leading-[1.26] border-none",type:"button",onClick:()=>t(s),children:"Delete"})]});export{f as D,y as M};
