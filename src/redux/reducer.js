const initialState = {
    value: "",
    tasks: [
        { title: "task 1" },
        { title: "task 2" },
        { title: "task 3" },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TYPING": return { ...state, value: action.payload };

        case "ADD_TASK": return {
            ...state,
            tasks: [...state.tasks, { title: action.payload }],
            value: ""
        };

        case "DELETE_TASK":
            let tasks = [...state.tasks];
            tasks.splice(action.payload, 1);

            return { ...state, tasks };

        default: return state;
    }


}

export default reducer;