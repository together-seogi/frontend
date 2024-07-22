import styled from "styled-components";
import TopBar from "../components/detail/TopBar";
import ImageLoadingView from "../components/common/ImageLoadingView";
import ProfileBar from "../components/detail/ProfileBar";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../consts/Consts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoBar from "../components/detail/InfoBar";

const DetailPageContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 20px;

    position: relative;
    flex-direction: column;
    overflow: scroll;
    gap: 20px;
`;

interface DetailPageProps {
    writerId: number | undefined,
    imgUrl: string | undefined,
    title: string | undefined,
    content: string | undefined,
    category: string | undefined,
    likes: number | undefined,
    hates: number | undefined,
}

interface UserProps {
    userNick: string | undefined,
    aboutMe: string | undefined,
    profilePhoto: string | undefined,
}

const DetailPage = () => {
    const [article, setArticle] = useState<DetailPageProps>();
    const [user, setUser] = useState<UserProps>();
    const { id } = useParams<{ id: string }>();
    const transformDataPage = (data: any): DetailPageProps => {
        return {
            writerId: data.writerId,
            imgUrl: data.imgUrl,
            title: data.title,
            content: data.content,
            category: data.category,
            likes: data.likes,
            hates: data.hates
        }
      }

    const fetchDataPage = async (): Promise<DetailPageProps | undefined> => {
        try {
          const response: AxiosResponse<any> = await axios.get(`${baseUrl}/api/board/aid/${id}`);
          // 리스트 형태의 데이터 변환
          const transformedData = transformDataPage(response.data);
          return transformedData;
        } catch (error) {
        //   console.error('Error fetching data:', error);
          return undefined;
        }
      }
    const transformDataUser = (data: any): UserProps => {
    return {
        userNick: data.userNick,
        aboutMe: data.aboutMe,
        profilePhoto: data.profilePhoto
    }
    }
    const fetchDataUser = async (): Promise<UserProps | undefined> => {
    try {
        // console.log(article?.writerId);
        const response: AxiosResponse<any> = await axios.get(`${baseUrl}/api/auth/userdata/${article?.writerId}`);
        // 리스트 형태의 데이터 변환
        const transformedData = transformDataUser(response.data);
        return transformedData;
    } catch (error) {
        // console.error('Error fetching data:', error);
        return undefined;
    }
    }

    useEffect(() => {
        fetchDataPage().then(data => {
            // console.log(data)
            setArticle(data)
          });
    }, [])
    useEffect(() => {
        fetchDataUser().then(data => {
            // console.log(data)
            setUser(data)
        })
    }, [article])
    return (
        <DetailPageContainer>
            <TopBar />
            <ImageLoadingView
                src={article?.imgUrl}
                width="100%"
                height="160px"
                radius={12}
                objectFit="cover"
                alt="image"
            />
            <ProfileBar
                name={user?.userNick}
                aboutMe={user?.aboutMe}
                profilePhoto={user?.profilePhoto}
            />
            <InfoBar
                title={article?.title}
                category={article?.category}
                likes={article?.likes}
                hates={article?.hates}
                content={article?.content}
            />
        </DetailPageContainer>
    );
};

export default DetailPage;