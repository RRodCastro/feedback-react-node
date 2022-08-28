import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSurveys } from "../../stores/actions/index";

const SurveyList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSurveys = async () => {
      dispatch(getSurveys());
    };
    fetchSurveys();
  }, []);

  const surveys = useSelector((state) => state.survey.surveys);
  return (
    <div>
      {surveys.reverse().map((survey, index) => {
        return (
          <div className="card darken-1" key={survey._id + index}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SurveyList;
