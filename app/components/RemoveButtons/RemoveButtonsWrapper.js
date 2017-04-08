import styled from 'styled-components';

const stc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 0 0 0 1em;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  & ul {
    list-style-type: none;
    padding: 0;
  }
  & span {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1300px) {
    flex-direction: row;
    align-content: center;
    justify-content: center
    margin: 1em 0 0 0;
    & span {
      flex-direction: row;
    }
  }
`;

export default stc;
