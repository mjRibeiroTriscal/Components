window.addEventListener("load", ()=> {

    let stp1 = document.getElementById('stp1')
    let stp2 = document.getElementById('stp2')
    let stp3 = document.getElementById('stp3')
    let stp4 = document.getElementById('stp4')
    let stp5 = document.getElementById('stp5')
    let stp6 = document.getElementById('stp6')
    stp1.setAttribute("class", "active")

    let button = document.getElementById('button')
    button.addEventListener("click", ()=>{
        if(stp1.className == 'active' && stp2.className != 'active'){
            stp2.setAttribute("class", "active")
        }else if(stp2.className == 'active' && stp3.className != 'active'){
            stp3.setAttribute("class", "active")
        }else if(stp3.className == 'active' && stp4.className != 'active'){
            stp4.setAttribute("class", "active")
        }else if(stp4.className == 'active' && stp5.className != 'active'){
            stp5.setAttribute("class", "active")
        }else if(stp5.className == 'active'  && stp6.className != 'active'){
            stp6.setAttribute("class", "active")
        }
    })

})

let zeraTudo = () => {
    stp2.classList.remove("active")
    stp3.classList.remove("active")
    stp4.classList.remove("active")
    stp5.classList.remove("active")
    stp6.classList.remove("active")
}