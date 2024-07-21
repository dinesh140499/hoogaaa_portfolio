import Button from "../../Common/Button";
import {
  AiOutlineCloudUpload,
  AiOutlineDelete,
  AiFillCheckCircle,
} from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useEffect, useState } from "react";
// import { Country } from "country-state-city";
import { toast } from "react-hot-toast";
// import { useTimezoneSelect, allTimezones } from "react-timezone-select";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const labelStyle = "original";
// const timezones = {
//   ...allTimezones,
//   "Europe/Berlin": "Frankfurt",
// };

function convertFileSize(fileSizeInBytes) {
  if (fileSizeInBytes >= 1000000000) {
    return (fileSizeInBytes / 1000000000).toFixed(2) + " GB";
  } else if (fileSizeInBytes >= 1000000) {
    return (fileSizeInBytes / 1000000).toFixed(2) + " MB";
  } else {
    return (fileSizeInBytes / 1000).toFixed(2) + " KB";
  }
}

const PersonalInfo = () => {
  // const { type } = useParams();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [pdfFile, setPdfFile] = useState("");
  const [imgFile, setImageFile] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [uploadComplete] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [profile, setProfile] = useState("");
  // const [resume, setResume] = useState('')
  const [inputText, setInputText] = useState({
    fname: "",
    lname: "",
    email: "",
    profile: "",
    position: "",
    desc: "",
    resume: "",
  });

  const [progress, setProgress] = useState("");

  const submitData = async () => {
    const { fname, email, profile, position, resume } = inputText;
    if (!fname || !email || !profile || !position || !resume) {
      toast.error("Field Cannot Be Blank", {
        duration: 1500,
      });
    } else {
      try {
        const formData = new FormData();
        formData.append("firstname", inputText.fname);
        formData.append("lastname", inputText.lname);
        formData.append("email", inputText.email);
        formData.append("params", imgFile);
        formData.append("paramsR", pdfFile);
        formData.append("description", inputText.desc);
        formData.append("position", inputText.position);
        toast.success("Registered");
        await axios.post(
          "https://www.hoogaaa.com/hoogaaa/api/v1/action/submit/",
          formData
        );
        setShowMsg(true);
        toast.success("Submitted", {
          duration: 1500,
        });
      } catch (error) {
        if (error.response.status === 401) {
          toast.error("Unauthorized", {
            duration: 1500,
          });
        }
      }
    }
  };

  // {
  //   firstname: inputText.fname,
  //   lastname: inputText.lname,
  //   email: inputText.email,
  //   params: profile,
  //   paramsR: resume,
  //   country: inputText.country,
  //   description: inputText.desc,
  // }

  let reader = new FileReader();

  const inputVal = (e) => {
    const { name, value, files } = e.target;
    if (serviceType === "photo") {
      setProfile(URL.createObjectURL(e.target.files[0]));
      setServiceType("");
      setImageFile(e.target.files[0]);
    }
    if (serviceType === "resume") {
      const file = files[0];
      setPdfFile(file);
      // setResume(URL.createObjectURL(file))
      setServiceType("");
      reader.readAsDataURL(file);
      // convertFileSize(file.size)
      let convert = convertFileSize(file.size);
      setFileName(file.name);
      setFileSize(convert);

      reader.onprogress = (e) => {
        if (e.loaded && e.total) {
          const percent = (e.loaded / e.total) * 100;
          setProgress(Math.round(percent));
        }
      };
    }
    setInputText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, []);

  return (
    <div className="container personalinfo section-padding mt-3 ">
      <div className="row justify-content-center mt-5 ">
        <div className="col-12">
          <div className="row text-center">
            <div className="col-md-6 col-lg-8 text-lg-start text-center">
              <h4 className="mb-0 title capitalize">Personal Info</h4>
              <p className="mb-0 mt-2 title-bottom">
                Update your photo and personal details here.
              </p>
            </div>
            {/* <div className="col-md-6 col-lg-4">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="d-flex  gap-3 justify-content-center">
                    <Button
                      padding="8px 10px"
                      children={"Cancel"}
                      border={"1px solid rgba(0,0,0,0.3)"}
                      myFun={() => navigate("/career")}
                    />
                    <Button
                      padding="8px 10px"
                      bgcolor={"#397F83"}
                      tcolor={"#fff"}
                      shadow={"0 1px 3px rgba(0,0,0,0.4)"}
                      children={"Submit"}
                      myFun={() => navigate("/")}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <hr />
      <form onSubmit={(e) => e.preventDefault()} method="post">
        <div className="row justify-content-center justify-content-lg-start text-start mt-5">
          <div className="col-12 col-lg-10">
            <div className="row fname lname">
              <div className="col-md-6">
                <label htmlFor="first" className="form-label w-100">
                  Name
                </label>
              </div>
              <div className="col-md-6">
                <div className="row g-3 ">
                  <div className="col-12 col-md-6">
                    <div className="w-100">
                      <input
                        name="fname"
                        type="text"
                        className="form-control"
                        id="first"
                        aria-describedby="first"
                        placeholder=" First Name"
                        onChange={inputVal}
                        value={inputText.fname}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="w-100">
                      <input
                        name="lname"
                        type="text"
                        className="form-control"
                        id="first"
                        aria-describedby="first"
                        placeholder="Last Name"
                        onChange={inputVal}
                        value={inputText.lname}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 email">
              <div className="col-md-6">
                <div className="w-100">
                  <label htmlFor="first" className="form-label mb-0">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="w-100">
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Email Address"
                    onChange={inputVal}
                    value={inputText.email}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3 photo ">
              <div className="col-md-6">
                <div className="w-100">
                  <label htmlFor="first" className="form-label mb-0">
                    Your Photo
                    <span className="d-block">
                      This will be displayed on your profile.
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center justify-content-start mt-3">
                  <div className="col-lg-2">
                    <div className="img-box">
                      <img
                        // src={inputText.profile ? {img} : "/images/team/team-4.jpg"}
                        src={profile ? profile : "/images/avatar.png"}
                        alt="user"
                        style={{ borderRadius: "50%" }}
                        accept={".jpg,.png"}
                      />
                    </div>
                  </div>
                  <div className=" col-lg-10">
                    <div className="img-upload w-100 mt-3">
                      <div className="upload-icon">
                        <AiOutlineCloudUpload htmlFor="profile" />
                      </div>
                      <input
                        type="file"
                        id="profile"
                        accept="image/*"
                        name="profile"
                        onChange={inputVal}
                      />
                      <label
                        htmlFor="profile"
                        onClick={() => setServiceType("photo")}
                      >
                        <span>Click to Upload</span> or drag and drop PNG, JPG
                        <br />
                        (max. 800x400px)
                      </label>
                      <p>{inputText.profile.substring(12)}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="row align-items-center justify-content-start  mt-3" >
                  <div className="col-sm-12 col-md-2">
                    <div className="img-box">
                      <img src={"/images/team/team-4.jpg"} alt="user" style={{ borderRadius: "50%" }}/>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-10">
                    <div className="img-upload">
                      <div className="upload-icon" onChange={inputVal}>
                        <AiOutlineCloudUpload />
                      </div>
                      <input type="file" id="file" accept="image/*" onChange={inputVal} />
                      <label htmlFor="file" onChange={inputVal}>
                        <span id="file">Click to Upload</span> or drag and drop SVG, PNG,
                        JPG or GIF (max. 800x400px)
                      </label>
                    </div>

                  </div>
                </div>
              </div> */}
            </div>

            <div className="row mt-3 position">
              <div className="col-md-6">
                <div className="w-100">
                  <label htmlFor="first" className="form-label mb-0">
                    Position
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="w-100">
                  <select
                    name="position"
                    onChange={inputVal}
                    value={inputText.position}
                    id="postion"
                    className="form-control"
                  >
                    <option>
                      <div className="d-flex justify-content-betweeen align-items-center">
                        <div className="icon">
                          <img src="/images/user.png" alt="" />
                        </div>
                        Applying For
                      </div>
                    </option>
                    {/* {Country &&
                      Country.getAllCountries().map((i) => {
                        return (
                          <option value={i.isoCode} key={i.isoCode}>
                            {i.name}
                          </option>
                        );
                      })} */}
                    <option value={"Node Js"}>
                      Backend Developer
                    </option>
                    <option value={"Mern Stack"}>
                      Mern Stack
                    </option>
                    <option value={"Testing"}>
                      Testing
                    </option>
                    <option value={"Frontend Developer"}>
                      Frontend Developer
                    </option>
                    <option value={"Node Js"}>
                      Node Js
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mt-3 bio">
              <div className="col-md-6">
                <div className="w-100">
                  <label htmlFor="bio" className="form-label mb-0">
                    Description
                  </label>
                  <p className="mb-0">Write a short introduction.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center gy-3">
                  {/* <div className="col-6">
                    <div className="w-100">
                      <select name="font" id="font" className="form-control">
                        <option value="">
                          <div className="d-flex justify-content-betweeen align-items-center">
                            <div className="icon">
                              <img src="/images/user.png" alt="" />
                            </div>
                            Normal Text
                          </div>
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <span id="bold" className="text-style">
                          {<BsTypeBold />}
                        </span>
                        <span id="italic" className="text-style">
                          {<BsTypeItalic />}
                        </span>
                        <span id="link" className="text-style">
                          {<AiOutlineLink />}
                        </span>
                        <span id="list" className="text-style">
                          {<AiOutlineUnorderedList />}
                        </span>
                        <span id="list-order" className="text-style">
                          {
                            <AiOutlineOrderedList
                              className="text-style"
                              id="number-order"
                            />
                          }
                        </span>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-12 col-md-12">
                    <div className="w-100 mt-3">
                      <textarea
                        className="form-control"
                        name="desc"
                        id="desc"
                        aria-describedby="desc"
                        placeholder="Tell me about your self."
                        rows={"5"}
                        onChange={inputVal}
                        value={inputText.desc}
                      ></textarea>
                      <label id="nochar" htmlFor="write">
                        275 characters left
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 porfolio">
              <div className="col-md-6">
                <div className="w-100">
                  <label htmlFor="first" className="form-label mb-0">
                    Resume Upload
                    {/* <span className="d-block">
                      Share a few snippets of your work.
                    </span> */}
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-upload w-100 mt-3">
                  <div className="upload-icon">
                    <AiOutlineCloudUpload htmlFor="upload" />
                  </div>
                  <input
                    type="file"
                    id="upload"
                    name="resume"
                    onChange={inputVal}
                  />
                  <label
                    htmlFor="upload"
                    onClick={() => setServiceType("resume")}
                  >
                    <span>Click to Upload</span> or drag and drop <br /> SVG,
                    PNG, JPG or GIF (max. 800x400px)
                  </label>
                  {/* <p>{inputText.resume.substring(12)}</p> */}
                </div>
                {/* Scale Bar */}
                {inputText.resume ? (
                  <div className="mt-3 portfolio-card">
                    <div className="col-12">
                      <div className="row  justify-content-between">
                        <div className="col-2">
                          <div className="icon">
                            <HiOutlineDocumentDuplicate />
                          </div>
                        </div>
                        <div className="col-8 text-center text-sm-start">
                          <h4 className="mb-0">{fileName}</h4>
                          <p className="mb-0">{fileSize}</p>
                          <div className="d-flex align-items-center justify-content-between"></div>
                        </div>
                        <div className="col-2">
                          <div className="icondel">
                            {uploadComplete === true ? (
                              <AiOutlineDelete />
                            ) : (
                              <div id="checkupload">
                                <AiFillCheckCircle />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <div className="row align-items-center mt-3">
                          <div className="col-12 col-sm-10">
                            <div className="scale">
                              <div className="bar" id="document"></div>
                            </div>
                          </div>
                          <div className="col-4 col-sm-2">
                            <p className="mb-0">{progress}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="d-flex  gap-3 justify-content-center">
              <Button
                padding="8px 10px"
                children={"Cancel"}
                border={"1px solid rgba(0,0,0,0.3)"}
                myFun={() => navigate("/")}
              />
              <Button
                padding="8px 10px"
                bgcolor={"#397F83"}
                tcolor={"#fff"}
                shadow={"0 1px 3px rgba(0,0,0,0.4)"}
                children={"Submit"}
                myFun={() => submitData()}
              />
            </div>
          </div>
        </div>
      </form>

      {showMsg ? (
        <h4 className="mt-5 text-center" style={{ color: "#397f83" }}>
          Successfully Done !
        </h4>
      ) : (
        ""
      )}
    </div>
  );
};

export default PersonalInfo;
