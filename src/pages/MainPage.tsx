import { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../components/main/TopBar";
import WholeView from "../components/main/WholeView";
import TodayTipsView from "../components/main/TodayTipsView";
import EatWithMeView from "../components/main/EatWithMeView";
import ThisIsGoodView from "../components/main/ThisIsGoodView";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../consts/Consts";

const MainPageContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 12px 20px;

    position: relative;
    flex-direction: column;
    overflow: scroll;
    gap: 24px;
`;

export interface ArticleListProps {
    title: string | undefined,
    content: string | undefined,
    likes: number | undefined,
    hates: number | undefined,
    imgUrl: string | undefined,
    articleId: number | undefined
};

const MainPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [articleList, setArticleList] = useState<ArticleListProps[]>([])

    const transformData = (data: any[]): ArticleListProps[] => {
        return data.map(item => ({
            title: item.title,
            content: item.content,
            likes: item.likes,
            hates: item.hates,
            imgUrl: item.imgUrl,
            articleId: item.articleId
        }));
      }

    const fetchData = async (): Promise<ArticleListProps[]> => {
        try {
          const response: AxiosResponse<any[]> = await axios.get(`${baseUrl}/api/board/main`);
          // 리스트 형태의 데이터 변환
          const transformedData = transformData(response.data);
          return transformedData;
        } catch (error) {
        //   console.error('Error fetching data:', error);
          return [];
        }
      }

    useEffect(() => {
        fetchData().then(data => {
            // console.log(data)
            setArticleList(data)
          });
    }, [tabIndex])

    const tabView = () => {
        switch (tabIndex) {
            case 0:
                return <WholeView list={articleList} />
            case 1:
                return <TodayTipsView list={articleList} />
            case 2:
                return <EatWithMeView list={articleList} />
            case 3:
                return <ThisIsGoodView list={articleList} />
            default:
                return null;
        }
    }

    return (
        <MainPageContainer>
            <TopBar
                tabIndex={tabIndex}
                onChangeTabIndex={(idx) => setTabIndex(idx)}
            />
            {tabView()}
        </MainPageContainer>
    );
};

export default MainPage;