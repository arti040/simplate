
simplate
========

Simplate is a tiny responsive template engine for simple websites like blogs, company's websites or even apps.
It is really, really basic and not bullet-proof (for now) so if you don't have strong foundation in CSS/LESS you should probably go with Bootstrap or use any other CSS framework, there are many on today's Internet.

**Main goals:**
  - intelligent responsivness on every device (I'm still working on it!);
  - configure with just one SASS file, LESS support has been dropped!;
  - only layout related things are included (boxes), so no buttons, forms or any other pre-styled elements - if you need them, use Bootstrap or Foundation;
  - no tons of DIVs, columns or billion of classes to define an element - if you want 3 boxes in row, you take 3 elements and apply them class-name "box span[fraction]" (explained below), that's all;
  - no grid apprach, so no floats and clearfixes are needed - every box is just a inline-block element;
  - in 9/10 cases no any additional DIV.container is needed;
  - you can build boxes in almost every combination, just few examples:
    * one full-width element:
    ```<div class="box"></div>```
    
    * 2-in-row:
    ```
    <div class="box span1-2"></div>
    <div class="box span1-2"></div>
    ```
    
    * 3-in-row:
    ```
    <div class="box span1-3"></div>
    <div class="box span1-3"></div>
    <div class="box span1-3"></div>
    ```
    
    * 3/4 + 1/4, like content + sidebar:
    ```
    <div class="box span3-4"></div> // 75% width of its container
    <div class="box span1-4"></div> // 25% width of its container
    ```
    
    * ...and so on. 


**Why span1-2, span1-3? What's that?**

They are just a CSS-class representation of fractions. In example: 1-2 means 1/2 (your box will gonna occupy 50% of its container), 1-5 meanse 1/5 (20% of cotnainer) etc.

**Offsets**

Grid's-like offsets are possible too. In example, if you have four elements in row but you want only three and the last one needs to be moved to the right of its parent, you can use an offset class-name like in the example below:
```
<div class="some-container">
  <div class="box span1-4"></div> //box occupies 25% of parent's width
  <div class="box span1-4"></div> //box occupies 25% of parent's width
  <div class="box span1-4 offset1-4"></div> 
  //box occupies 25% of parent's width but also has left-margin set 
  //to 25% which moves it to the right border of the container.
</div>
```
Remember one thing only - sum of all elements widths and offsets cannot overdraw 100%!


**Only DIVs?**

Of course no! You are not limited to DIVs only! Every element can be a box, just give it a class ".box":
```
<a href="#" class="box span1-5">This a link, which is also a box, which has 20% of its parent's width</a>
```


**Adventages of using .box-container:**

If you use a container and will not add any aditional classes for boxes, like below:
```
<div class="box-container">
  <div class="box></div>
  <div class="box></div>
</div>
```

...simplate will automatically add them for you. In this case, each of box will get "span1-2" and start to occupie 50% of its parent. Cool, huh? :D Also, you can give a class name as a parametr (container) and simple will iterate thorugh desired boxes only. What's more - you cand add a fixed class for group of boxes in a particular container. Quick example:

```
setBoxes('my-posts','span1-7');
```

...which means - take containers with class .my-posts only and give .span1-7 for each .box inside. Yay! :-)


**Is is possible to force one box to behave as another one, in example - on phone screens?**

Sure! Use be-like() mixin then!

```
.span1-2 {
  @include respond-to('phone') {
    @include be-like('span1-4');
  }
}
```

In the example above, .span1-2 box, which normally occupies 50% of the space of its parent, will occupy 25% of that space, when displayed on small screen.


Integration:
------------
1. include js/simplate.js in your project, however you prefer to;
2. add css/simplate.scss folder to your project and include simplate.scss/simplate.scss file during a compilation;
3. use simplate() function according to description inside simplate.js

Voila!


Demo:
-----
It took me only few hours to write it, so as for now only a simple demo is available. Documentation will come later, though every LESS file in the repo has useful comments.

https://arti040.github.io/simplate/
