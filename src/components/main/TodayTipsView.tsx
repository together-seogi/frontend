import styled from "styled-components";
import TodayTips, { TodayTipsProps } from "../article/TodayTips";

const TodayTipsViewContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 0px;

    flex-direction: column;
    overflow: scroll;
    gap: 20px;
`;

interface TodayTipsViewProps {
    list: TodayTipsProps[]
};

const TodayTipsView = ({ list }: TodayTipsViewProps) => {
    return (
        <TodayTipsViewContainer>
            { list.slice(0, 3).map((props, idx) => (
                <TodayTips
                    key={idx}
                    title={props.title}
                    content={props.content}
                    likes={props.likes}
                    hates={props.hates}
                    imgUrl={props.imgUrl}
                    articleId={props.articleId}
                />
            ))}
        </TodayTipsViewContainer>
    );
};

export default TodayTipsView