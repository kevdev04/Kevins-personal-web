
const Button = ({ text, svg }) => {
	return [
		<button className="group rounded hover:drop-shadow-lg bg-white text-black border-black border cursor-pointer flex justify-between items-center overflow-hidden">
			<div className="relative w-16 h-14 bg-black  bg-opacity-20 text-black flex justify-center items-center">
			{svg}
				<div className="absolute w-full h-0 bg-white bg-opacity-20 top-0 duration-200"></div>
			</div>

			<p className="px-5">{text}</p>
		</button>,
	];
};

export default Button;
