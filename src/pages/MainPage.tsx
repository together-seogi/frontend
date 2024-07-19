import { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../components/main/TopBar";
import WholeView from "../components/main/WholeView";
import TodayTipsView from "../components/main/TodayTipsView";
import EatWithMeView from "../components/main/EatWithMeView";
import ThisIsGoodView from "../components/main/ThisIsGoodView";

const MainPageContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 20px;

    position: relative;
    flex-direction: column;
    overflow: scroll;
    gap: 24px;
`;

export interface ArticleListProps {
    title: string | undefined,
    content: string | undefined,
    like: number | undefined,
    dislike: number | undefined,
    image: string | undefined,
    id: number | undefined
};

const MainPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [articleList, setArticleList] = useState<ArticleListProps[]>([])

    useEffect(() => {
        setArticleList(
            [
                {title: "1", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "2", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "3", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "4", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "5", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "6", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "7", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "8", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "9", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "10", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
                {title: "11", content: "이것은 아마도 내용일 겁니다.", like: 20, dislike: 200, image: undefined, id: 1234},
            ]
        )
    }, [])

    const tabView = () => {
        switch (tabIndex) {
            case 0:
                return <WholeView list={articleList} />
            case 1:
                return <TodayTipsView list={articleList} />
            case 2:
                return <EatWithMeView list={articleList} />
            case 3:
                return <ThisIsGoodView list={articleList} />
            default:
                return null;
        }
    }

    return (
        <MainPageContainer>
            <TopBar
                tabIndex={tabIndex}
                onChangeTabIndex={(idx) => setTabIndex(idx)}
            />
            {tabView()}
        </MainPageContainer>
    );
};

export default MainPage;