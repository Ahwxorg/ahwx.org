import{j as a}from"./jsx-runtime.K1e75nIr.js";import{r as n}from"./index.NEDEFKed.js";const e=["Hai","Hey","Salut","¿Qué tal?","Nǐ hǎo","Ciao","Yā, Yō","Guten Tag","Oi","Anyoung","Ahlan","Halløj","Hujambo","Hallo","Yassou","Cześć","Selamat siang","Namaskar","Hei","Selam","Shalom","Tjena"];class i extends n.Component{constructor(){super(),this.state={textIdx:0}}componentDidMount(){this.timeout=setInterval(()=>{let t=this.state.textIdx;this.setState({textIdx:t+1})},3e3)}componentWillUnmount(){clearInterval(this.timeout)}render(){let t=e[this.state.textIdx%e.length];return a.jsx("span",{children:t})}}export{i as default};