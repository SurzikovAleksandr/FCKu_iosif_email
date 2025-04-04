let spriteLogoArr = ['5px -32px','-45px -32px','-93px -32px', '-143px -32px']
let logo = document.querySelector('#logo')
logo.style.backgroundPosition = spriteLogoArr[Math.floor(Math.random() * (4 - 0) + 0)]
