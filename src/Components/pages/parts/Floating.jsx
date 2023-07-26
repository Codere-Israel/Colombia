import { Button } from "react-bootstrap";

export default function Floating(props) {
  return (
    <div className="floating">
      <span className={"titleTextMob"}>{props.text}</span>
      <br />
      <Button
        href={
          props.juega
            ? "https://m.codere.com.co/deportes/#/CasinoPage"
            : "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"
        }
        rel="nofollow"
        className="floating-btn"
      >
        {props.juega ? "Juega ahora" : "Registrate"}
      </Button>
    </div>
  );
}
