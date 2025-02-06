document.addEventListener('scroll',() =>{
    const objects =document.querySelectorAll('.scroll-in');
    const cb = function(entries,observer) {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('displayed');
            } else{
                entry.target.classList.remove('displayed');
            }
        });
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    const io =new IntersectionObserver(cb,options);
    objects.forEach(Object =>{
        io.observe(Object);
    });
});