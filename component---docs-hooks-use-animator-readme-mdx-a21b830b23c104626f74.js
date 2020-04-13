(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zJwC:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return i})),a.d(e,"default",(function(){return p}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),r=a("TjRS"),l=(a("ZFoC"),a("KSNx"));a("aD51");function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/hooks/use-animator/README.mdx"}});var o={_frontmatter:i},m=r.a;function p(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["components"]);return Object(n.b)(m,b({},o,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"useanimator"},"useAnimator"),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)(l.a,{mdxType:"UseAnimatorExamples"}),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-jsx"}),'import { useAnimator } from "@lottie-web/react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst style = {\n    height: 300,\n};\n\nconst AnimationExample = () => {\n    // Animation settings (a subset of the lottie-web options)\n    const options = {\n        animationData: groovyWalkAnimation,\n        loop: true,\n        autoplay: true,\n    };\n\n    // Create the Lottie hook\n    const { View } = useAnimator(options, style);\n\n    // Use the returned view\n    return <>{View}</>;\n};\n\nexport default AnimationExample;\n')),Object(n.b)("h2",{id:"params"},"Params"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Param"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Required"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Default"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"required"),Object(n.b)("td",b({parentName:"tr"},{align:null})),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Subset of the lottie-web options")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"options.animationData"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"required"),Object(n.b)("td",b({parentName:"tr"},{align:null})),Object(n.b)("td",b({parentName:"tr"},{align:null}),"A JSON Object with the exported animation data")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"options.loop"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"boolean","|","number"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"optional"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"true"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Set it to true for infinite amount of loops, or pass a number for a specific amount of loops")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"options.autoplay"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"optional"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"true"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"If set to true, animation will play as soon as it's loaded")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"options.initialSegment"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"array"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"optional"),Object(n.b)("td",b({parentName:"tr"},{align:null})),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Expects an array of length 2. First value is the initial frame, second value is the final frame. If this is set, the animation will start at this position in time instead of the exported value from AE")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"style"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"optional"),Object(n.b)("td",b({parentName:"tr"},{align:null})),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Style object that applies to the animation wrapper (which is a ",Object(n.b)("inlineCode",{parentName:"td"},"div"),")")))),Object(n.b)("h2",{id:"returns"},"Returns"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",b({parentName:"tr"},{align:null})))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.View"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"React.Element"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.play"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.stop"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.pause"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.setSpeed"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.goToAndStop"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.goToAndPlay"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.setDirection"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.playSegments"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.setSubframe"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.destroy"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"Lottie.getDuration"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"method"),Object(n.b)("td",b({parentName:"tr"},{align:null}))))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/hooks/use-animator/README.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-hooks-use-animator-readme-mdx-a21b830b23c104626f74.js.map