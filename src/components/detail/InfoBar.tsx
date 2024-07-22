import styled from "styled-components";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";

const InfoContainer = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 12px;
`;

const ChipBar = styled.div`
    flex-direction: row;
    gap: 8px;

    overflow-y: hidden;
    white-space: nowrap;
`;

const Chip = styled.div`
    padding: 4px 14px;
    background-color: ${Colors.Gray0};
    border-radius: 100px;
    align-items: center;
    flex-direction: row;
    gap: 12px;
`;

const LikePairContainer = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

interface InfoBarProps {
    title: string | undefined,
    category: string | undefined,
    likes: number | undefined,
    hates: number | undefined,
    content: string | undefined
}

const InfoBar = ({ title, category, likes, hates, content }: InfoBarProps) => {
    return (
        <InfoContainer>
            <TextLoadingView
                text={title}
                font="semibold"
                size={20}
                color={Colors.Black}
            />
            <ChipBar>
                <Chip>
                    <TextLoadingView
                        text={`23분 전`}
                        font="medium"
                        size={12}
                        color={Colors.Gray2}
                    />
                </Chip>
                <Chip>
                    <TextLoadingView
                        text={`#${category}`}
                        font="medium"
                        size={12}
                        color={Colors.Gray2}
                    />
                </Chip>
                <Chip>
                    <LikePairContainer>
                        <IconButton
                            src="like"
                            size={12}
                            onclick={() => {}}
                        />
                        <TextLoadingView
                            text={`${likes}개`}
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
                            text={`${hates}개`}
                            font="regular"
                            size={12}
                            color={Colors.Gray2}
                        />
                    </LikePairContainer>
                </Chip>
            </ChipBar>
            <TextLoadingView
                text={content}
                font="medium"
                size={16}
                color={Colors.Black}
            />
        </InfoContainer>
    );
};

export default InfoBar;