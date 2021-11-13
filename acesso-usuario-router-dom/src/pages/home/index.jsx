import { Link } from "react-router-dom";
import "./styles.css";

const Home = ({ Members }) => {
  return (
    <>
      <div className="Container-members">
        <h1>Lista de Membros</h1>
        {Members.map((member) =>
          member.type === "pf" ? (
            <Link key={member.id} to={`/customer/${member.id}`}>
              <li>{member.name}</li>
            </Link>
          ) : (
            <Link key={member.id} to={`/company/${member.id}`}>
              <li>{member.name}</li>
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Home;
