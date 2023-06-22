async function fetchChords() {
  const res = await fetch('http://localhost:3000/api/chords');
  const chords = await res.json();
  return chords;
}

const ChordsPage = async () => {
  const chords = await fetchChords();
  console.log(chords);
  return (
    <div className="p-5 grid grid-cols-3 gap-8 bg-slate-300">
      {chords.map((chord) => (
        <div className="bg-slate-200 p-5 flex flex-col justify-center items-center">
          <p>{chord.name}</p>
          <img src={chord.url} alt="C Major" />
        </div>
      ))}
    </div>
  );
};

export default ChordsPage;
