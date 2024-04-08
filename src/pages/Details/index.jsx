import { Container } from "./styles.js";

import { Button } from "../../Components/Button";

export function Details() {
    return (
        <Container>
            <h1>Hello Word!</h1>
            <span>Luis Gustavo</span>

            <Button title="Login" loading />
            <Button title="Cadastrar" />
            <Button title="Voltar" />
        </Container>
    );
}
