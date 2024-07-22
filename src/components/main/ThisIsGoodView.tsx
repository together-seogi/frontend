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
            { list.slice(7, 11).map((props, idx) => (
                <ThisIsGood
                    key={idx}
                    imgUrl={props.imgUrl}
                    title={props.title}
                    likes={props.likes}
                    hates={props.hates}
                    articleId={props.articleId}
                />
            ))}
        </ThisIsGoodViewContainer>
    );
};

export default ThisIsGoodView;