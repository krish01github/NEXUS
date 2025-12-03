export default function Decrement({ counts, setCounts }) {
    return (
      <button onClick={() => setCounts(prev => prev - 1)}>Dec</button>
    );
  }
  