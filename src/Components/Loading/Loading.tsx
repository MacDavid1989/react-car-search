import { CircularProgress } from "@material-ui/core";

import { Wrapper } from "../../Styles/ComponentStyles/LoadingStyles";

export default function CircularIndeterminate() {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
}
