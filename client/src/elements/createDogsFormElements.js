import styled from 'styled-components';

const colors = {
	border: '#0075FF',
	error: '#bb2929',
	success: '#1ed12d',
};

const FormContainer = styled.div`
	max-width: 800px;
	width: 90%;
	margin: auto;
	padding: 40px;
`;

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: 0.3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colors.border};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
	}
`;

const Select = styled.select`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: 0.3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colors.border};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
	}
`;

const TextError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colors.error};
	display: none;
`;

const ContainerButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
`;

const Button = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.1s ease all;

	&:hover {
		box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
	}
`;

const SuccessMessage = styled.p`
	font-size: 14px;
	color: ${colors.success};
	display: none;
`;

const ErrorMessage = styled.div`
	height: 45px;
	line-height: 45px;
	background: #f66060;
	padding: 0 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	}
	b {
		margin-left: 10px;
	}
`;
export {
	FormContainer,
	Form,
	Label,
	Input,
	Select,
	TextError,
	ContainerButton,
	Button,
	ErrorMessage,
	SuccessMessage,
};
