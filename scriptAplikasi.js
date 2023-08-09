

// coding


let  hitung= {
nomor:00,

}




// let tambah =function() {
// hitung.nomor+=1
// setTimeout( function(){
//     console.log(`nomor antrian ${hitung.nomor} ke teler 1`)
// },1000)
// return hitung.nomor

// }

// let tambah2= () =>{ hitung.nomor+=1;
//     setTimeout( function(){
//         console.log(`nomor antrian ${hitung.nomor} ke teler 2`)
//     },1000)
//  return hitung.nomor
// }






//    DOM




let tampil1= document.getElementsByClassName("kotak")
let layar_teller1= tampil1[0]
let layar_teller2= tampil1[1]

let teks= document.getElementsByTagName("span")
let layar_Teks= teks[1]

let tombol_teller1= document.querySelectorAll('button')[0]
let tombol_teller2= document.querySelectorAll('button')[1]

// dom event


let tambah =function() {
    hitung.nomor+=1
    
    layar_teller1.innerHTML= hitung.nomor
    setTimeout( function(){
        layar_Teks.textContent=`nomor antrian ${hitung.nomor}  ke teler 1`
    },1000)
    return hitung.nomor
    
}

let tambah2= () =>{ hitung.nomor+=1;
    layar_teller2.innerHTML= hitung.nomor
    setTimeout( function(){
        layar_Teks.textContent= `nomor antrian ${hitung.nomor} ke teler 2 `
        
    },1000)
    return hitung.nomor
}



    tombol_teller1.addEventListener('click',tambah)
    tombol_teller2.addEventListener('click',tambah2)
