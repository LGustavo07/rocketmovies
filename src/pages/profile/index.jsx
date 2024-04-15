import { Back } from "../../components/Back";
import { Container, Avatar, Form } from "./styles";
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/rocketmovies/">
                    <Back title="Voltar" />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/LGustavo07.png"
                        alt="foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input type="text" placeholder="Luis Gustavo" icon={FiUser} />

                <Input
                    type="email"
                    placeholder="luisgustavobarbosa@gmail.com"
                    icon={FiMail}
                />

                <Input
                    type="password"
                    placeholder="Senha Atual"
                    icon={FiLock}
                />

                <Input type="text" placeholder="Nova Senha" icon={FiLock} />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
}
