import styled from "styled-components";
import TopBar from "../components/search/TopBar";
import TextLoadingView from "../components/common/TextLoadingView";
import { useEffect, useState } from "react";
import ThisIsGood, { ThisIsGoodProps } from "../components/article/ThisIsGood";
import Colors from "../consts/Colors";

const SearchPageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 20px;

    position: relative;
    flex-direction: column;
    gap: 20px;
`;

const ThisIsGoodViewContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    overflow: scroll;
    gap: 16px;
`;

const SearchPage = () => {
    const [resultList, setResultList] = useState<ThisIsGoodProps[]>([]);

    useEffect(() => {
        setResultList([
            {title: "1", like: 20, dislike: 200, image: undefined, id: 123},
            {title: "2", like: 20, dislike: 200, image: undefined, id: 123},
            {title: "3", like: 20, dislike: 200, image: undefined, id: 123},
            {title: "4", like: 20, dislike: 200, image: undefined, id: 123},
            {title: "5", like: 20, dislike: 200, image: undefined, id: 123},
            {title: "6", like: 20, dislike: 200, image: undefined, id: 123},
            {title: "7", like: 20, dislike: 200, image: undefined, id: 123},
        ])
    }, [])

    return (
        <SearchPageContainer>
            <TopBar />
            <TextLoadingView
                text={`검색 결과 ${resultList.length}`}
                font="medium"
                size={14}
                color={Colors.Gray2}
            />
            <ThisIsGoodViewContainer>
                { resultList.map((props, idx) => (
                    <ThisIsGood
                        key={idx}
                        image={props.image}
                        title={props.title}
                        like={props.like}
                        dislike={props.dislike}
                        id={props.id}
                    />
                ))}
            </ThisIsGoodViewContainer>
        </SearchPageContainer>
    );
};

export default SearchPage;