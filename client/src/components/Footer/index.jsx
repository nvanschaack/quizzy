const Footer = () => {
 
  return (
    <footer style={{position:'absolute', bottom: '0'}} className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Quizzy</h4>
      </div>
    </footer>
  );
};

export default Footer;