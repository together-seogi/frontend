import styled from "styled-components";
import ImageLoadingView from "../common/ImageLoadingView";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router-dom";

const TodayTipsContainer = styled.div`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ContentContainer = styled.div`
    flex-direction: column;
    gap: 2px;
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

export interface TodayTipsProps {
    title: string | undefined,
    content: string | undefined,
    like: number | undefined,
    dislike: number | undefined,
    image: string | undefined,
    id: number | undefined
};

const TodayTips = ({ title, content, like, dislike, image, id }: TodayTipsProps) => {
    const navigate = useNavigate();
    return (
        <TodayTipsContainer
            onClick={() => navigate(`/detail/${id}`)}
        >
            <ContentContainer>
                <TextLoadingView
                    text={title}
                    font="semibold"
                    size={16}
                    color={Colors.Black}
                />
                <TextLoadingView
                    text={content}
                    font="medium"
                    size={14}
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
            </ContentContainer>
            <ImageLoadingView
                src={image}
                width="76px"
                height="76px"
                radius={8}
                objectFit="cover"
                alt="image"
            />
        </TodayTipsContainer>
    );
};

export default TodayTips;