(()=>{function a(a,r){var e=parseInt(a.slice(1,3),16),t=parseInt(a.slice(3,5),16),o=parseInt(a.slice(5,7),16);return r?"rgba("+e+", "+t+", "+o+", "+r+")":"rgb("+e+", "+t+", "+o+")"}!function(r){"use strict";var e=function(){this.$body=r("body"),this.charts=[]};e.prototype.respChart=function(a,e,t,o){var s=a.get(0).getContext("2d");Chart.defaults.global.defaultFontColor="#8391a2",Chart.defaults.scale.gridLines.color="#8391a2";var n=r(a).parent();return function(){var i;switch(a.attr("width",r(n).width()),e){case"Line":i=new Chart(s,{type:"line",data:t,options:o});break;case"Doughnut":i=new Chart(s,{type:"doughnut",data:t,options:o});break;case"Pie":i=new Chart(s,{type:"pie",data:t,options:o});break;case"Bar":i=new Chart(s,{type:"bar",data:t,options:o});break;case"Radar":i=new Chart(s,{type:"radar",data:t,options:o});break;case"PolarArea":i=new Chart(s,{data:t,type:"polarArea",options:o})}return i}()},e.prototype.initCharts=function(){var e=[],t=["#1abc9c","#f1556c","#4a81d4","#e3eaef"];if(r("#revenue-chart").length>0){var o={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:a((n=(s=r("#revenue-chart").data("colors"))?s.split(","):t.concat())[0],.3),borderColor:n[0],data:[32,42,42,62,52,75,62]},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:n[1],borderDash:[5,5],data:[42,58,66,93,82,105,92]}]};e.push(this.respChart(r("#revenue-chart"),"Line",o,{maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:20},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}}))}if(r("#projections-actuals-chart").length>0){var s,n,i={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:(n=(s=r("#projections-actuals-chart").data("colors"))?s.split(","):t.concat())[0],borderColor:n[0],hoverBackgroundColor:n[0],hoverBorderColor:n[0],data:[65,59,80,81,56,89,40,32,65,59,80,81],barPercentage:.7,categoryPercentage:.5},{label:"Dollar Rate",backgroundColor:n[1],borderColor:n[1],hoverBackgroundColor:n[1],hoverBorderColor:n[1],data:[89,40,32,65,59,80,81,56,89,40,65,59],barPercentage:.7,categoryPercentage:.5}]};e.push(this.respChart(r("#projections-actuals-chart"),"Bar",i,{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],xAxes:[{stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}}))}return e},e.prototype.init=function(){var a=this;Chart.defaults.global.defaultFontFamily="Nunito,sans-serif",a.charts=this.initCharts(),r(window).on("resize",(function(e){r.each(a.charts,(function(a,r){try{r.destroy()}catch(a){}})),a.charts=a.initCharts()}))},r.ChartJs=new e,r.ChartJs.Constructor=e}(window.jQuery),function(a){"use strict";window.jQuery.ChartJs.init()}()})();