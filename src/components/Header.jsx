import Button from "./ui/Button";
import Nav from "./ui/Nav";

const Header = () => {
	return (
		<header className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-black dark:bg-white">
			<div className="flex items-center">
				<a href="/" class="text-white font-bold m-2">
					<img src="/k.svg" alt="Logo" />
				</a>
				<Button
					text="Resume"
					svg={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-file-cv"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
							<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
							<path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
							<path d="M13 11l1.5 6l1.5 -6"></path>
						</svg>
					}
				/>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
