import PropTypes from "prop-types";
import "./globals.css";

export const metadata = {
  title: "N.M. Asif Sheikh | Portfolio",
  description: "Portfolio website for N.M. Asif Sheikh, Fullstack Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
