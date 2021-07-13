import {Button, ButtonsContainer} from '../elements/paginationElements';

const Pagination = ({page, setPage}) => {
	const isZero = page > 1;

	function Backward() {
		return setPage(page - 1);
	}
	function Forward() {
		return setPage(page + 1);
	}

	Button.displayName = 'button';

	return (
		<div>
			<ButtonsContainer>
				{isZero ? <Button onClick={Backward}>Backward</Button> : null}

				<Button>{page}</Button>
				<Button onClick={Forward}>Forward</Button>
			</ButtonsContainer>
		</div>
	);
};

export default Pagination;
