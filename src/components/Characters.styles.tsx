import styled from "styled-components";

export const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 10px;
`;

export const CharacterContainer = styled.div`
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: transform 0.3s ease;
  background-color: #e5242a;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  &:hover {
    transform: translateY(-7px);
  }
`;

export const CharacterImage = styled.img`
  height: 275px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
`;

export const CharacterName = styled.h2`
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 긴 텍스트에 대한 말줄임 표시 */
`;

export const ImageAndTitleWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  background-color: rgb(229, 36, 42, 0.9);
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 50px 0;
`;

export const DetailImg = styled.img`
  height: 300px;
  width: 300px;
  font-size: 40px;
  padding: 20px;
`;

export const DetailTitle = styled.h1`
  font-size: 55px;
  text-transform: uppercase;
  justify-content: center;
  text-align: center;
  margin: 0;
  flex: 1;
`;

export const DetailGenres = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
`;
