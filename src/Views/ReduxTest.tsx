import React, { Dispatch }  from "react";
import { ViewInterface } from '../Types/ViewAttributes';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../Redux/Reducers/';
import { NetworkActions } from '../Redux/Actions/networkActions';
import { NetworkState } from '../Types/NetworkState';

const LayoutTest: React.FC<ViewInterface> = (props) => {
    
    props.updateUI({ title: "Examples of layout." });

    //const status  = useSelector((state: AppState) => state.network.status);
    const status = useSelector<AppState, NetworkState>(state => state.network.status);
    

    const networkDispatch = useDispatch<Dispatch<NetworkActions>>();

    const setNetworkUnknown = () => {
        networkDispatch({ type: 'SET_UNKNOWN'});
    }

    const setNetworkOffline = () => {
        networkDispatch({ type: 'SET_OFFLINE'});
    }
    
    const setNetworkLimited = () => {
        networkDispatch({ type: 'SET_LIMITED'});
    }
    
    const setNetworkOnline = () => {
        networkDispatch({ type: 'SET_ONLINE'});
    }    


    return (
        <article className="page">

            <div>
                <h2>Network status:</h2>
                <h1>
                {status == NetworkState.Unknown && <span>Connection state unknown</span> }
                {status == NetworkState.Offline && <span>Connection is Offline</span> }
                {status == NetworkState.Limited && <span>Limited Connection</span> }
                {status == NetworkState.Online && <span>Connection is Online</span> }
                </h1>
            </div>

            <button onClick={setNetworkUnknown}>Network Unknown</button>
            <button onClick={setNetworkOffline}>Network Limited</button>
            <button onClick={setNetworkLimited}>Network Online</button>
            <button onClick={setNetworkOnline}>Network Offline</button>

        </article>
	)
}


export default LayoutTest;
