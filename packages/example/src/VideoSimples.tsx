import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const VideoSimples: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const zoom = interpolate(frame, [0, 150], [1, 1.1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const textOpacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const textMove = interpolate(frame, [0, 20], [40, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const textScale = spring({
		frame,
		fps,
		config: {damping: 200},
	});

	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<Img
				src={staticFile('foto.jpg')}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transform: `scale(${zoom})`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					bottom: 120,
					width: '100%',
					textAlign: 'center',
					color: 'white',
					fontSize: 72,
					fontWeight: 700,
					opacity: textOpacity,
					transform: `translateY(${textMove}px) scale(${textScale})`,
					textShadow: '0 10px 30px rgba(0,0,0,0.35)',
				}}
			>
				Meu primeiro video
			</div>
		</AbsoluteFill>
	);
};
