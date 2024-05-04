const initialState = {
  name: "",
  email: "",
  score: 0,
  status: "",
  image: "",
};
export const CandidateData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CANDIDTE_DATA":
      return {
        ...state,
      };
  }
};
