# inView JS

InView Library for Checking If an Element is in View

## HTML

```css
<style>
    .indata,.viewdta{height: 100vh;width: 100%;}
</style>
```

```html
<div class="indata"></div>
<div class="viewdta 1"></div>
<div class="viewdta 2"></div>
<div class="viewdta 3"></div>
<div class="viewdta 4"></div>
```

```JS
<script src="inView.js"></script>

 <script>

    var options = {
        element:document.querySelector('.viewdta'),
        hasView:function(element,observe){
                console.log(element)
        },
        rootOffset:'0px',
        threshold:0,
        multipleGroup:false // default false

    }
    new inView(options).init();

</script>

```
## for multple items
If you want to render multiple items, use ```{multipleGroup:true}``` and pass multiple elements to the element.


```
 <script>
    const options = {
        element:document.querySelectorAll('.viewdta'),
        hasView:function(element,observe){
                console.log(element)
        },
        rootOffset:'0px',
        threshold:0,
        multipleGroup:true // default false
     }
    new inView(options).init();

</script>
```

## hasView event 
Call the ```hasView``` event if you want to trigger it after initialization, instead of calling it in the options.

```JS

var view = new inView(options);
view.init(); // 

view.on('hasView',function(element,observe){
    console.log(element)
});
```
