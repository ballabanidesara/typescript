(()=>{var e=function(){function e(){}return e.prototype.formatName=function(){return this.name.toUpperCase()},e}();function n(e,n){var r;void 0===n&&(n="Multimath Player"),r=e<0?o:t,document.getElementById("postedScores").innerText=e+" - "+n,r("Score: "+e)}document.getElementById("startGame").addEventListener("click",(function(){var e,t,o=("playername",""===(e=document.getElementById("playername")).value?void 0:e.value);void 0===(t=o)&&(t="Multimath Player"),console.log("New game starting for player: "+t),n(80,o),n(-5,o)}));var t=function(e){return console.log(e)};function o(e){console.error(e)}var r=new e;r.name="Lanier",console.log(r.formatName())})();