import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Members } from "../../members";
import "../home/styles.css";

const Customer = () => {
  const params = useParams();
  const member = Members.find((member) => member.id === params.id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">
        <span>Voltar</span>
      </Link>
    </div>
  );
};

export default Customer;
