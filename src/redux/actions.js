import { UPDATE_PAGE, UPDATE_PROJECT_ID } from "./actionTypes";

export const updatePage = ( pageId ) => {
  return ({
    type: 'UPDATE_PAGE',
    pageId: pageId,
  });
}

export const updateProjectId = ( projectId ) => {
  return ({
    type: 'UPDATE_PROJECT_ID',
    pageId: projectId,
  });
}
