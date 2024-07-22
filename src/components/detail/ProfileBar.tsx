import styled from "styled-components";
import CircleImageLoadingView from "../common/CircleImageLoadingView";
import TextLoadingView from "../common/TextLoadingView";
import Colors from "../../consts/Colors";

const ProfileBarContainer = styled.div`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
`;

const ProfilePairBarContainer = styled.div`
    flex-direction: row;
    gap: 12px;
`;

const UserContainer = styled.div`
    flex-direction: column;
    gap: 4px;
`;

const Chip = styled.button`
    padding: 4px 14px;
    background-color: ${Colors.Primary};
    border-radius: 100px;
    align-items: center;
`;

interface ProfileBarProps {
    name: string | undefined,
    aboutMe: string | undefined,
    profilePhoto: string | undefined,
}

const ProfileBar = ({ name, aboutMe, profilePhoto }: ProfileBarProps) => {
    return (
        <ProfileBarContainer>
            <ProfilePairBarContainer>
                <CircleImageLoadingView
                    src={profilePhoto}
                    size={40}
                    objectFit="cover"
                    alt="Profile"
                />
                <UserContainer>
                    <TextLoadingView
                        text={name}
                        font="semibold"
                        size={16}
                        color={Colors.Black}
                    />
                    <TextLoadingView
                        text={aboutMe}
                        font="medium"
                        size={14}
                        color={Colors.Black}
                    />
                </UserContainer>
            </ProfilePairBarContainer>
            <Chip>
                    <TextLoadingView
                        text="쪽지 보내기"
                        font="semibold"
                        size={14}
                        color={Colors.White}
                    />
                </Chip>
        </ProfileBarContainer>
    );
};

export default ProfileBar;