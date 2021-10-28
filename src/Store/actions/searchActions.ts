interface YearAction {
  type: "ADD_YEAR";
  payload?: string;
}

interface MakeAction {
  type: "ADD_MAKE";
  payload?: string;
}

interface TypeAction {
  type: "ADD_TYPE";
  payload?: string;
}

export type SearchActions = YearAction | MakeAction | TypeAction;
