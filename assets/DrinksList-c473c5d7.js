import{j as e,i as t,o as d,D as p,s as m}from"./index-43a93ba7.js";const h=({myDrink:l,openMyDrinkModal:x,onChooseItem:i})=>{const{_id:s,drink:n,drinkThumb:r,alcoholic:a,description:c}=l,o=()=>{x(),i(s)};return e.jsxs("li",{className:"md:w-[342px] lg:w-[400px]",children:[e.jsx(t,{to:`/drink/${s}`,className:"overflow-hidden rounded-[8px]",children:e.jsx("img",{src:r||"placeholderImage",alt:n,className:"rounded-[8px] mb-[18px] md:mb-[24px] object-cover scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9]"})}),e.jsx("h3",{className:"mb-[4px] text-[18px] md:text-[24px] font-[500] leading-[1.33] text-ellipsis  line-clamp-1",children:n}),e.jsx("p",{className:"mb-[18px] text-[14px] md:mb-[24px] leading-[1.29] text-grey-text-color",children:a?"Alcoholic":"Non-alcoholic"}),e.jsx("p",{className:"mb-[18px] md:mb-[24px] text-ellipsis  line-clamp-4 text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.38]",children:c}),e.jsxs("div",{className:"flex gap-[8px]",children:[e.jsx(d,{to:`/drink/${s}`,children:"See more"}),e.jsx(p,{onClick:o,children:e.jsx("svg",{className:"fill-none hover:inherit w-[24px] h-[24px] ",children:e.jsx("use",{href:m+"#icon-trash"})})})]})]},s)},g=({data:l,openMyDrinkModal:x,onChooseItem:i})=>e.jsx("div",{children:e.jsx("ul",{className:"flex flex-col gap-y-[40px] md:flex-row flex-wrap md:gap-x-[20px] md:gap-y-[80px]",children:l&&l.map(s=>e.jsx(h,{myDrink:s,openMyDrinkModal:x,onChooseItem:i},s._id))})});export{g as D};