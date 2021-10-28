interface ToggleAction {
  type: "TOGGLE_LOADING";
  payload?: boolean;
}

export type LoadingActions = ToggleAction;
