import { useResponseContext } from "../context/ResponseContext";

function Response() {
  const { res } = useResponseContext();
  return (
    <div className="weathers">
      {res.map((item, index) => (
        <div className={`weather ${index === 0 && "selected"}`} key={index}>
          <span>{item.date}</span>
          <img src={item.icon} alt={item.description} />
          <div>
            <span>{`${Math.round(item.max)}° `}</span>
            <span>{`${Math.round(item.min)}°`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Response;
