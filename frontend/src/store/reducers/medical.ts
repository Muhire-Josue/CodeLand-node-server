import { ReduxActionType } from 'src/types';
import { Medical } from 'src/types/InitialState';
import { GET_MEDICAL_FAILURE, GET_MEDICAL_START, GET_MEDICAL_SUCCESS } from 'src/store/action-types/medical';
import initialState from 'src/store/initialState';

export default (
  state: Medical = initialState.medical,
  { type, payload }: ReduxActionType = { type: '', payload: null },
): Medical => {
  switch (type) {
    case GET_MEDICAL_START:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case GET_MEDICAL_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
        success: false,
      };
    case GET_MEDICAL_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};
