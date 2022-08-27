import React, { useState } from "react";

import SurveyForm from "./SurveyForm";
import SurveyReviewForm from "./SurveyReviewForm";
export const NewSurvey = () => {
  const [showReview, setShowReview] = useState(false);

  const renderContent = () => {
    if (showReview) {
      return <SurveyReviewForm setShowReview={setShowReview} />;
    }
    return <SurveyForm setShowReview={setShowReview} />;
  };

  return <div> {renderContent()} </div>;
};
