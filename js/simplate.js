(function() {

    //defautls
    var opts = {
      containerClass: 'box-container',
      boxClass: 'box',
      lastBoxClass: '.last-box'
    }
 		var resizeTimeoutId;	

  	// useful functions		
		function hasClass(el,name){
			return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
		}
		function addClass(el,name){
			if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }	
		}
		function removeClass(el,name){
			el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
		}			
		function matchClass(el,pattern) {
  		return new RegExp(pattern).test(el.className);
		}
		
		function windowResize(e) {
			window.clearTimeout(resizeTimeoutId);
			resizeTimeoutId = window.setTimeout(function(){ console.log('Simplate: Layout changed.'); },200);
		}
		function equalsHeights(firstEL,secondEl) {
		  var firstEl = document.getElementById(firstEl);
		  var secondEl = document.getElementById(secondEl);
  		var firstHeight = firstEl.offsetHeight;
  		var secondHeight = secondEl.offsetHeight;
  		firstHeight > secondHeight ? secondEl.style.height = firstHeight + 'px' : firstEl.style.height = secondHeight + 'px';
		}
		
		function getContainers(container) {
		  el = container || opts.containerClass;
  		return document.querySelectorAll('.'+el);
		}
		function getBoxes(container) {
  		return container.querySelectorAll('.'+opts.boxClass);
		}
		
		function setHeight(parents,el) {
		  var parents = getContainers();
		  var parentsLength = parentEls.length;
		  var i = 0;
		  for(i;i<parentsLength;++i) {
  		  var parentHeight = parents[i].offsetHeight;
  		  var boxes = getBoxes(pranets[i]);
  		  var boxesLength = boxes.length;
  		  var j = 0;
  		  for(j;j<boxesLength;++j) {
    		  boxes[i].style.height = parentHeight + 'px';
  		  }
		  }
		}
		
		/*
		 * setBoxes() adds span[1-6]-[2-7] class or customClass given as parametr.
		 * Params:
		 * container: className (DOM) || .box-container
		 * customClassName: className (DOM)
		 */
		
		function setBoxes(container,customClassName) {
		  var parents;
		  var i = 0;
		  
		  container ? parents = getContainers(container) : parents = getContainers(); 
  		var parentsLength = parents.length;
  			
  		//all magic is here  		
  		for(i;i<parentsLength;++i) {
  		  var j = 0;
    		var children = getBoxes(parents[i]);
    		var childrenLength = children.length;
    		
    		//if custom class is defined use it
    		if(customClassName) {
      		if(typeof customClassName == 'array') {
        		//TODO
      		}
      		else {
        		className = customClassName;
      		}
    		}
    		else {
      		if(childrenLength < 8) { var className = 'span1-'+childrenLength; }
          else { console.log("Too much boxes in container, set span1[2-7] manually."); }
    		}
    		
    		addClass(parents[i].lastChild,opts.lastBoxClass);
    		
    		for(j;j<childrenLength;++j) {
    		  if(!matchClass(children[j],/span[1-6]-[2-7]/)) { 
    		    addClass(children[j],className);
    		  }
    		}
      }
		}
    
    //fire!
		setBoxes();
})();