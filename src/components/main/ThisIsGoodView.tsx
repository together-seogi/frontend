import styled from "styled-components";
import ThisIsGood from "../article/ThisIsGood";

const ThisIsGoodViewContainer = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 16px;
`;

const ThisIsGoodViewPairContainer = styled.div`
    width: 100%;
    flex-direction: row;
    gap: 16px;
`;

const ThisIsGoodView = () => {
    return (
        <ThisIsGoodViewContainer>
            <ThisIsGoodViewPairContainer>
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
            </ThisIsGoodViewPairContainer>
            <ThisIsGoodViewPairContainer>
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
            </ThisIsGoodViewPairContainer>
            <ThisIsGoodViewPairContainer>
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
            </ThisIsGoodViewPairContainer>
        </ThisIsGoodViewContainer>
    );
};

export default ThisIsGoodView;