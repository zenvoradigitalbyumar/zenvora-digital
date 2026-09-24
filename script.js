const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20));
const menu=document.getElementById('menu'),links=document.getElementById('navLinks');
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 const n=document.getElementById('name').value.trim();
 const c=document.getElementById('contact').value.trim();
 const s=document.getElementById('service').value.trim()||'Digital project';
 const m=document.getElementById('message').value.trim();
 const subject = `New Zenvora project enquiry — ${s}`;
 const body = `Hello Zenvora Digital by Umar,

Name: ${n}
Contact: ${c}
Service: ${s}

Project:
${m}`;
 window.location.href = `mailto:zenvoradigitalbyumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 document.getElementById('formStatus').textContent='Opening your email app with the enquiry…';
});