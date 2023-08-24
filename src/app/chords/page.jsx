import ChordsList from '../components/chordsList';

async function fetchChords() {
  const res = await fetch('http://localhost:4000/api/chords');
  const chords = await res.json();
  return chords;
}

const ChordsPage = async () => {
  const chords = await fetchChords();
  return (
    <div className="pt-5 pb-0 bg-white">
      <h1 className="text-center text-2xl mb-3">
        Search or select and filter the chords you want to play with
      </h1>
      <ChordsList chords={chords} />
    </div>
  );
};

export default ChordsPage;
