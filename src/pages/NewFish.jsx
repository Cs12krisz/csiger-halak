
function submitEvent(e) {
    e.preventDefault();

}
function NewFish() {
    return (
        <>
            <h1>Új hal</h1>
            <form method="post" onSubmit={submitEvent(event)}>
                <label htmlFor="nev">Nev:</label>
                <input type="text" id="nev" name="nev" required />
                <label htmlFor="faj">Faj:</label>
                <input type="text" id="faj" name="faj" required />
                <label htmlFor="faj">Méret (cm):</label>
                <input type="text" id="meretCm" name="meretCm" required />
                <label htmlFor="kep">Kep:</label>
                <input type="file" id="kep" name="kep" required />
                <button type="submit">Mentes</button>
            </form>
        </>
    )
}

export default NewFish