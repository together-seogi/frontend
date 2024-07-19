import styled from "styled-components";
import ImageLoadingView from "../common/ImageLoadingView";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";

const EatWithMeContainer = styled.div`
    width: 100%;

    flex-direction: column;
    gap: 6px;
`;

const LikeContainer = styled.div`
    flex-direction: row;
    gap: 12px;
`;

const LikePairContainer = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

const EqualImageContainer = styled.div`
    width: 100%;
    aspect-ratio: auto 1/1;
`;

interface EatWithMeProps {
    image: string | undefined,
    title: string | undefined,
    content: string | undefined,
    like: number | undefined,
    dislike: number | undefined
};

const EatWithMe = ({ image, title, content, like, dislike }: EatWithMeProps) => {
    return (
        <EatWithMeContainer>
            <EqualImageContainer>
                <ImageLoadingView
                    src={image}
                    width="100%"
                    height="100%"
                    radius={8}
                    objectFit="cover"
                    alt="image"
                />
            </EqualImageContainer>
            <TextLoadingView
                text={title}
                font="semibold"
                size={16}
                color={Colors.Black}
            />
            <TextLoadingView
                text={content}
                font="medium"
                size={12}
                color={Colors.Gray2}
            />
            <LikeContainer>
                <LikePairContainer>
                    <IconButton
                        src="like"
                        size={12}
                        onclick={() => {}}
                    />
                    <TextLoadingView
                        text={`${like}개`}
                        font="regular"
                        size={12}
                        color={Colors.Gray2}
                    />
                </LikePairContainer>
                <LikePairContainer>
                    <IconButton
                        src="dislike"
                        size={12}
                        onclick={() => {}}
                    />
                    <TextLoadingView
                        text={`${dislike}개`}
                        font="regular"
                        size={12}
                        color={Colors.Gray2}
                    />
                </LikePairContainer>
            </LikeContainer>
        </EatWithMeContainer>
    );
};

export default EatWithMe;