type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	play: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' {...props}>
			<path d='M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 19 35 L 19 15 L 36 25 Z' />
		</svg>
	),
	shuffle: (props: IconProps) => (
		<svg
			viewBox='0 0 38 42'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M24.5938 0.59375L19.5938 5.59375L18.1562 7L19.5938 8.40625L24.5938 13.4062L27.4062 10.5938L25.8125 9H33C33.5781 9 34 9.42188 34 10V32C34 32.5781 33.5781 33 33 33H21V37H33C35.7383 37 38 34.7383 38 32V10C38 7.26172 35.7383 5 33 5H25.8125L27.4062 3.40625L24.5938 0.59375ZM5 5C2.26172 5 0 7.26172 0 10V32C0 34.7383 2.26172 37 5 37H12.1875L10.5938 38.5938L13.4062 41.4062L18.4062 36.4062L19.8438 35L18.4062 33.5938L13.4062 28.5938L10.5938 31.4062L12.1875 33H5C4.42188 33 4 32.5781 4 32V10C4 9.42188 4.42188 9 5 9H17V5H5Z'
				fill='currentColor'
			/>
		</svg>
	),
	speaker: (props: IconProps) => (
		<svg
			focusable='false'
			aria-hidden='true'
			viewBox='0 0 24 24'
			data-testid='VolumeUpIcon'
			{...props}
		>
			<path d='M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77'></path>
		</svg>
	),
	muted: (props: IconProps) => (
		<svg
			focusable='false'
			aria-hidden='true'
			viewBox='0 0 24 24'
			data-testid='VolumeOffIcon'
			{...props}
		>
			<path d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z'></path>
		</svg>
	),
	pause: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' {...props}>
			<path d='M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 22 34 L 17 34 L 17 16 L 22 16 Z M 33 34 L 28 34 L 28 16 L 33 16 Z' />
		</svg>
	),
	info: (props: IconProps) => (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM13 18H11V11H13V18ZM12 8.5C11.172 8.5 10.5 7.828 10.5 7C10.5 6.172 11.172 5.5 12 5.5C12.828 5.5 13.5 6.172 13.5 7C13.5 7.828 12.828 8.5 12 8.5Z'
				fill='currentColor'
			/>
		</svg>
	),
	setting: (props: IconProps) => (
		<svg
			viewBox='0 0 46 46'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M45.16 19.221L39.25 18.255C38.904 17.069 38.431 15.929 37.839 14.85L41.289 9.933C41.568 9.536 41.52 8.995 41.177 8.651L37.288 4.764C36.941 4.418 36.395 4.373 35.997 4.66L31.154 8.141C30.065 7.539 28.915 7.061 27.722 6.714L26.691 0.828C26.607 0.35 26.192 0 25.706 0H20.206C19.716 0 19.298 0.355 19.219 0.839L18.263 6.693C17.063 7.038 15.911 7.511 14.826 8.105L9.99595 4.655C9.59695 4.37 9.05395 4.416 8.70695 4.761L4.81995 8.648C4.47695 8.991 4.42895 9.531 4.70795 9.928L8.10695 14.791C7.50195 15.886 7.01995 17.045 6.66895 18.251L0.837953 19.222C0.355953 19.302 0.00195312 19.72 0.00195312 20.208V25.708C0.00195312 26.193 0.349953 26.608 0.826953 26.693L6.65795 27.727C7.00695 28.93 7.48895 30.089 8.09595 31.187L4.65495 36C4.37095 36.397 4.41595 36.942 4.76095 37.289L8.64895 41.18C8.99195 41.523 9.53295 41.571 9.92995 41.292L14.8 37.881C15.893 38.482 17.048 38.959 18.245 39.305L19.221 45.166C19.3 45.647 19.717 46 20.206 46H25.706C26.191 46 26.606 45.652 26.69 45.175L27.735 39.285C28.934 38.932 30.083 38.452 31.165 37.85L36.07 41.291C36.468 41.572 37.008 41.523 37.352 41.18L41.24 37.289C41.586 36.942 41.631 36.395 41.344 35.997L37.846 31.14C38.439 30.06 38.91 28.918 39.253 27.732L45.171 26.693C45.65 26.609 45.998 26.193 45.998 25.708V20.208C45.999 19.718 45.644 19.3 45.16 19.221ZM23 30C19.134 30 16 26.866 16 23C16 19.134 19.134 16 23 16C26.866 16 30 19.134 30 23C30 26.866 26.866 30 23 30Z'
				fill='currentColor'
			/>
		</svg>
	),
	next: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' {...props}>
			<path d='M 7 6 A 1 1 0 0 0 6 7 A 1 1 0 0 0 6 7.0039062 L 6 15 L 6 22.996094 A 1 1 0 0 0 6 23 A 1 1 0 0 0 7 24 A 1 1 0 0 0 7.5917969 23.804688 L 7.59375 23.804688 A 1 1 0 0 0 7.6210938 23.783203 L 18.541016 15.841797 A 1 1 0 0 0 19 15 A 1 1 0 0 0 18.556641 14.169922 L 7.59375 6.1953125 A 1 1 0 0 0 7 6 z M 22.5 6 C 21.672 6 21 6.672 21 7.5 L 21 22.5 C 21 23.328 21.672 24 22.5 24 C 23.328 24 24 23.328 24 22.5 L 24 7.5 C 24 6.672 23.328 6 22.5 6 z' />
		</svg>
	),
	settings: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' {...props}>
			<path d='M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z' />
		</svg>
	),
	upload: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' {...props}>
			<path d='M 25 0.59375 L 24.28125 1.28125 L 16.28125 9.28125 C 15.882813 9.679688 15.882813 10.320313 16.28125 10.71875 C 16.679688 11.117188 17.320313 11.117188 17.71875 10.71875 L 24 4.4375 L 24 32 C 23.996094 32.359375 24.183594 32.695313 24.496094 32.878906 C 24.808594 33.058594 25.191406 33.058594 25.503906 32.878906 C 25.816406 32.695313 26.003906 32.359375 26 32 L 26 4.4375 L 32.28125 10.71875 C 32.679688 11.117188 33.320313 11.117188 33.71875 10.71875 C 34.117188 10.320313 34.117188 9.679688 33.71875 9.28125 L 25.71875 1.28125 Z M 7 16 L 7 50 L 43 50 L 43 16 L 33 16 C 32.640625 15.996094 32.304688 16.183594 32.121094 16.496094 C 31.941406 16.808594 31.941406 17.191406 32.121094 17.503906 C 32.304688 17.816406 32.640625 18.003906 33 18 L 41 18 L 41 48 L 9 48 L 9 18 L 17 18 C 17.359375 18.003906 17.695313 17.816406 17.878906 17.503906 C 18.058594 17.191406 18.058594 16.808594 17.878906 16.496094 C 17.695313 16.183594 17.359375 15.996094 17 16 Z' />
		</svg>
	),
	logout: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' {...props}>
			<path d='M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 32.610275 48 39.366605 44.294736 43.550781 38.591797 A 1.0001 1.0001 0 1 0 41.939453 37.408203 C 38.117629 42.617264 31.961725 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 C 31.961725 4 38.117629 7.3827357 41.939453 12.591797 A 1.0001 1.0001 0 1 0 43.550781 11.408203 C 39.366605 5.7052643 32.610275 2 25 2 z M 38.990234 15.990234 A 1.0001 1.0001 0 0 0 38.292969 17.707031 L 44.585938 24 L 23 24 A 1.0001 1.0001 0 1 0 23 26 L 44.585938 26 L 38.292969 32.292969 A 1.0001 1.0001 0 1 0 39.707031 33.707031 L 47.619141 25.794922 A 1.0001 1.0001 0 0 0 47.617188 24.203125 L 39.707031 16.292969 A 1.0001 1.0001 0 0 0 38.990234 15.990234 z' />
		</svg>
	),
	google: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' {...props}>
			<path d='M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z' />
		</svg>
	),
	grid: (props: IconProps) => (
		<svg
			viewBox='0 0 25 25'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M1.70455 0C0.763068 0 0 0.763068 0 1.70455V23.2955C0 24.2369 0.763068 25 1.70455 25H23.2955C24.2369 25 25 24.2369 25 23.2955V1.70455C25 0.763068 24.2369 0 23.2955 0H1.70455ZM3.40909 3.40909H7.95455V7.95455H3.40909V3.40909ZM10.2273 3.40909H14.7727V7.95455H10.2273V3.40909ZM17.0455 3.40909H21.5909V7.95455H17.0455V3.40909ZM3.40909 10.2273H7.95455V14.7727H3.40909V10.2273ZM10.2273 10.2273H14.7727V14.7727H10.2273V10.2273ZM17.0455 10.2273H21.5909V14.7727H17.0455V10.2273ZM3.40909 17.0455H7.95455V21.5909H3.40909V17.0455ZM10.2273 17.0455H14.7727V21.5909H10.2273V17.0455ZM17.0455 17.0455H21.5909V21.5909H17.0455V17.0455Z'
				fill='currentColor'
			/>
		</svg>
	),
	table: (props: IconProps) => (
		<svg
			{...props}
			viewBox='0 0 25 25'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M22.7273 0H2.27273C1.01705 0 0 1.01705 0 2.27273V22.7273C0 23.983 1.01705 25 2.27273 25H22.7273C23.983 25 25 23.983 25 22.7273V2.27273C25 1.01705 23.983 0 22.7273 0ZM5.68182 13.6364C5.05455 13.6364 4.54545 13.1273 4.54545 12.5C4.54545 11.8727 5.05455 11.3636 5.68182 11.3636C6.30909 11.3636 6.81818 11.8727 6.81818 12.5C6.81818 13.1273 6.30909 13.6364 5.68182 13.6364ZM19.3182 13.6364H10.2273C9.6 13.6364 9.09091 13.1273 9.09091 12.5C9.09091 11.8727 9.6 11.3636 10.2273 11.3636H19.3182C19.9455 11.3636 20.4545 11.8727 20.4545 12.5C20.4545 13.1273 19.9455 13.6364 19.3182 13.6364ZM5.68182 6.81818C5.05455 6.81818 4.54545 6.30909 4.54545 5.68182C4.54545 5.05455 5.05455 4.54545 5.68182 4.54545C6.30909 4.54545 6.81818 5.05455 6.81818 5.68182C6.81818 6.30909 6.30909 6.81818 5.68182 6.81818ZM19.3182 6.81818H10.2273C9.6 6.81818 9.09091 6.30909 9.09091 5.68182C9.09091 5.05455 9.6 4.54545 10.2273 4.54545H19.3182C19.9455 4.54545 20.4545 5.05455 20.4545 5.68182C20.4545 6.30909 19.9455 6.81818 19.3182 6.81818ZM5.68182 20.4545C5.05455 20.4545 4.54545 19.9455 4.54545 19.3182C4.54545 18.6909 5.05455 18.1818 5.68182 18.1818C6.30909 18.1818 6.81818 18.6909 6.81818 19.3182C6.81818 19.9455 6.30909 20.4545 5.68182 20.4545ZM19.3182 20.4545H10.2273C9.6 20.4545 9.09091 19.9455 9.09091 19.3182C9.09091 18.6909 9.6 18.1818 10.2273 18.1818H19.3182C19.9455 18.1818 20.4545 18.6909 20.4545 19.3182C20.4545 19.9455 19.9455 20.4545 19.3182 20.4545Z'
				fill='currentColor'
			/>
		</svg>
	),
	sterio: (props: IconProps) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 50 50'
			width='50px'
			height='50px'
			{...props}
		>
			<path d='M 12 3 C 10.346 3 9 4.346 9 6 L 9 44 C 9 45.654 10.346 47 12 47 L 38 47 C 39.654 47 41 45.654 41 44 L 41 6 C 41 4.346 39.654 3 38 3 L 12 3 z M 14 7 C 14.552 7 15 7.448 15 8 C 15 8.552 14.552 9 14 9 C 13.448 9 13 8.552 13 8 C 13 7.448 13.448 7 14 7 z M 36 7 C 36.552 7 37 7.448 37 8 C 37 8.552 36.552 9 36 9 C 35.448 9 35 8.552 35 8 C 35 7.448 35.448 7 36 7 z M 25 8 C 27.761 8 30 10.239 30 13 C 30 15.761 27.761 18 25 18 C 22.239 18 20 15.761 20 13 C 20 10.239 22.239 8 25 8 z M 25 11 A 2 2 0 0 0 23 13 A 2 2 0 0 0 25 15 A 2 2 0 0 0 27 13 A 2 2 0 0 0 25 11 z M 25 24 C 29.971 24 34 28.029 34 33 C 34 37.971 29.971 42 25 42 C 20.029 42 16 37.971 16 33 C 16 28.029 20.029 24 25 24 z M 25 30 A 3 3 0 0 0 22 33 A 3 3 0 0 0 25 36 A 3 3 0 0 0 28 33 A 3 3 0 0 0 25 30 z M 14 41 C 14.552 41 15 41.448 15 42 C 15 42.552 14.552 43 14 43 C 13.448 43 13 42.552 13 42 C 13 41.448 13.448 41 14 41 z M 36 41 C 36.552 41 37 41.448 37 42 C 37 42.552 36.552 43 36 43 C 35.448 43 35 42.552 35 42 C 35 41.448 35.448 41 36 41 z' />
		</svg>
	),
	binaural: (props: IconProps) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 30 30'
			width='30px'
			height='30px'
			{...props}
		>
			<path d='M 15 2 C 8.3845336 2 3 7.3845336 3 14 L 3 16.943359 A 2.0002 2.0002 0 0 0 3.0039062 17.099609 A 2.0002 2.0002 0 0 0 3.0058594 17.148438 C 3.0058594 17.148438 3.1224351 18.721889 3.3730469 21.126953 C 3.6303655 23.602464 4.0507814 25.443359 4.0507812 25.443359 A 2.0002 2.0002 0 0 0 7.9355469 25.621094 A 1.50015 1.50015 0 0 0 9.421875 23.900391 L 8.5839844 17.101562 A 1.50015 1.50015 0 0 0 7.0351562 15.765625 A 1.50015 1.50015 0 0 0 6.6386719 15.835938 A 2.0002 2.0002 0 0 0 5.0195312 14.972656 A 2.0002 2.0002 0 0 0 5 14.972656 L 5 14 C 5 12.569978 5.3041453 11.215019 5.8417969 9.9863281 A 1.0002308 1.0002308 0 0 0 6.7871094 9.6171875 C 6.7871094 9.6171875 9.5972179 6 15 6 C 20.402782 6 23.212891 9.6171875 23.212891 9.6171875 A 1.0002305 1.0002305 0 0 0 24.158203 9.9863281 C 24.695855 11.215019 25 12.569978 25 14 L 25 14.972656 A 2.0002 2.0002 0 0 0 24.921875 14.972656 A 2.0002 2.0002 0 0 0 23.359375 15.835938 A 1.50015 1.50015 0 0 0 22.919922 15.765625 A 1.50015 1.50015 0 0 0 21.416016 17.101562 L 20.578125 23.900391 A 1.50015 1.50015 0 0 0 22.064453 25.621094 A 2.0002 2.0002 0 0 0 25.949219 25.443359 C 25.949219 25.443359 26.369634 23.602464 26.626953 21.126953 C 26.877565 18.721889 26.994141 17.148436 26.994141 17.148438 A 2.0002 2.0002 0 0 0 26.996094 17.083984 A 2.0002 2.0002 0 0 0 26.998047 17.070312 A 1.0001 1.0001 0 0 0 27 17 A 2.0002 2.0002 0 0 0 27 16.916016 L 27 14 C 27 7.3845336 21.615466 2 15 2 z' />
		</svg>
	),
};