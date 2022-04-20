import styled, {css} from "styled-components";

const Container = styled.div`
  width:100%;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

function Contents() {
	return (
		<Container>
			<Button>Normal Button</Button>
			<Button primary>Primary Button</Button>
		</Container>
	);
};
export default Contents;