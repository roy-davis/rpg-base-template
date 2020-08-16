import React, { useState, useEffect } from 'react';

interface OfflineDetectProps  {
  children?: any,
}

enum NetworkState {
    Online,
    Limited,
    Offline,
    Unknown,
}

const OfflineDetect: React.FC<OfflineDetectProps> = (props) => {

    const [networkState, setNetworkState] = useState(NetworkState.Unknown);


    const detectNetworkState = () => {

        let detectedState = navigator.onLine ? NetworkState.Online : NetworkState.Offline;

        if ( detectedState === NetworkState.Online ) {
            fetch('https://www.google.com/', {  mode: 'no-cors', })
            .then(() => { detectedState = NetworkState.Online; })
            .catch(() => { detectedState = NetworkState.Limited; });
        }

        setNetworkState(detectedState);
    }

    useEffect(() => {

    });

    return (
        <>
        {networkState == NetworkState.Offline &&
            <p>Offline</p>
        }

        </>
    );
};

export {
    OfflineDetect,
    NetworkState,
};