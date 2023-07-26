import React, {useState, useEffect} from 'react';
import './BottomBanner.css';

function BottomBanner()
{
	const [isScrolled, setIsScrolled] = useState(false);
	const [isClosed, setIsClosed] = useState(false);

	const checkScroll = () =>
	{
		if (window.pageYOffset > 0)
		{
			setIsScrolled(true);
		} else
		{
			setIsScrolled(false);
		}
	};

	useEffect(() =>
	{
		window.addEventListener('scroll', checkScroll);
		return () => window.removeEventListener('scroll', checkScroll);
	}, []);

	const handleToggle = () =>
	{
		setIsClosed(!isClosed);
	};

	return (
		isScrolled && (
			<div className={`banner ${isClosed ? "closed" : ""}`}>
				<div className="banner-toggle" onClick={handleToggle} style={{ top: isClosed ? '-33px' : '0' }} >{isClosed ? "Mostrar" : "Cerrar X"}</div>
				{!isClosed && (
					<div className="banner-content">
						<img className="logo" src="https://codere.com.co/_catalogs/masterpage/codere/img/logo-gris.png" alt="Logo"/>
						<div className="text">Bono de Bienvenida especial</div>
						<div className="linkWrapper">
							<a className="link" href="https://m.codere.com.co/deportescolombia/#/PromotionsPage">Recibir</a>
						</div>
					</div>
				)}
			</div>
		)
	);
}

export default BottomBanner;
