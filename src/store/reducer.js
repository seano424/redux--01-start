const initalState = {
  counter: 0
}

const reducer = (state = initalState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  } else if (action.type === `DECREMENT`) {
    return {
      counter: state.counter - 1
    }
  } else if (action.type === 'ADDFIVE') {
    return {
      counter: state.counter + 5
    }
  } else if (action.type === 'SUBTRACTFIVE') {
    return {
      counter: state.counter - 5
    }
  }

  return state
}

export default reducer