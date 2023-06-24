'use client';

import { FaSearch, FaFilter } from 'react-icons/fa';
import { useState } from 'react';

const ChordsList = (prop) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [chords, setChords] = useState(prop.chords);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = prop.chords.filter((chord) =>
      chord.name
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(query.toLowerCase().replace(/\s/g, ''))
    );
    setChords(result);
  };

  const handleClick = () => {
    if (filtered.length) setChords(filtered);
    setFiltered([]);
  };

  const toggle = ({ target }) => {
    const element = target.firstElementChild ? target : target.parentElement;
    const name = element.firstElementChild.textContent;

    if (element.classList.contains('bg-red-300')) {
      element.classList.remove('bg-red-300');
      const result = filtered.filter(
        (chord) =>
          !chord.name
            .toLowerCase()
            .replace(/\s/g, '')
            .includes(name.toLowerCase().replace(/\s/g, ''))
      );
      setFiltered(result);
    } else {
      const result = prop.chords.filter((chord) =>
        chord.name
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(name.toLowerCase().replace(/\s/g, ''))
      );
      element.classList.add('bg-red-300');
      setFiltered([...filtered, ...result]);
    }
  };

  return (
    <>
      <div className="flex justify-center p-5">
        <form className="w-9/12" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              className="bg-slate-700 w-9/12 p-3 rounded mx-2 text-white"
              type="text"
              placeholder="Search Chords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="bg-red-600 px-2 rounded flex items-center">
              <FaSearch size={30} /> <p className="m-2 text-lg">Search</p>
            </button>
          </div>
        </form>
        <button
          className="bg-blue-600 px-2 rounded flex items-center"
          onClick={() => handleClick}
        >
          <FaFilter size={30} /> <p className="m-2 text-lg">Filter</p>
        </button>
      </div>
      <div className="p-5 grid grid-cols-3 gap-8 bg-slate-300">
        {chords.map((chord) => (
          <div
            className="bg-slate-200 p-5 flex flex-col justify-center items-center"
            onClick={toggle}
          >
            <p className="mb-2">{chord.name}</p>
            <img src={chord.url} alt="C Major" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ChordsList;
