export default function Increment({ counts, setCounts }) {
    return (
      <button onClick={() => setCounts(prev => prev + 1)}>Inc</button>
    );
  }
  