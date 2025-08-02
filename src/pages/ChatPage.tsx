import { Container, Title } from '@mantine/core'
import OracleChat from '../components/OracleChat'

export default function ChatPage() {
  return (
    <Container size="md" py="md">
      <Title order={2}>Evaluación de IA</Title>
      <OracleChat />
    </Container>
  )
}
