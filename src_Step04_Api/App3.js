
import { Component } from 'react';
import './App.css'
import { json } from 'react-router-dom';

//클래스형 component
class App3 extends Component{
  //상태값 (UI 에서 사용하는 데이터) 
  state={
    posts:[]
  }

  

  render(){
    return (
      <div className="container">
        <h3>새글 작성 폼</h3>
        <form action="/v3/post" method="post" onSubmit={(e)=>{
            e.preventDefault();
            const url=e.target.action;
            const formData= new FormData(e.target);
            const formObject={}
            FormData.forEach((value, key)=>{
                formObject[key]=value;
            });
            const jsonString=json.stringify(formObject);

            fetch(url, {
                method: "post",
                headers:{"Content-Type":"application/json"},
                body:jsonString
            })
            .then(res=>res.json())
            .then(data=>{
                alert(data.id+ "번 psot로 등록 되었습니다")
                this.getPosts();
            })
            .catch(error=>{
                console.log("에러 발생", error)
            });
        }}>
            <input type="text" name="title" placeholder='제목...'/>  
            <input type="text" name="author" placeholder='작성자'/>
            <button type="submit">저장</button>  
        </form>
        <h3>글 목록입니다</h3>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {this.state.posts.map(item=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td><button onClick={()=>{
                            const title=prompt(item.id+" 번글을 수정합니다")
                            const obj={
                                title:title,
                                author:item.author
                            }
                            const jsonString = JSON.stringify(obj);
                        }}>
                        </button></td>
                    </tr>
                )}

            </tbody>
        </table>
      </div>
            
        
      )
    }   
}


export default App3;