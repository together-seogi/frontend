import styled from "styled-components";
import Screen from "../components/common/Screen.tsx";
import CircleImageLoadingView from "../components/common/CircleImageLoadingView.tsx";
import IconButton from "../components/common/IconButton.tsx";
import {useState} from "react";
import ThisIsGoodView from "../components/main/ThisIsGoodView.tsx";
import {ArticleListProps} from "./MainPage.tsx";


const ProfilePage = (props) => {
    const [hp, setHp] = useState(50);
    const [articles, setArticles] = useState<ArticleListProps>(props.articles);
    return (
        <ProfileScreen>
            <ProfileTopBar>
                <IconButton src={'arrow_forward'} size={28} onclick={()=>{}}/>
                <ProfileTopName>내 프로필</ProfileTopName>
                <IconButton src={'draw'} size={28} onclick={()=>{}}/>
            </ProfileTopBar>
            <ProfileContainer>
                <CircleImageLoadingView src={props.profileImg} alt={'profile image'} size={60} objectFit={'cover'}/>
                <NameCard>
                    <Name>{props.name}</Name>
                    <Intro>{props.intro}</Intro>
                </NameCard>
            </ProfileContainer>
            <div style={{
                display: "flex",
                gap: "4px",
                flexDirection: "column",
                paddingTop: "24px",
                paddingBottom: "20px",
            }}>
                <HpLabel>HP {hp}/100</HpLabel>
                <HpBar>
                    <Hp hp={hp} />
                    <ThisIsGoodView list={articles}/>
                </HpBar>
            </div>
        </ProfileScreen>
    );
};

const ProfileScreen = styled(Screen)`
    justify-content: space-between;
    align-items: center;
    height: 100dvh;
`
const ProfileTopBar = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 12px 0;
    justify-content: space-between;
    align-items: center;
`
const ProfileTopName =styled.div`
    color: #111;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.4px;
    
`
const ProfileContainer = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 16px;
`
const NameCard =styled.div`
    display: flex;
    width: 150px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`
const Name = styled.div`
    color: #111;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.5px;
`
const Intro = styled.div`
    color: #111;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.35px;
`
const HpLabel = styled.div`
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    color: #111;
`;
const HpBar = styled.div`
    display: flex;
    width: 100%;
    height: 12px;
    align-items: center;
    border-radius: 999px;
    background: #F2F2F2;
`
const Hp =styled.div`
    width: ${(props) => `${props.hp}%`};
    height: 12px;
    border-radius: 999px;
    background: var(--Primary, #F06464);
`
export default ProfilePage;
