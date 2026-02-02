
export function Card({ inlineStat, content }:{ inlineStat:string, content:string }) { // TS cast as string
  return (
    <div className="card">
        <p>
          <span className="inlineStat">{inlineStat} </span>
          {content}
        </p>
    </div>
  );
}