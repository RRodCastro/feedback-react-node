import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as action_types from "../../stores/actions/actionsTypes";

import SurveyForm from "./SurveyForm";
import SurveyReviewForm from "./SurveyReviewForm";
export const NewSurvey = () => {
  
  const [showReview, setShowReview] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: action_types.SET_SURVEY, data: { survey: {} } })
    };
  }, []);

  const renderContent = () => {
    if (showReview) {
      return <SurveyReviewForm setShowReview={setShowReview} />;
    }
    return <SurveyForm setShowReview={setShowReview} />;
  };

  return <div> {renderContent()} </div>;
};
