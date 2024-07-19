import styled from "styled-components";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";
import TodayTips from "../article/TodayTips";
import EatWithMe from "../article/EatWithMe";
import ThisIsGood from "../article/ThisIsGood";

const WholeViewContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 0px;

    flex-direction: column;
    overflow: scroll;
    gap: 24px;
`;

const TodayTipsContainer = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 20px;
`;

const EatWithMeContainer = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 16px;
`;

const EatWithMePairContainer = styled.div`
    width: 100%;
    flex-direction: row;
    gap: 16px;
`;

const WholeView = ({}) => {
    return (
        <WholeViewContainer>
            <TodayTipsContainer>
                <TextLoadingView
                    text="오늘의 팁"
                    font="semibold"
                    size={20}
                    color={Colors.Black}
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
                <TodayTips
                    title={undefined}
                    content={undefined}
                    like={100}
                    dislike={100}
                    image={undefined}
                />
            </TodayTipsContainer>
            <EatWithMeContainer>
                <TextLoadingView
                    text="같이 먹어요"
                    font="semibold"
                    size={20}
                    color={Colors.Black}
                />
                <EatWithMePairContainer>
                    <EatWithMe
                        image={undefined}
                        title={undefined}
                        content={undefined}
                        like={100}
                        dislike={100}
                    />
                    <EatWithMe
                        image={undefined}
                        title={undefined}
                        content={undefined}
                        like={100}
                        dislike={100}
                    />
                </EatWithMePairContainer>
                <EatWithMePairContainer>
                    <EatWithMe
                        image={undefined}
                        title={undefined}
                        content={undefined}
                        like={100}
                        dislike={100}
                    />
                    <EatWithMe
                        image={undefined}
                        title={undefined}
                        content={undefined}
                        like={100}
                        dislike={100}
                    />
                </EatWithMePairContainer>
            </EatWithMeContainer>
            <EatWithMeContainer>
                <TextLoadingView
                    text="이거 좋아요"
                    font="semibold"
                    size={20}
                    color={Colors.Black}
                />
                <EatWithMePairContainer>
                    <ThisIsGood
                        image={undefined}
                        title={undefined}
                        like={100}
                        dislike={100}
                    />
                    <ThisIsGood
                        image={undefined}
                        title={undefined}
                        like={100}
                        dislike={100}
                    />
                </EatWithMePairContainer>
                <EatWithMePairContainer>
                    <ThisIsGood
                        image={undefined}
                        title={undefined}
                        like={100}
                        dislike={100}
                    />
                    <ThisIsGood
                        image={undefined}
                        title={undefined}
                        like={100}
                        dislike={100}
                    />
                </EatWithMePairContainer>
            </EatWithMeContainer>
        </WholeViewContainer>
    );
};

export default WholeView;