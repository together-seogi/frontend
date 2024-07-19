import styled from "styled-components";
import EatWithMe from "../article/EatWithMe";

const EatWithMeViewContainer = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 16px;
`;

const EatWithMeViewPairContainer = styled.div`
    width: 100%;
    flex-direction: row;
    gap: 16px;
`;

const EatWithMeView = () => {
    return (
        <EatWithMeViewContainer>
            <EatWithMeViewPairContainer>
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
            </EatWithMeViewPairContainer>
            <EatWithMeViewPairContainer>
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
            </EatWithMeViewPairContainer>
        </EatWithMeViewContainer>
    );
};

export default EatWithMeView;