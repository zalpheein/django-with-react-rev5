import React, { useState } from "react";

// PostList 컴포넌트가 만들어 질때 API가 호출 되도록 할 경우 사용
import {useEffect} from "react";

import Axios from "axios";

import Post from "Post";

const apiUrl = "http://localhost:8000/api/posts/"

function PostList() {

    const [postList, setPostList] = useState([]);

    // useEffect는 2개 인자... 첫번째 인자는 함수, 두번째는 리스트
    // 두번째 인자가 빈리스트 경우, 처음 컨포넌트가 생성되는 시점에 1회만 호출
    //useEffect( () => {}, []);
    useEffect( () => {

        // Axios.get 함수는 반드시 결과를 반환한다는 의미로 프라미스 객체를 반환
        // 하지만 다른 도메일 주소를 호출 할 경우, 크로스브라우저 장애 발생.... 
        // 그래서 서버단(backend)에서 이를 허용한다는 설정이 필요
        // 장고 단에서 "djoango cors headers" 라이브러시 설치 및 이용
        // https://github.com/adamchainz/django-cors-headers
        Axios.get(apiUrl)
            .then(response => {
                const {data} = response;
                console.log("loaded response : ", response)
                setPostList(data)
            })
            .catch(error => {
                //error.response
            })
        console.log("mouted");
    }, []);

    return (
        <div>
            <h2>PostList</h2>
            {postList.map(
                // JSON 데이터를 읽고 그대로 뿌림
                // post => (
                //     <div>{JSON.stringify(post)}</div>
                // )

                // 문자열 + 태그 조합
                // post => {
                //     const {caption, location, photo } = post;
                //     return <div>{caption}, {location}, {photo}</div>;
                // }

                // 좀더 이쁘게
                // post => {
                //     const {id, caption, location, photo } = post;
                //     return <div key={id}>
                //                 <img src={photo} alt= {caption} style={{ width: "80px"}} />
                //                 {caption}, {location}
                //             </div>;
                // }

                // postList 단위가 아닌 post 단위로. post 가 여러개로서의 postList를 사용하기 권장
                // post.js 파일 생성하여 단위 처리 진행
                post => {
                    return <Post post={post}  key={post.id} />

                }
            )};
        </div>
    )
}

export default PostList;








