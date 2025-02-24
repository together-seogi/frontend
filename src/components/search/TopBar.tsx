import styled from "styled-components";
import IconButton from "../common/IconButton";
import Colors from "../../consts/Colors";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../consts/Consts";
import { useNavigate } from "react-router-dom";
import { ThisIsGoodProps } from "../article/ThisIsGood";

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


interface TopBarProps {
    buf: (props: ThisIsGoodProps[]) => void
}

const TopBar = ({ buf }: TopBarProps) => {
    const navigate = useNavigate();
    const style = {
        fontFamily: "medium",
        fontSize: 16,
        color: Colors.Black,
        letterSpacing: 0.8,
        lineHeight: 1.2
    };
    const transformData = (data: any[]): ThisIsGoodProps[] => {
        return data.map(item => {
            console.log("Mapping item:", item);
            return {
              imgUrl: item.imgUrl,
              title: item.title,
              likes: item.likes,
              hates: item.hates,
              articleId: item.articleId,
            };
          });
      }

      const fetchData = async (s: string): Promise<ThisIsGoodProps[]> => {
        try {
          const response: AxiosResponse<any[]> = await axios.get(`${baseUrl}/api/board/find/${s}`);
          // 리스트 형태의 데이터 변환
          const transformedData = transformData(response.data);
          return transformedData;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        }
      }
      
    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        // buf(transformData(fetchData(event.target.value)));
        fetchData(event.target.value).then(data => {
            console.log(data)
            buf(transformData(data))
          });
    };
    return (
        <TopBarContainer>
            <SearchBarContainer>
                <IconButton
                    src="back"
                    size={28}
                    onclick={() => navigate("/")}
                />
                <SearchBar>
                    <IconButton
                        src="search_blurred"
                        size={24}
                        onclick={() => {}}
                    />
                    <input type="text" placeholder="검색하기" style={style} onChange={handleInputChange} />
                </SearchBar>
            </SearchBarContainer>
        </TopBarContainer>
    );
};

export default TopBar;