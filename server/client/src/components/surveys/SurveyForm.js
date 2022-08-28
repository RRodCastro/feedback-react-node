import {  React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import formFields from "./formFields";
import * as actionTypes from "../../stores/actions/actionsTypes";

const emailValidRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const SurveyForm = (props) => {
  const [errors, setErrors] = useState({});

  const survey = useSelector((state) => state.survey.survey);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [survey]);

  const validateFields = () => {
    const errs = {};
    formFields.forEach(item => {
      const { name } = item;
      const value = survey[name] || "";
      if (name === 'recipients' && value) {
        value.split(",").forEach(email => {
          if (!email.match(emailValidRegex)) {
            errs[name] = `${email} is not a valid email `
          }
        });
      }

      if (!value) {
        errs[name] = 'Required field';
      }
    })
    if (Object.keys(errs).length < 1) {
      return props.setShowReview(true)
    }
    setErrors(errs);
  }
  return (
    <div>
      {formFields.map((item, key) => {
        const { label, name } = item;
        const error = errors[name];
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
            {error && <span style={{display: 'flex', color: 'red'}} className=""> {error} <i className="material-icons">error</i></span>}
          </div>
        );
      })}
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '24px'}}>
      <Link onClick={() => dispatch({type: actionTypes.SET_SURVEY, data: {survey: {}}})} to={"/surveys"} >
      <button className="waves-effect waves-red red btn-large">Cancel</button>

      </Link>
      <button onClick={() => validateFields() } className="waves-effect waves-light btn-large">Next <i className="material-icons right" > done </i></button>
      
      </div>
    </div>
  );
};

export default SurveyForm;
