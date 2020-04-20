export default function courseRedeuser(state = [], action) {
  switch (action.type) {
    case "CRERATE_COURSE":
      return [...state, { ...action.course }]; // no no no no no => state.push(action.course)

    default:
      return state;
  }
}
