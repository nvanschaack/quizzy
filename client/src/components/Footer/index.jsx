import { useParams } from "react-router-dom";

const Footer = () => {
  const { id } = useParams();

  return (
    <footer
      style={id ? {} : { position: 'absolute', bottom: '0' }}
      className="w-100 mt-auto text-dark p-4 mt-3 ">
      <div className="container text-center ">
        <h4>&copy; {new Date().getFullYear()} - Quizzy</h4>
      </div>
    </footer>
  );
};

export default Footer;