import styled from 'styled-components';
//using styled componentsssss
const HeaderContainer = styled.header`
margin-top:5px;
margin-left:17px;
margin-right:17px;
  padding: 30px;
  text-align: center;
  background-color:#e5eaf5;
  font-size: 40px;
  font-weight: bold;
  border-radius: 20px
`;

export default function Header() {
  return <HeaderContainer>Pokémon Explorer</HeaderContainer>;
}
