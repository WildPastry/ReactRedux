// import action types
import { SET_PROJECT } from '../../constants/actions-types';

export function setProject(payload: any) {
	return { type: SET_PROJECT, payload };
}
