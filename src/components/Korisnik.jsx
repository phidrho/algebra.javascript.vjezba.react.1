export default function Korisnik ({name, years, onNameChanged}){
    return (
        <div>
            <p>Moje ime je {name}, i imam {years} godina</p>
            <input type="text" onChange={onNameChanged} value={name} />
        </div>
    )
}
