class BurgetTopnav extends ELEM{
    constructor(header){
        super(header);
        let that = this;
        let nav = this.query("nav");
        let burger = nav.insertBefore("div","class:burger");
        burger.add("div");
        burger.insertBefore("hr");
        burger.on("click",(e)=>{
            e.preventDefault();
            e.stopPropagation();
            that.e.classList.toggle("expanded");
        });
        window.addEventListener("click",()=>{
            that.e.classList.remove("expanded");
        });
    }
    transparent = true;
    toTransparent(){
        if(!this.transparent){
            this.e.classList.remove("opaque");
            this.transparent = true;
        }
    }
    toOpaque(){
        if(this.transparent){
            this.e.classList.add("opaque");
            this.transparent = false;
        }
    }
};

let pageinit = function(){
    //initialize nav etc
    //let nav = new ELEM(document.querySelector("nav"));
    let nav = new BurgetTopnav(document.querySelector("#nav-header"));
    
    //toggle opacity on scroll
    window.addEventListener("scroll",()=>{
        let y = window.scrollY;
        console.log(y,window.innerHeight);
        if(y < window.innerHeight/2){
            console.log("tr");
            nav.toTransparent();
        }else{
            console.log("op");
            nav.toOpaque();
        }
    });
};

pageinit();