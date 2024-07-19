import styled from "styled-components";
import ThisIsGood, { ThisIsGoodProps } from "../article/ThisIsGood";

const ThisIsGoodViewContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    overflow: scroll;
    gap: 16px;
`;

interface ThisIsGoodViewProps {
    list: ThisIsGoodProps[]
}

const ThisIsGoodView = ({ list }: ThisIsGoodViewProps) => {
    return (
        <ThisIsGoodViewContainer>
            { list.map((props, idx) => (
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
    );
};

export default ThisIsGoodView;