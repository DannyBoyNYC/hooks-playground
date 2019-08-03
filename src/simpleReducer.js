const nums = [2, 4, 6];
const initialState = 0;

function reducer(state, value) {
  return state + value;
}

const total = nums.reduce(reducer, initialState);

console.log(total);

// Initial Value: 0

// First invocation:
//   state: 0
//   value: 2

// Second invocation:
//   state: 2
//   value: 4

// Third invocation:
//   state: 6
//   value: 6

// No more elements in the collection, return 6 + 6 which is 12.
