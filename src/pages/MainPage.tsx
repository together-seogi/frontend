import styled from "styled-components";
import TopBar from "../components/main/TopBar";
import { useEffect, useState } from "react";
import WholeView from "../components/main/WholeView";
import TodayTipsView from "../components/main/TodayTipsView";
import EatWithMe from "../components/article/EatWithMe";
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

const MainPage = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const tabView = () => {
        switch (tabIndex) {
            case 0:
                return <WholeView />
            case 1:
                return <TodayTipsView />
            case 2:
                return <EatWithMeView />
            case 3:
                return <ThisIsGoodView />
            default:
                return null;
        }
    }

    useEffect(() => {
        console.log(tabIndex)
    }, [tabIndex]);

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