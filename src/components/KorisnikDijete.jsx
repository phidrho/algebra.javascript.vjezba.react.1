//vjezba PROPS 5.8
export default function KorisnikDijete ({ime, godine, children}){
    return(
        <div>
            <h6>KorisnikDijete funkcija komponenta:</h6>
            <p>Ime mog djeteta je {ime}, ima {godine} godina</p>
            <p>Ovo su "children" od moje komponente: {children}</p>
        </div>
    );
}
