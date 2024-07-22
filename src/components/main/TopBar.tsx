import styled from "styled-components";
import Colors from "../../consts/Colors";
import TextLoadingView from "../common/TextLoadingView";
import ImageLoadingView from "../common/ImageLoadingView";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router-dom";

const TopBarContainer = styled.div`
    width: 100%;

    flex-direction: column;
    gap: 12px;
`;

const LogoBar = styled.div`
    width: 100%;
    padding: 12px 0px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const IconBar = styled.div`
    flex-direction: row;
    gap: 12px;
`;

const ChipBar = styled.div`
    flex-direction: row;
    gap: 8px;

    overflow-y: hidden;
    white-space: nowrap;
`;

const Chip = styled.button<{$color: Colors}>`
    padding: 6px 14px;
    background-color: ${props => props.$color};
    border-radius: 100px;
`;

interface TopBarProps {
    tabIndex: number,
    onChangeTabIndex: (idx: number) => void
};

const TopBar = ({ tabIndex, onChangeTabIndex }: TopBarProps) => {
    const navigate = useNavigate();
    return (
        <TopBarContainer>
            <LogoBar>
                <ImageLoadingView
                    src="src/assets/icons/gachiseogi.svg"
                    width="90px"
                    height="24px"
                    radius={0}
                    objectFit="cover"
                    alt="Logo"
                />
                <IconBar>
                    <IconButton
                        src="search"
                        size={28}
                        onclick={() => navigate("search")}
                    />
                    <IconButton
                        src="account"
                        size={28}
                        onclick={() => navigate("account")}
                    />
                </IconBar>
            </LogoBar>
            <ChipBar>
                <Chip
                    $color={tabIndex === 0 ? Colors.Primary : Colors.Gray0}
                    onClick={() => onChangeTabIndex(0)}
                >
                    <TextLoadingView
                        text="전체보기"
                        font={tabIndex === 0 ? "semibold" : "medium"}
                        size={14}
                        color={tabIndex === 0 ? Colors.White : Colors.Gray2}
                    />
                </Chip>
                <Chip
                    $color={tabIndex === 1 ? Colors.Primary : Colors.Gray0}
                    onClick={() => onChangeTabIndex(1)}
                >
                    <TextLoadingView
                        text="오늘의 팁"
                        font={tabIndex === 1 ? "semibold" : "medium"}
                        size={14}
                        color={tabIndex === 1 ? Colors.White : Colors.Gray2}
                    />
                </Chip>
                <Chip
                    $color={tabIndex === 2 ? Colors.Primary : Colors.Gray0}
                    onClick={() => onChangeTabIndex(2)}
                >
                    <TextLoadingView
                        text="같이 먹어요"
                        font={tabIndex === 2 ? "semibold" : "medium"}
                        size={14}
                        color={tabIndex === 2 ? Colors.White : Colors.Gray2}
                    />
                </Chip>
                <Chip
                    $color={tabIndex === 3 ? Colors.Primary : Colors.Gray0}
                    onClick={() => onChangeTabIndex(3)}
                >
                    <TextLoadingView
                        text="이거 좋아요"
                        font={tabIndex === 3 ? "semibold" : "medium"}
                        size={14}
                        color={tabIndex === 3 ? Colors.White : Colors.Gray2}
                    />
                </Chip>
            </ChipBar>
        </TopBarContainer>
    );
};

export default TopBar;