import { Button } from "react-bootstrap";

export default function Floating(props) {
  return (
    <div className="floating">
      <span>{props.text}</span>
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
        {props.juega ? "Juega ahora" : "Regístrate"}
      </Button>
    </div>
  );
}
