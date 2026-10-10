const words=["IT Student","Web Developer","Java Learner","Creative Explorer"];
let wi=0,ci=0,del=false;
const el=document.getElementById("typing");
function type(){
  const w=words[wi];
  el.textContent=del?w.slice(0,ci--):w.slice(0,ci++);
  if(!del && ci>w.length){del=true;setTimeout(type,900);return}
  if(del && ci<0){del=false;wi=(wi+1)%words.length;ci=0}
  setTimeout(type,del?45:85)
} type();

const links=[...document.querySelectorAll(".nav a")];
const sections=[...document.querySelectorAll("section[id]")];
const obs=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))
  }
}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>obs.observe(s));
