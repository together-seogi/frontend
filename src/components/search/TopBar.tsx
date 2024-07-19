import styled from "styled-components";
import IconButton from "../common/IconButton";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";

const TopBarContainer = styled.div`
    width: 100%;
`;

const SearchBarContainer = styled.div`
    width: 100%;

    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

const SearchBar = styled.div`
    width: 100%;
    background-color: ${Colors.Gray0};
    border-radius: 12px;
    padding: 8px 16px;

    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const TopBar = ({}) => {
    const style = {
        fontFamily: "medium",
        fontSize: 16,
        color: Colors.Black,
        letterSpacing: 0.8,
        lineHeight: 1.2
    };
    return (
        <TopBarContainer>
            <SearchBarContainer>
                <IconButton
                    src="back"
                    size={28}
                    onclick={() => {}}
                />
                <SearchBar>
                    <IconButton
                        src="search_blurred"
                        size={24}
                        onclick={() => {}}
                    />
                    <input type="text" placeholder="검색하기" style={style} />
                </SearchBar>
            </SearchBarContainer>
        </TopBarContainer>
    );
};

export default TopBar;