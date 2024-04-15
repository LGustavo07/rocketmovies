import { Container, Profile } from "./styles";
import { Input } from "../input";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

                <Input placeholder="Pesquisar pelo título" />

                <div className="profile">
                    <Link to="/rocketmovies/profile">
                        <strong>Luis Gustavo</strong>
                    </Link>

                    <Link to="#">
                        <span>Sair</span>
                    </Link>
                </div>

                <img
                    src="https://github.com/LGustavo07.png"
                    alt="foto do usuário"
                />
            </Profile>
        </Container>
    );
}
