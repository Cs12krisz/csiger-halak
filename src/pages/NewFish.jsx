import axios from "axios";

async function submitEvent(e) {
    try {
    e.preventDefault();
    const hal = {
        nev: e.target.nev.value,
        faj: e.target.faj.value,
        meretCm: e.target.meretCm.value,
        toNev: "Balaton",
        kep: e.target.kep.value,
    }
    
    const response = await axios.post("https://halak.sulla.hu/api/halakDTO", hal)
    alert(response.data)
    setTimeout(location.assign("/halak"), 2000)
    }
    catch (error) {
        console.error(error)
    }

}

function NewFish() {
    return (
        <>
            <h1>Új hal</h1>
            <form method="post" onSubmit={submitEvent}>
                <div className="mb-3 mt-3">
                    <label htmlFor="nev">Nev:</label>
                    <input type="text" className="form-control" id="nev" name="nev" required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="faj">Faj:</label>
                    <input type="text" className="form-control" id="faj" name="faj" required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="faj">Méret (cm):</label>
                    <input type="text" className="form-control" id="meretCm" name="meretCm" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="kep">Kep:</label>
                    <input type="text" className="form-control" id="kep" name="kep" />
                </div>
                <button type="submit" className="btn btn-primary">Felvitel</button>
            </form>
        </>
    )
}

export default NewFish