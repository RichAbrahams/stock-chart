import styled from 'styled-components';

const stc = styled.button`
  width: 8em;
  padding: 1em;
  margin: 0px 0px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  background: ${(props) => props.color};
  color: white;
  @media screen and (max-width: 1300px) {
  margin: 0px 3px 0px 3px;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export default stc;
