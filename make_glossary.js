;(function(w){

/*
tocel - the id of an element to place the glossary into
tocterm - the word that will be used for # links and ids
grabel - the selector for an element to find terms
*/
if(!w.makeGloss) {
    w.makeGloss = function(tocel,tocterm,grabel) {
        [].forEach.call(document.querySelectorAll(grabel),function(el,i){
            var toc = document.getElementById(tocel);

            var anchor = document.createElement("a");
            anchor.innerHTML = el.innerHTML;
            anchor.href = "#"+tocterm+i;

            var li = document.createElement("li");
            li.appendChild(anchor);
            toc.appendChild(li);

            el.id = tocterm+i;
        });
    }
}

})(window);
