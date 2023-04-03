function inView(options){
    // developed by vishal rathour
    // name :- inView 
    // version :- 0.0.2
    const rootOffset = options.rootOffset || '0px';
    const threshold = options.threshold || 0;
    const multipleGroup = options.multipleGroup || false;
    const hasView = options.hasView || null;
    const elements = options.element || null;
    let extraOnCallBack = null;
   
    const start = {
            init:function(){
                start.render()
            },
            render:function(){
                console.log('render start')
                start.caching();
            },
            caching:function(){
                let observer = new IntersectionObserver(start.callback, {
                    root:null,
                    rootMargin:rootOffset,
                    threshold:threshold
                });
                if(multipleGroup === false){
                    observer.observe(elements);
                }
                else
                {
                    try{
                        elements.forEach(function(el){
                            observer.observe(el);
                        });
                    }
                    catch(e){
                        console.error('please use {multipleGroup} false if you want to render single item.')
                    }
                }
            },
            callback:function(entries, observer){
               if(entries.length == 1){
                  if(entries[0].isIntersecting){
                     hasView && hasView.call(start,entries[0].target,entries[0]);
                     extraOnCallBack !== null && extraOnCallBack.call(start,entries[0].target,entries[0])
                  }
               }
               else
               {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting){
                            hasView && hasView.call(start,entry.target,entry);
                            extraOnCallBack !== null && extraOnCallBack.call(start,entry.target,entry)
                        }
                    })
               }
                
            },
            on:function(event,handler){
               if(event == 'hasView'){
                  extraOnCallBack = handler;
               }
                
            }


    }
    return start;


}
