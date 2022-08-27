import {  React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import formFields from "./formFields";
import * as actionTypes from "../../stores/actions/actionsTypes";

const SurveyForm = (props) => {
  const survey = useSelector((state) => state.survey.survey);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [survey]);

  return (
    <div>
      {formFields.map((item, key) => {
        const { label, name } = item;
        return (
          <div key={item + key}>
            <h5>{label}</h5>
            <input
              value={survey[name] || ""}
              onChange={(e) => {
                dispatch({
                  type: actionTypes.UPDATE_SURVEY,
                  data: {
                    name,
                    value: e.target.value,
                  },
                });
              }}
              style={{ marginBottom: "5px" }}
            />
          </div>
        );
      })}
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '24px'}}>
      <Link onClick={() => dispatch({type: actionTypes.SET_SURVEY, data: {survey: {}}})} to={"/surveys"} >
      <button className="waves-effect waves-red red btn-large">Cancel</button>

      </Link>
      <button onClick={() => props.setShowReview(true)} className="waves-effect waves-light btn-large">Next</button>
      
      </div>
    </div>
  );
};

export default SurveyForm;
