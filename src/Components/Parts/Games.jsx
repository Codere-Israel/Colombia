// import gameCSS from "./Parts/CSS/games.module.css";
import gameCSS from "../../CSS/games.module.css";
import TopGame from "./TopGame";
import BottomGame from "./BottomGame";
import GameSwiper from "./GameSwiper";
import gameCarousel from "../../JSON/mob-games.json";
import deskGames from "../../JSON/desktop-games.json";

// Top Games \\

function Games(props) {
  return (
    <>
      {props.flag ? (
        <div id="mobile-games-section">
          <span className="gamesTitle">
            <span style={{ textTransform: "uppercase" }}>Mesas en Español</span>
          </span>
          <GameSwiper games={gameCarousel.spanish_games} />
          <span className="gamesTitle mt-3"> JUEGOS DESTACADOS </span>
          <GameSwiper games={gameCarousel.first_slide_list} />
          <span className="gamesTitle mt-3"> NUEVOS JUEGOS </span>
          <GameSwiper games={gameCarousel.second_slide_list} />
        </div>
      ) : (
        <div id={gameCSS.desktop_games}>
          <span className="codere_desktop_game_title"> Mesas en Español </span>
          <div className={gameCSS.bottom_conatiner}>
            {deskGames.spanish_games.map((item, key) => (
              <BottomGame
                key={key}
                index={key}
                img={item.image}
                logo={item.logo}
                gameLink={item.gamelink}
                name={item.name}
                alt={item.alt}
                logoAlt={item.logo_alt}
                isDuped={true}
              />
            ))}
          </div>
          <span className="codere_desktop_game_title"> Mejores Juegos </span>
          <div className={gameCSS.top_games_conatiner}>
            {deskGames.top_games.map((item, key) => {
              return (
                <TopGame
                  key={key}
                  imgSrc={item.image}
                  logo={item.logo}
                  gameLink={item.gamelink}
                  sponsor={item.sponsor}
                  game_name={item.name}
                  alt={item.alt}
                  logoAlt={item.logo_alt}
                />
              );
            })}
          </div>
          <span className="codere_desktop_game_title"> Nuevos Juegos </span>

          <div className={gameCSS.bottom_conatiner}>
            {deskGames.bottom_games.map((item, key) => {
              return (
                <BottomGame
                  key={key}
                  index={key}
                  img={item.image}
                  logo={item.logo}
                  gameLink={item.gamelink}
                  name={item.name}
                  alt={item.alt}
                  logoAlt={item.logo_alt}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Games;
