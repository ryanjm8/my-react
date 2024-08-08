// src/router/router.js     
import App from '../App'
import Home from '../pages/Home'

import { createBrowserRouter } from "react-router-dom"
import Member0 from '../pages/Member0'
import MemberForm from '../pages/MemberForm'


//라우트 정보를 배열에 저장
const routes=[
    {path:"/", element: <Home/>},
    {path:"/members", element: <Member0/> },
    {path:"/members/new", element: <MemberForm/>}
]

//BrouserRouter 를 만들기
const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children: routes.map((route)=>{
        return {
            index: route.path === "/", //자식의 path 가 "/" 면 index 페이지 역할을 하게 하기
            path: route.path === "/" ? undefined : route.path, // path 에 "/" 두개가 표시되지 않게
            element: route.element //어떤 컴포넌트를 활성화 할것인지
        }
    })
}])

// import 한 곳에 router(BrowuserRouter) 를 사용하도록 
export default router