import styled from "styled-components";
import EatWithMe, { EatWithMeProps } from "../article/EatWithMe";

const EatWithMeViewContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    overflow: scroll;
    gap: 16px;
`;

interface EatWithMeViewProps {
    list: EatWithMeProps[]
}

const EatWithMeView = ({ list }: EatWithMeViewProps) => {
    return (
        <EatWithMeViewContainer>
            { list.map((props, idx) => (
                <EatWithMe
                    key={idx}
                    image={props.image}
                    title={props.title}
                    content={props.content}
                    like={props.like}
                    dislike={props.dislike}
                />
            ))}
        </EatWithMeViewContainer>
    );
};

export default EatWithMeView;