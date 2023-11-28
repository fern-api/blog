import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
	contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
	const [featuredImage, setFeaturedImage] = useState<string>('');
	const content = markdownToHtml(contentMarkdown);
	useEmbeds({ enabled: true });

	useEffect(() => {
		[...document.querySelectorAll('img')].map((img) => {
			img.style.cursor = 'pointer';
			img.addEventListener('click', () => {
				if (window.innerWidth > 768) setFeaturedImage(img.src);
			});
		});
	}, []);

	return (
		<>
			{!!featuredImage && (
				<FeaturedImageBox
					onClick={() => {
						setFeaturedImage('');
					}}
				>
					<div>
						<img src={featuredImage}></img>
					</div>
				</FeaturedImageBox>
			)}
			<div
				className="hashnode-content-style force-white mx-auto w-full px-5 md:max-w-screen-md"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</>
	);
};

const FeaturedImageBox = styled.div`
	background: rgba(255, 255, 255, 0.7);
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 100;
	left: 0px;
	top: 0px;
	display: flex;
	align-items: center;
	justify-content: center;

	& > div {
		width: 90%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& > div > img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;

export const MarkdownToHtml = memo(_MarkdownToHtml);
