import styled from "styled-components";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";
import TodayTips from "../article/TodayTips";
import EatWithMe from "../article/EatWithMe";
import ThisIsGood from "../article/ThisIsGood";
import { ArticleListProps } from "../../pages/MainPage";

const WholeViewContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 0px;

    flex-direction: column;
    overflow: scroll;
    gap: 20px;
`;

const TodayTipsContainer = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 20px;
`;

const EatWithMeContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
`;

interface WholeViewProps {
    list: ArticleListProps[]
};

const WholeView = ({ list }: WholeViewProps) => {
    return (
        <WholeViewContainer>
            <TodayTipsContainer>
                <TextLoadingView
                    text="오늘의 팁"
                    font="semibold"
                    size={20}
                    color={Colors.Black}
                />
                { list.slice(0, 3).map((props, idx) => (
                    <TodayTips
                        key={idx}
                        title={props.title}
                        content={props.content}
                        like={props.like}
                        dislike={props.dislike}
                        image={props.image}
                        id={props.id}
                    />
                )) }
            </TodayTipsContainer>
            <TextLoadingView
                text="같이 먹어요"
                font="semibold"
                size={20}
                color={Colors.Black}
            />
            <EatWithMeContainer>
                { list.slice(3, 7).map((props, idx) => (
                    <EatWithMe
                        key={idx}
                        image={props.image}
                        title={props.title}
                        content={props.content}
                        like={props.like}
                        dislike={props.dislike}
                        id={props.id}
                    />
                ))}
            </EatWithMeContainer>
            <TextLoadingView
                text="이거 좋아요"
                font="semibold"
                size={20}
                color={Colors.Black}
            />
            <EatWithMeContainer>
                { list.slice(7, 11).map((props, idx) => (
                    <ThisIsGood
                        key={idx}
                        image={props.image}
                        title={props.title}
                        like={props.like}
                        dislike={props.dislike}
                        id={props.id}
                    />
                ))}
            </EatWithMeContainer>
        </WholeViewContainer>
    );
};

export default WholeView;