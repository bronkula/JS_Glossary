;(function(w){

/*
tocEl - the id of an element to place the glossary into
tocTerm - the word that will be used for # links and ids
grabEl - the selector for an element to find terms
*/
if(!w.makeGloss) {
    w.makeGloss = function(tocEl,tocTerm,grabEl) {
        [].forEach.call(document.querySelectorAll(grabEl),function(el,i){
            var toc = document.getElementById(tocEl);

            var anchor = document.createElement("a");
            anchor.innerHTML = el.innerHTML;
            anchor.href = "#"+tocTerm+i;

            var li = document.createElement("li");
            li.appendChild(anchor);
            toc.appendChild(li);

            el.id = tocTerm+i;
        });
    }
}

})(window);
