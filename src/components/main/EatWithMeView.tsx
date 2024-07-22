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
            { list.slice(3, 7).map((props, idx) => (
                <EatWithMe
                    key={idx}
                    imgUrl={props.imgUrl}
                    title={props.title}
                    content={props.content}
                    likes={props.likes}
                    hates={props.hates}
                    articleId={props.articleId}
                />
            ))}
        </EatWithMeViewContainer>
    );
};

export default EatWithMeView;