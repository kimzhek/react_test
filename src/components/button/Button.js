import './button.scss';

function ButtonComponent() {
	return (
		<div>
			<div class="row">
				<div class="col">
					<a href="#" class="btn-primary">세부 정보 참조</a>
				</div>
				<div class="col">
					<a href="#" class="btn-secondary">세부 정보 참조</a>
				</div>
				<div class="col">
					<a href="#" class="btn-dark">세부 정보 참조</a>
				</div>
				<div class="col">
					<a href="#" class="btn-default">세부 정보 참조</a>
				</div>
				<div class="col">
					<a href="#" class="btn-light">세부 정보 참조</a>
				</div>
				<div class="col">
					<button type="button" class="btn-light" disabled>disabled</button>
				</div>
			</div>
		</div>	
	);
};
export default ButtonComponent;