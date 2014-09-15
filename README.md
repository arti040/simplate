
simplate
========

Simplate is a tiny responsive template engine for simple websites like blogs, company's websites or even apps.
It is really, really basic and not bullet-proof (for now) so if you don't have strong foundation in CSS/LESS you should probably go with Bootstrap or use any other CSS framework, there are many on today's Internet.

**Main goals:**
  - intelligent responsivness on every device (I'm still working on it!);
  - configure with just one LESS or SASS file (SASS version will be available later);
  - only layout related things are included (boxes), so no buttons, forms or any other pre-styled elements - if you need them, use Bootstrap or Foundation;
  - no tons of DIVs, columns or billion of classes to define an element - if you want 3 boxes in row, you take 3 elements and apply them class-name ".box", that's all;
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


**(TODO!) Adventages of using .box-container:**

If you use a container and will not add any aditional classes for boxes, like below:
```
<div class="box-container">
  <div class="box></div>
  <div class="box></div>
</div>
```

...simplate will automatically add them for you. In this case, each of box will get "span1-2" and start to occupie 50% of its parent. Cool, huh? :D


Demo:
-----
It took me only few hours to write it, so as for now only a simple demo is available. Documentation will come later, though every LESS file in the repo has useful comments.

https://arti040.github.com/simplate/demo.html
