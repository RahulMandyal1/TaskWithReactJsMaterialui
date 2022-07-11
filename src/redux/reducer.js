import { UPDATE_CARD, DELETE_CARD, COPY_CARD } from "./cardTypes";

const initialState = {
  projects: [
    {
      id: 234,
      name: "project first",
      budget: "20000",
      end_date: "26/10/2022",
    },
    {
      id: 3478,
      name: "project second",
      budget: "30000",
      end_date: "26/10/2022",
    },
    {
      id: 23943,
      name: "project third",
      budget: "40000",
      end_date: "26/10/2022",
    },
    {
      id: 34783,
      name: "project fourth",
      budget: "3000",
      end_date: "26/10/2022",
    },
  ],
};

//Our reducer function
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CARD:
      let updatedState = state.projects.filter((project) => {
        if (project.id === payload.id) {
          project = payload;
        }
        return project;
      });
      return { projects: updatedState };
    case COPY_CARD:
      let makeCopy = state.projects.filter(
        (project) => project.id === payload.id
      );
      let data = { ...makeCopy[0], id: randomIdGenerator() };
      return {
        projects: [...state.projects].concat(data),
      };

    case DELETE_CARD:
      let getProjectDeleted = state.projects.filter((project) => {
        if (project.id !== payload.id) {
          return project;
        }
      });
      return {
        projects: getProjectDeleted,
      };

    default:
      return state;
  }
};

function randomIdGenerator(number = 10092) {
  return Math.floor(Math.random(number) * number);
}
