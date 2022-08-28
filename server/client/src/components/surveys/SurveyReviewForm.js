import { React } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { saveSurvey } from '../../stores/actions/index';
import { useNavigate } from "react-router-dom";
import formFields from "./formFields";

const SurveyReviewForm = (props) => {
  const survey = useSelector((state) => state.survey.survey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div>
      {formFields.map((item, key) => {
        const { label, name } = item;
        const value = survey[name] || "";

        return (
          <div key={key}>
            <h5 style={{display: 'block'}}> {label}</h5> 
            <h6 style={{marginLeft: '12px', fontStyle: 'italic'}}> {value} </h6>
          </div>
        );
      })}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <button
          onClick={() => props.setShowReview(false)}
          className="waves-effect waves-red red btn-large"
        >
          Back
        </button>
        <button
          onClick={() => dispatch(saveSurvey(survey, navigate))}
        className="waves-effect waves-light btn-large">Send<i className="material-icons right" > email </i> </button>
        
      </div>
    </div>
  );
};

export default SurveyReviewForm;
