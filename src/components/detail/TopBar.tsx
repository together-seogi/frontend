import styled from "styled-components";
import IconButton from "../common/IconButton";
import { useNavigate } from "react-router-dom";

const TopBarContainer = styled.div`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
`;

const TopBar = () => {
    const navigate = useNavigate();
    return (
        <TopBarContainer>
            <IconButton
                src="back"
                size={28}
                onclick={() => navigate("/")}
            />
            <IconButton
                src="flag"
                size={28}
                onclick={() => navigate("/")}
            />
        </TopBarContainer>
    );
};

export default TopBar;