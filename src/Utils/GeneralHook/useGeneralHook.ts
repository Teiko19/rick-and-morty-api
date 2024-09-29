import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UseGeneralType } from "./Type";

export function useGeneralHook(): UseGeneralType {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return [
    {},
    {},
    {},
    { dispatch, navigate }
  ]
}