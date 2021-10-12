import React from "react";

function Footer(props) {
  const {paletteName, emoji} = props;
  return (
    <div>
      <footer className="palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
}

export default Footer;
