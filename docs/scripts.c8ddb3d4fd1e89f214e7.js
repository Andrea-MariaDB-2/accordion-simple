!function(){function e(e){e.open=!e.open}window.addEventListener("DOMContentLoaded",(function(t){const n=new Swiper(".swiper-container",{effect:"flip",grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),o=window.mdc.topAppBar.MDCTopAppBar,d=window.mdc.drawer.MDCDrawer,c=window.mdc.list.MDCList,r=window.mdc.menu.MDCMenu,i=document.getElementById("vert_menu_opener"),a=document.getElementById("forward"),l=document.getElementById("nav-to-docs"),m=document.getElementById("back"),p=d.attachTo(document.querySelector(".mdc-drawer")),s=new r(document.querySelector(".mdc-menu"));s.setFixedPosition(!0),s.setAnchorElement(i),i.addEventListener("click",e=>{s.open=!s.open}),a.addEventListener("click",t=>{t.preventDefault(),n.slideNext(),e(p)}),m.addEventListener("click",t=>{t.preventDefault(),n.slidePrev(),e(p)}),l.addEventListener("click",e=>{n.slideTo(n.slides.length-1,2e3)});const u=o.attachTo(document.getElementById("app-bar"));u.setScrollTarget(document.getElementById("main-content")),c.attachTo(document.querySelector(".mdc-list")).wrapFocus=!0,u.listen("MDCTopAppBar:nav",()=>{e(p)})}))}();