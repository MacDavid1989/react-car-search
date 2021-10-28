import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { State } from "../../Store/reducers/rootReducer";

// Styles
import { Wrapper } from "../../Styles/ComponentStyles/BackToTop.styles";

const BackToTop: React.FC = () => {
  const showButton = useSelector((state: State) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        dispatch({ type: "TOGGLE_BACKTOTOP", payload: true });
      } else {
        dispatch({ type: "TOGGLE_BACKTOTOP", payload: false });
      }
    });
  });

  const scrollToTop = () => window.scrollTo(0, 0);

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
