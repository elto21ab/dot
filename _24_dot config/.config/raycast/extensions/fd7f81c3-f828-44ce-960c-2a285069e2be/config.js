"use strict";var n=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var w=(o,t)=>{for(var l in t)n(o,l,{get:t[l],enumerable:!0})},f=(o,t,l,m)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of p(t))!u.call(o,a)&&a!==l&&n(o,a,{get:()=>t[a],enumerable:!(m=d(t,a))||m.enumerable});return o};var D=o=>f(n({},"__esModule",{value:!0}),o);var I={};w(I,{default:()=>i});module.exports=D(I);var e=require("@raycast/api"),r=require("react/jsx-runtime");function i(){return(0,r.jsx)(e.Form,{children:(0,r.jsxs)(e.Form.Dropdown,{id:"format",title:"Output Format",filtering:!1,storeValue:!0,onChange:async o=>{await e.LocalStorage.setItem("format",o)},children:[(0,r.jsx)(e.Form.Dropdown.Item,{value:"raw",title:"Raw"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"inline",title:"Inline"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"block",title:"Block"})]})})}