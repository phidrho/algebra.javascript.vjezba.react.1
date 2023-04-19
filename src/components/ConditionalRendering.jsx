//zadatak 5.6.
function isNumber(broj){
    return Number(broj) === broj;
}

export function ConditionalRendering({props}) {
    if(props === undefined) return; // provjeravamo ako je slučajno došlo bez ičega
    if(!isNumber(props)) return; // provjeravamo je li to broj

    var isVeci = false;

    if (props > 10){
        isVeci = true;
    }

    return(
        <div>
            {isVeci && <p>Broj je veći od 10 - {props}</p>}
            {!isVeci && <p>Broj je manji od 10 - {props}</p>}
        </div>
    )
}
