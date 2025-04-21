import "../style/Parners.css";
function Partners(props) {
  return (
    <div>
      <div className="partner-list">
        {props.partnersList.map((item, index) => {
          return (
            <div className="kartu-partner" key={index}>
              <img src={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partners;
