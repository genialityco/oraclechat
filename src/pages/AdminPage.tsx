import { Container, Table, Title } from "@mantine/core";
import { mockResponses } from "../data/mockResponses";

export default function AdminPage() {
  return (
    <Container>
      <Title order={2} mb="md">
        Respuestas por usuario
      </Title>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Pregunta</th>
            <th>Respuesta</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {mockResponses.map((r, i) => (
            <tr key={i}>
              <td>{r.nombre}</td>
              <td>{r.correo}</td>
              <td>{r.pregunta}</td>
              <td>{r.respuesta}</td>
              <td>{r.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
