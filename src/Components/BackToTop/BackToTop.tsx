import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { ArrowUpwardRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

// Store
import { State } from "../../Store/reducers/rootReducer";

// Styles
import { Wrapper } from "../../Styles/ComponentStyles/BackToTop.styles";

// Methods
import { scrollToTop } from "../../Utilities/Methods";

const BackToTop: React.FC = () => {
  const showButton = useSelector((state: State) => state.backToTop);

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

  return (
    <Wrapper>
      {showButton && (
        <IconButton onClick={scrollToTop} className="back-to-top">
          <ArrowUpwardRounded
            color="primary"
            fontSize="inherit"
          ></ArrowUpwardRounded>
        </IconButton>
      )}
    </Wrapper>
  );
};

export default BackToTop;
