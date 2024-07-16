import React from "react";

function Footer() {
  return (
    <footer>
      <div className="date-copyright-txt">
        &copy; {new Date().getFullYear()} Imani Roberts. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
