import React from "react";
import SectionPara from "../../Common/SectionPara";
import Button from "../../Common/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineTwitter,
  // AiOutlineLinkedin,
  // AiOutlineDribbble,
} from "react-icons/ai";
import {BsLinkedin} from 'react-icons/bs'
import Teams from "../../dummy/Team";

const Team = () => {
  const navigate = useNavigate();
  return (
    <div className="container section-padding team">
      <SectionPara
        topheading={"We’re hiring!"}
        heading={"Meet our team"}
        para={
          "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work."
        }
      />
      <div className="d-flex gap-3 mt-3 justify-content-center">
        <Button
          children={"About us"}
          border={"1px solid rgba(0,0,0,0.3)"}
          myFun={() => navigate("/")}
        />
        <Button
          bgcolor={"#397F83"}
          tcolor={"#fff"}
          shadow={"0 1px 3px rgba(0,0,0,0.4)"}
          children={"Open Positions"}
          myFun={() => navigate("/career")}
        />
      </div>
      <div className="row gx-4 gy-5 mt-5">
      

        {Teams.map((team) => {
          let { id, empname, profile, position, desc, linkedin, twitter } =
            team;
          return (
            <>
              <div className="col-sm-6 col-md-4 col-lg-3 " key={id}>
                <div className="team-card p-3">
                  <div className="img-box">
                    <img src={profile} alt={empname} />
                  </div>
                  <h4 className="mt-3">{empname}</h4>
                  <span>{position}</span>
                  <p>{desc}</p>
                  <div className="social-icons">
                    {twitter && (
                      <Link to={"https://www.twitter.com/"}>
                        <AiOutlineTwitter />
                      </Link>
                    )}
                    {linkedin && (
                      <Link to={linkedin} target={"_blank"}>
                        <BsLinkedin style={{color:"#0a66c2"}}/>
                      </Link>
                    )}
                    {/* <Link to={"https://www.dribble.com/"}>
                      <AiOutlineDribbble />
                    </Link> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

// const TeamCard = ({ img, name, occupation, para }) => {
//   return (
//     <div className="col-sm-6 col-md-4 col-lg-3 ">
//       <div className="team-card p-3">
//         <div className="img-box">
//           <img src={img} alt={name} />
//         </div>
//         <h4 className="mt-3">{name}</h4>
//         <span>{occupation}</span>
//         <p>{para}</p>
//         <div className="social-icons">
//           <Link to={"https://www.twitter.com/"}>
//             <AiOutlineTwitter />
//           </Link>
//           <Link to={"https://www.linkedin.com/"}>
//             <AiOutlineLinkedin />
//           </Link>
//           <Link to={"https://www.dribble.com/"}>
//             <AiOutlineDribbble />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Team;
