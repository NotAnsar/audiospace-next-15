type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	facebook: (props: IconProps) => (
		<svg
			width='50'
			height='50'
			viewBox='0 0 50 50'
			xmlns='http://www.w3.org/2000/svg'
			fill='currentColor'
			{...props}
		>
			<path
				d='M32 11H37C37.552 11 38 10.552 38 10V3.263C38 2.739 37.597 2.303 37.075 2.266C35.484 2.153 32.376 2 30.141 2C24 2 20 5.68 20 12.368V19H13C12.448 19 12 19.448 12 20V27C12 27.552 12.448 28 13 28H20V47C20 47.552 20.448 48 21 48H28C28.552 48 29 47.552 29 47V28H36.222C36.732 28 37.16 27.617 37.216 27.11L37.994 20.11C38.06 19.518 37.596 19 37 19H29V14C29 12.343 30.343 11 32 11Z'
				fill='currentColor'
			/>
		</svg>
	),
	linkedin: (props: IconProps) => (
		<svg
			width='56'
			height='56'
			viewBox='0 0 56 56'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M44.8001 7.46655H11.2001C9.13746 7.46655 7.4668 9.13722 7.4668 11.1999V44.7999C7.4668 46.8626 9.13746 48.5332 11.2001 48.5332H44.8001C46.8628 48.5332 48.5335 46.8626 48.5335 44.7999V11.1999C48.5335 9.13722 46.8628 7.46655 44.8001 7.46655ZM20.4476 41.0666H14.9409V23.3482H20.4476V41.0666ZM17.6383 20.8151C15.8631 20.8151 14.4276 19.3759 14.4276 17.6044C14.4276 15.833 15.8649 14.3956 17.6383 14.3956C19.4079 14.3956 20.8471 15.8348 20.8471 17.6044C20.8471 19.3759 19.4079 20.8151 17.6383 20.8151ZM41.0743 41.0666H35.5713V32.45C35.5713 30.3948 35.534 27.7516 32.7097 27.7516C29.8444 27.7516 29.4039 29.9898 29.4039 32.3007V41.0666H23.9009V23.3482H29.1836V25.7692H29.2583C29.9937 24.3767 31.7895 22.9076 34.4681 22.9076C40.0439 22.9076 41.0743 26.5775 41.0743 31.3487V41.0666Z'
				fill='currentColor'
			/>
		</svg>
	),
	youtube: (props: IconProps) => (
		<svg
			width='59'
			height='59'
			viewBox='0 0 59 59'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M52.9802 17.1101C52.51 14.515 50.2699 12.6252 47.6702 12.0352C43.7799 11.2101 36.58 10.6201 28.7902 10.6201C21.005 10.6201 13.6899 11.2101 9.79496 12.0352C7.19988 12.6252 4.95512 14.3952 4.48496 17.1101C4.0102 20.0601 3.54004 24.1901 3.54004 29.5001C3.54004 34.8101 4.0102 38.9401 4.6002 41.8901C5.07496 44.4852 7.31512 46.375 9.91019 46.965C14.0402 47.7901 21.1202 48.3801 28.91 48.3801C36.6999 48.3801 43.7799 47.7901 47.9099 46.965C50.5049 46.375 52.7451 44.605 53.2199 41.8901C53.69 38.9401 54.28 34.6903 54.3999 29.5001C54.1602 24.1901 53.5702 20.0601 52.9802 17.1101ZM22.42 37.7601V21.2401L36.8151 29.5001L22.42 37.7601Z'
				fill='currentColor'
			/>
		</svg>
	),
	instagram: (props: IconProps) => (
		<svg
			width='50'
			height='50'
			viewBox='0 0 50 50'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M16 3C8.83 3 3 8.83 3 16V34C3 41.17 8.83 47 16 47H34C41.17 47 47 41.17 47 34V16C47 8.83 41.17 3 34 3H16ZM37 11C38.1 11 39 11.9 39 13C39 14.1 38.1 15 37 15C35.9 15 35 14.1 35 13C35 11.9 35.9 11 37 11ZM25 14C31.07 14 36 18.93 36 25C36 31.07 31.07 36 25 36C18.93 36 14 31.07 14 25C14 18.93 18.93 14 25 14ZM25 16C20.04 16 16 20.04 16 25C16 29.96 20.04 34 25 34C29.96 34 34 29.96 34 25C34 20.04 29.96 16 25 16Z'
				fill='currentColor'
			/>
		</svg>
	),
	vimeo: (props: IconProps) => (
		<svg
			width='50'
			height='50'
			viewBox='0 0 50 50'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M41 5.00001C34.2109 4.9922 30.4688 8.79689 28.168 16.2109C29.3711 15.7656 30.5781 15.2149 31.6719 15.2149C33.9727 15.2149 34.7383 16.0703 34.4102 18.7266C34.3008 20.3867 33.6445 23.0664 31.6719 26.1641C29.6992 29.1524 27.9844 30 27 30C25.7969 30 24.8828 28.2695 23.8984 23.6211C23.5703 22.293 22.8047 19.3047 21.9258 13.6641C21.1602 8.46486 18.6133 5.66798 15 6.00001C13.4688 6.10939 11.6367 7.53517 8.57031 10.1914C6.37891 12.1836 4.30078 13.6211 2 15.6133L4.19141 18.4219C6.26953 16.9844 7.47656 16.4297 7.80469 16.4297C9.33594 16.4297 10.7578 18.8633 12.1836 23.8438C13.3867 28.3789 14.6992 32.9141 15.9062 37.4492C17.7656 42.4297 20.0664 44.8633 22.6953 44.8633C27.0742 44.8633 32.3281 40.8828 38.5703 32.6953C44.6992 24.9492 47.7812 18.5352 48 14C48.2188 8.02736 45.8164 5.10939 41 5.00001Z'
				fill='currentColor'
			/>
		</svg>
	),
	world: (props: IconProps) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 50 50'
			width='50px'
			height='50px'
			{...props}
		>
			<path d='M 24 2.1035156 C 20.731 2.7535156 17.824047 6.5455156 15.998047 11.978516 L 24 11.978516 L 24 2.1035156 z M 26 2.1035156 L 26 11.978516 L 34.001953 11.978516 C 32.175953 6.5455156 29.269 2.7535156 26 2.1035156 z M 18.908203 2.8242188 C 13.621203 4.2782187 9.0916875 7.5735156 6.0546875 11.978516 L 13.845703 11.978516 C 15.057703 8.0895156 16.806203 4.9242187 18.908203 2.8242188 z M 31.091797 2.8242188 C 33.193797 4.9232188 34.942297 8.0895156 36.154297 11.978516 L 43.945312 11.978516 C 40.908313 7.5745156 36.378797 4.2782187 31.091797 2.8242188 z M 4.7949219 14.021484 C 3.1649219 17.010484 2.1803906 20.4 2.0253906 24 L 12.011719 24 C 12.082719 20.412 12.525391 17.040484 13.275391 14.021484 L 4.7949219 14.021484 z M 15.384766 14.021484 C 14.580766 17.027484 14.090672 20.423 14.013672 24 L 24 24 L 24 14.021484 L 15.384766 14.021484 z M 26 14.021484 L 26 24 L 35.986328 24 C 35.908328 20.423 35.419234 17.027484 34.615234 14.021484 L 26 14.021484 z M 36.724609 14.021484 C 37.474609 17.039484 37.916328 20.412 37.986328 24 L 47.974609 24 C 47.819609 20.4 46.836078 17.010484 45.205078 14.021484 L 36.724609 14.021484 z M 2.0253906 26 C 2.1803906 29.6 3.1639219 32.989516 4.7949219 35.978516 L 13.275391 35.978516 C 12.525391 32.959516 12.083672 29.588 12.013672 26 L 2.0253906 26 z M 14.013672 26 C 14.091672 29.577 14.580766 32.972516 15.384766 35.978516 L 24 35.978516 L 24 26 L 14.013672 26 z M 26 26 L 26 35.978516 L 34.615234 35.978516 C 35.419234 32.972516 35.909328 29.578 35.986328 26 L 26 26 z M 37.988281 26 C 37.917281 29.588 37.474609 32.959516 36.724609 35.978516 L 45.205078 35.978516 C 46.835078 32.989516 47.819609 29.6 47.974609 26 L 37.988281 26 z M 6.0546875 38.021484 C 9.0916875 42.425484 13.621203 45.721781 18.908203 47.175781 C 16.806203 45.076781 15.057703 41.910484 13.845703 38.021484 L 6.0546875 38.021484 z M 15.998047 38.021484 C 17.824047 43.454484 20.731 47.246484 24 47.896484 L 24 38.021484 L 15.998047 38.021484 z M 26 38.021484 L 26 47.896484 C 29.269 47.246484 32.175953 43.454484 34.001953 38.021484 L 26 38.021484 z M 36.154297 38.021484 C 34.942297 41.910484 33.193797 45.075781 31.091797 47.175781 C 36.378797 45.721781 40.908312 42.426484 43.945312 38.021484 L 36.154297 38.021484 z' />
		</svg>
	),
	mastodon: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' {...props}>
			<path d='M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z' />
		</svg>
	),
};