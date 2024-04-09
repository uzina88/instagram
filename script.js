document.addEventListener("DOMContentLoaded",
    function(e){
        //아이디 변경
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )
        // 프로필 편집 버튼
        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false //변경 여부 확인

        profileEditButton.addEventListener("click",
            function(e){
                if (changing == false ) {//변경 전                    
                    let _userinfo = userInfo.textContent                   
                    let _summary = summary.textContent                   
                    let _profileDetail = profileDetail.textContent                   

                    userInfo.innerHTML = "<input value="+ _userinfo + "></input>"
                    summary.innerHTML = "<input value="+ _summary + "></input>"
                    profileDetail.innerHTML = "<input value="+ _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                    
                } else {//변경 후
                    let _userInfo = userInfo.querySelector("input").value
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary

                    if (_profileDetail.startsWith("http")){//html 넣으면 링크 추가
                        _profileDetail = "<a href="+ _profileDetail + ">" + _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail
                    e.target.textContent = "프로필 편집"
                    changing = false

                }
            }
        )

        // else 부터 실행 되는 스크립트
        // profileEditButton.addEventListener("click",
        //     function(e){
        //         if (changing) {//변경 후 =true
        //             let _userInfo = userInfo.querySelector("input").value
        //             let _summary = summary.querySelector("input").value
        //             let _profileDetail = profileDetail.querySelector("input").value

        //             userInfo.innerHTML = _userInfo
        //             summary.innerHTML = _summary

        //             if (_profileDetail.startsWith("http")){//html 넣으면 링크 추가
        //                 _profileDetail = "<a href="+ _profileDetail + ">" + _profileDetail + "</a>"
        //             }

        //             profileDetail.innerHTML = _profileDetail
        //             e.target.textContent = "프로필 편집"
        //             changing = false

        //         } else {//변경 전
        //             let _userinfo = userInfo.textContent                   
        //             let _summary = summary.textContent                   
        //             let _profileDetail = profileDetail.textContent                   

        //             userInfo.innerHTML = "<input value="+ _userinfo + "></input>"
        //             summary.innerHTML = "<input value="+ _summary + "></input>"
        //             profileDetail.innerHTML = "<input value="+ _profileDetail + "></input>"

        //             e.target.textContent = "프로필 편집 완료"
        //             changing = true
                    
        //         }
        //     }
        // )

        let profile_pic = document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",
            function(e){
                e.target.style.filter = "grayscale(100%)"
            }
        )
        profile_pic.addEventListener("mouseleave",
            function(e){
                e.target.style.filter = "grayscale(0%)"
            }
        )
        profile_pic.addEventListener("click",
            function(e){
                profile_pic.setAttribute("src", prompt("이미지 url을 입력해 주세요!"))
            }
        )
    }
)