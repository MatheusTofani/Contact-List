import { useDispatch } from "react-redux";
import { Button } from "../../components/button";
import Search from "../../components/search";
import { Container } from "../../style";
import { HeaderContainer, HeaderContent, InputsContainer, Title } from "./style";
import { openModal } from "../../store/slices/modalSlice";
import { SlCallOut } from "react-icons/sl";
function Header() {
    const dispatch = useDispatch();

    const handleAddContact = () => {
        dispatch(openModal(null));
    };

    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <Title><SlCallOut />Contatos</Title>
                    <InputsContainer>
                        <Search />
                        <Button variant="add" onClick={handleAddContact}>
                            Adicionar
                        </Button>
                    </InputsContainer>
                </HeaderContent>
            </Container>
        </HeaderContainer>
    );
}

export default Header;
