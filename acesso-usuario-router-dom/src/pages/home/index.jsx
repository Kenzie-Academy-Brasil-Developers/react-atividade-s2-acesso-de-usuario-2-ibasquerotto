import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const Members = [
    {
      id: "1",
      name: "Pedro",
      type: "pf",
    },
    {
      id: "2",
      name: "André",
      type: "pf",
    },
    {
      id: "3",
      name: "Cantina da esquina",
      type: "pj",
    },
    {
      id: "4",
      name: "Lanches Ogro",
      type: "pj",
    },
    {
      id: "5",
      name: "Antunes",
      type: "pj",
    },
  ];

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
