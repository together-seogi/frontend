import styled from "styled-components";
import TodayTips from "../article/TodayTips";

const TodayTipsViewContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 0px;

    flex-direction: column;
    overflow: scroll;
    gap: 20px;
`;

const TodayTipsView = () => {
    return (
        <TodayTipsViewContainer>
            <TodayTips
                title={undefined}
                content={undefined}
                like={100}
                dislike={100}
                image={undefined}
            />
            <TodayTips
                title={undefined}
                content={undefined}
                like={100}
                dislike={100}
                image={undefined}
            />
            <TodayTips
                title={undefined}
                content={undefined}
                like={100}
                dislike={100}
                image={undefined}
            />
        </TodayTipsViewContainer>
    );
};

export default TodayTipsView