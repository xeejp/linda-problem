const initialState = {
  page: "waiting",
  users: {},
  question: {
    text: "",
    answers: [],
  },
  ans_programmer: 0,
  ans_banker: 0,
  ans_each: 0,
  join_experiment: 0,
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "ADD_USER" :
      console.log("ADD_USER")
      return Object.assign({}, state, {
        users: action.users,
      })

    case "CHANGE_PAGE":
      return Object.assign({}, state, {
        page: action.page,
        question: action.question,
        users: action.users,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
        join_experiment: action.join_experiment,
      })

    case "FETCH_CONTENTS":
      console.log("FETCH_CONTENTS")
      return Object.assign({}, state, {
        page: action.page,
        question: action.question,
        users: action.participants,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
        join_experiment: action.join_experiment,
      })

    case "SUBMIT_ANSWER":
      console.log("ok")
      return Object.assign({}, state, {
        users: action.users,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
        join_experiment: action.join_experiment,
      })

    case "UPDATE_QUESTION":
      return Object.assign({}, state, {
        question: action.question,
      })

    default:
      return state
  }
}

export default reducer
