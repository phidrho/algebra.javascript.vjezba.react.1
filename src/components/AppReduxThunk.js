import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNasaData, getError, getNasaData } from './utilities/ReduxThunkFunkcije';


export default function AppReduxThunk() {
    const data = useSelector(getNasaData);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNasaData());
        // To disable warning about useEffect incorrect usage, add following comment line:
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) {
        return <div>Couldn't load</div>;
    }

    if (!data) {
        return <div>Loading NASA data</div>;
    }

    const { title, url, explanation } = data;
    return (
        <div className="app">
            <h1>NASA picture of the day</h1>
            <h3>{title}</h3>
            <img src={url} alt={title} width={500} />
            <p>{explanation}</p>
        </div>
    );
}
