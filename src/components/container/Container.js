import Button from "components/button/Button";
import StyledButton from "components/button/StyledButton";
import './container.scss';

function Container() {
	return (
		<div id="container">
			<div className="contents">
				<StyledButton/>
				<br/>
				<Button/>
			</div>
		</div>
	);
};
export default Container;