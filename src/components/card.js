import { NavLink } from "react-router-dom";
export default function Card(props) {
  return (
    <>
      <div className="col location">
        <div className="card">
          <img
            src={props.data.pic}
            className="card-img-top imgcard "
            alt="Skyscrapers"
          />
          <div className="card-body">
            <p className="card-text">{props.data.name}</p>
            <p className="card-text">{props.data.price}</p>
            {/* <button className="btn btn-primary" >Buy</button> */}
            <NavLink to="/product-detail2" className="btn btn-primary">
              Buy
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
