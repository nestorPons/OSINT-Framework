var btn_legend = document.getElementById('btn-legend');
var cnt_legend = document.getElementById('cnt-legend');

btn_legend.addEventListener("click", function() {
    cnt_legend.style.display == "inherit" ?
        cnt_legend.style.display = "none" :
        cnt_legend.style.display = "inherit";
});