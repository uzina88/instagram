// 이벤트 리스터(이벤트 감지) DOMContentLoadedorigim
// document.addEventListener("DOMContentLoaded",
//     function(e){
//         let btn3 = document.querySelector("input") //input 클릭하면 이벤트 실행
//         btn3.addEventListener("click",
//             function(e){
//                 alert(e.target.value)
//             }
//         )
//     }
// )


// let btn3 = document.querySelector("input") //input 클릭하면 이벤트 실행
// btn3.addEventListener("click",
//     function(e){
//         alert(e.target.value)
//     }
// )

// function hi(){
//     alert("hi")
// }




document.addEventListener("DOMContentLoaded",
    function(e){ 
        document.addEventListener("keydown",
            function(e){ // Enter가 입력되면 확인창 나오기
                console.log(e.key)
                if (e.key === "Enter"){ 
                    alert("this is Enter!")
                }
            }
        )
        // 키가 눌릴 경우 이벤트 실행
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
                console.log(e.target.value)
            }
        ) // 바뀌면 이벤트 실행
        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        ) // 값이 들어갔을 때 이벤트 실행
        let input = document.querySelector("#input")
        input.addEventListener("input",
            function(e){
                console.log(e.target.value)
            }
        )
        let input2 = document.querySelector("#input2")
        input2.addEventListener("click",
            function(e){
                console.log(e.target.getAttribute("type")) //속성 가져오기
                console.log(e.target.getAttribute("value")) //value 가져오기
            }
        )
        let input3 = document.querySelector("#input3")
        input3.addEventListener("click",
            function(e){
                e.target.setAttribute("type","text") // 요소의 속성 바꿔주기
            }
        )
        //이미지 바꿔주기
        let input4 = document.querySelector("#input4")
        
        let img = document.querySelector("img")
        let img1 = "./image/hl 1.jpg"
        let img2 = "./image/hl 2.jpg"
        let img3 = "./image/profile.jpg"

        input4.addEventListener("click",
            function(e){
                let src = img.getAttribute("src")
                if (src === img1){
                    img.setAttribute("src", img2)
                } else if(src === img2){
                    img.setAttribute("src", img3)
                } else {
                    img.setAttribute("src", img1)
                }
            }
        )
        // textContent 글자 가져옴
        let input5 = document.querySelector("#input5")
        let p1 = document.querySelector("#p1")

        input5.addEventListener("click",
            function(e){
               console.log(p1.textContent)
               p1.textContent = "JS로 입력함" //글자 바꾸기
            }
        )
        
    }
)

// 마우스 오버시 효과주기
function red(e){
    e.target.style.backgroundColor = "red"
}

function blue(e){
    e.target.style.backgroundColor = "blue"
}

