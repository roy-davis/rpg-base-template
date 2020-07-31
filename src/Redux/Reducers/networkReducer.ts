import { NetworkActions } from '../Actions/networkActions';
import { NetworkState as NetworkEnum } from '../../Types/NetworkState';

type Network = {
    status: NetworkEnum;
}

const initialState: Network = {
    status: NetworkEnum.Unknown,
}

const NetworkReducer = (state: Network = initialState, action: NetworkActions) => {
    switch(action.type) {
        case 'SET_UNKNOWN':
            return {
                ...state,
                status: NetworkEnum.Unknown
            }
        case 'SET_OFFLINE':
            return {
                ...state,
                status: NetworkEnum.Offline
            }
        case 'SET_LIMITED':
            return {
                ...state,
                status: NetworkEnum.Limited
            }
        case 'SET_ONLINE':
            return {
                ...state,
                status: NetworkEnum.Offline
            }

        default:
            return state;
    }
}

export default NetworkReducer;