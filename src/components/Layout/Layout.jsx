import { Container, Title } from './Layout.styled';

export default function Layout({ children }) {
  return (
    <main>
      <Container>
        <Title>Phonebook</Title>
        {children}
      </Container>
    </main>
  );
}
