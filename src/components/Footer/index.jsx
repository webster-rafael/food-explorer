import { Container } from './styles';
import logo from "assets/LogoWebb-white.png";

export function Footer(){
  return (
    <Container>
      <img src={logo} alt="Logo Restaurant-Webb" />
      <span>&copy; 2024 - Todos os direitos reservados.</span>
    </Container>
  )
}