const Footer = () => {
  return (
    <footer className="footer footer-center  text-gray-300 hover:text-white font-semibold bg-orange-600 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ABC
          Events Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;