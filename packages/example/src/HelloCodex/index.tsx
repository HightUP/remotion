import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const HelloCodex: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(frame, [0, 12], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const scale = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});

	return (
		<AbsoluteFill
			style={{
				background:
					'linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #0ea5e9 100%)',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				fontFamily: 'Arial, sans-serif',
				fontSize: 84,
				fontWeight: 800,
				letterSpacing: 1,
			}}
		>
			<div
				style={{
					opacity,
					transform: `scale(${scale})`,
					textAlign: 'center',
					textShadow: '0 14px 40px rgba(0, 0, 0, 0.35)',
				}}
			>
				<div>Hello, Remotion</div>
				<div style={{fontSize: 36, marginTop: 16, fontWeight: 500}}>
					Primeira composicao criada com o Codex
				</div>
			</div>
		</AbsoluteFill>
	);
};
