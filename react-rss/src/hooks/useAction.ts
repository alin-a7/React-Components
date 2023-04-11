import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as CharactersActionCreators from "../store/action-creators/characters";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CharactersActionCreators, dispatch);
};
