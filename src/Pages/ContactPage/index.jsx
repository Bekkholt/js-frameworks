import Form from "../../components/ContactForm";
import * as S from "./index.styles";

export default function ContactPage() {
  return (
    <div>
      <h1 className="title">Shop-drop</h1>
      <S.Header className="title">Contact</S.Header>
      <Form />
    </div>
  );
}
