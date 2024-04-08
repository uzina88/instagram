// 이벤트 리스터(이벤트 감지) DOMContentLoaded
document.addEventListener("DOMContentLoaded",
    function(e){
        let btn3 = document.querySelector("input") //input 클릭하면 이벤트 실행
        btn3.addEventListener("click",
            function(e){
                console.log(e.target.value)
            }
        )
    }
)


// let btn3 = document.querySelector("input") //input 클릭하면 이벤트 실행
// btn3.addEventListener("click",
//     function(e){
//         console.log(e.target.value)
//     }
// )

function hi(){
    alert("hi")
}

