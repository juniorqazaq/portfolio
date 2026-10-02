const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
matchMedia('(min-width: 761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const config=window.PORTFOLIO||{};
function verifiedUrl(value){try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:null;}catch{return null;}}
function replaceWithLink(element,url,label,className){const href=verifiedUrl(url);if(!element||!href)return;const link=document.createElement('a');link.href=href;link.textContent=label;link.className=className||'';link.target='_blank';link.rel='noopener noreferrer';element.replaceWith(link);}
if(config.internshipEndDate)document.querySelector('[data-internship-end]').textContent=config.internshipEndDate;
function updateProfileLink(selector,url){const element=document.querySelector(selector);const href=verifiedUrl(url);if(element&&href){element.href=href;element.target='_blank';element.rel='noopener noreferrer';}}
updateProfileLink('[data-github-profile]',config.githubUrl);
updateProfileLink('[data-linkedin-profile]',config.linkedinUrl);
document.querySelectorAll('[data-project]').forEach(card=>{const project=config.projects?.[card.dataset.project];if(!project)return;replaceWithLink(card.querySelector('[data-source-link]'),project.githubUrl,'GitHub');replaceWithLink(card.querySelector('[data-demo-link]'),project.demoUrl,'Live demo');if(project.screenshot){const img=document.createElement('img');img.src=project.screenshot;img.alt=project.screenshotAlt||'Project screenshot';img.loading='lazy';img.className='project-screenshot';img.addEventListener('error',()=>img.remove());card.querySelector('.project-visual').append(img);}});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('waiting');observer.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>{element.classList.add('waiting');observer.observe(element);});}
// Keep the compact navigation aligned with the section being read.
if('IntersectionObserver' in window){const sectionObserver=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible){navigation.querySelectorAll('a').forEach(link=>{const current=link.hash==='#'+visible.target.id;link.classList.toggle('active',current);if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-15% 0px -55% 0px',threshold:[0,.2,.5]});document.querySelectorAll('main>section').forEach(section=>sectionObserver.observe(section));}
