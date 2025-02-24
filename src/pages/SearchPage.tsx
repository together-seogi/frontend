import styled from "styled-components";
import TopBar from "../components/search/TopBar";
import TextLoadingView from "../components/common/TextLoadingView";
import { useState } from "react";
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

    return (
        <SearchPageContainer>
            <TopBar buf={(props) => setResultList(props)} />
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
                        imgUrl={props.imgUrl}
                        title={props.title}
                        likes={props.likes}
                        hates={props.hates}
                        articleId={props.articleId}
                    />
                ))}
            </ThisIsGoodViewContainer>
        </SearchPageContainer>
    );
};

export default SearchPage;