export const CandidateData = (state = {}, action) => {
  console.log("reducer", action.candidateDetails);
  switch (action.type) {
    case "ADD_CANDIDTE_DATA":
      return {
        ...state,
        ...action.candidateDetails,
      };
  }
};
