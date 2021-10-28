interface ToggleAction {
  type: "TOGGLE_BACKTOTOP";
  payload?: boolean;
}

export type BackToTopActions = ToggleAction;
