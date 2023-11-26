import styled from 'styled-components';

type Props = {
	children?: React.ReactNode;
	className?: string;
};

export const Container = ({ children, className }: Props) => {
	return <MainContainer className={'container mx-auto ' + className}>{children}</MainContainer>;
};

const MainContainer = styled.div``;
