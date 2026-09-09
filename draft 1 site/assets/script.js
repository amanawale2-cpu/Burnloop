document.querySelectorAll('[data-year]').forEach((node)=>node.textContent=new Date().getFullYear());

const brandTheme=document.createElement('style');
brandTheme.textContent=`
  :root{--paper:#444444;--purple:#7a3cff;--violet:#a56cff}
  .nav{background:#444444}.brand{color:#fff}.navlinks a{color:#efedf5}
  .mark{background:linear-gradient(145deg,#ad82ff,#5822be);box-shadow:0 8px 18px #00000055}
  .hero{background:radial-gradient(circle at 83% 10%,#7049ae 0,transparent 28%),linear-gradient(115deg,#444 12%,#383838 100%)}
  .hero h1{color:#fff}.hero p{color:#e4e1eb}.hero .eyebrow,.page-hero .eyebrow{color:#b99dff}
  .btn{box-shadow:0 8px 18px #1f102f55}
  .trust{background:#3d3d3d;border-color:#5e5e5e}.trust-inner{color:#eeedf4}.trust a{color:#c5aeff}
  .section{background:#fff}.page-hero{background:radial-gradient(circle at 83% 0,#69449e 0,transparent 28%),linear-gradient(120deg,#444,#383838)}
  .page-hero h1{color:#fff}.page-hero p{color:#e3e0ea}.breadcrumbs{color:#ded7e9}.breadcrumbs a{color:#c7afff}
`;
document.head.appendChild(brandTheme);

document.querySelectorAll('.mark').forEach((mark)=>{
  mark.innerHTML='<img src="assets/burnloop-logo.webp" alt="BurnLoop logo">';
});
const logoStyles=document.createElement('style');
logoStyles.textContent=`.mark{background:transparent!important;box-shadow:none!important;overflow:hidden}.mark:after{display:none}.mark img{width:100%;height:100%;display:block;object-fit:cover;border-radius:11px}`;
document.head.appendChild(logoStyles);
