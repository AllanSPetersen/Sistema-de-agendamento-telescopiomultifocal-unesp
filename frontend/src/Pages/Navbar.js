import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>SGLMC</h3>
			<nav ref={navRef}>
				<a href="/">Pagina Inicial</a>
				<a href="/Pesquisador">Pesquisador</a>
				<a href="/Reagente">Reagente</a>
				<a href="/Tecnico">Tecnico</a>
				<a href="/Equipamento">Equipamento</a>
				<a href="/Experimento">Experimento</a>
				<a href="/Agendamento">Agendamento</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;