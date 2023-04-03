# inView JS

inView library use to check in view in element.

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
if want to render for multile items, use ```{multipleGroup:true}``` and pass multiple elements in element.

```JS
 <script>

    var options = {
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
call ```hasView``` event if you want to call after initialized instead of calling in options.

```JS

var view = new inView(options);
view.init(); // 

view.on('hasView',function(element,observe){
    console.log(element)
});
```
