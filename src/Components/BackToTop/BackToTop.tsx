import { useEffect, useState } from "react";

// Styles
import { Wrapper } from "../../Styles/ComponentStyles/BackToTop.styles";

const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </Wrapper>
  );
};

export default BackToTop;
