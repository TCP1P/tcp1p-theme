import{m as t,C as a}from"./index.533481c4.js";import{g as e,e as i}from"./index.5730f815.js";import"./echarts.15ff2617.js";window.Alpine=t;window.CTFd=a;t.data("ScoreboardDetail",()=>({data:null,async init(){this.data=await a.pages.scoreboard.getScoreboardDetail(10);let o=e(a.config.userMode,this.data);i(this.$refs.scoregraph,o)}}));t.start();