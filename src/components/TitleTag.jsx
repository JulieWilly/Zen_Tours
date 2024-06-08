import "./header.css";

const TitleTag = ({ title, description }) => {
  return (
    <>
      <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default TitleTag;
