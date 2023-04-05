import styled from 'styled-components';

export const Header = styled.div`
	margin: 5rem 0 0 0;
	h2 {
		margin-top: 5rem;
		text-align: center;
	}
`;

export const SearchBar = styled.div`
	form {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	input {
		border-radius: 6px;
		border: 2px solid green;
		padding: 1rem;
		width: 40%;
	}
	input:focus {
		outline: none;
	}
	button {
		background-color: green;
		border: none;
		color: white;
		padding: 1rem 2rem;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		border-radius: 6px;
	}
`;

export const Title = styled.div`
	align-items: center;
	text-align: center;
	padding: 1rem;
`;

export const Text = styled.div`
	ul {
		list-style-type: none;
		line-height: 1;
		padding: 0;
	}
	padding: 1rem;
`;
