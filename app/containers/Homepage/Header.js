import styled from 'styled-components';

const stc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0rem 5rem 0rem;
  padding: 1em;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
  & > h1 {
    margin: 0;
    @media screen and (max-width: 1300px) {
    margin: 0rem 0rem 2rem 0rem;
    }
  }
`;

export default stc;
