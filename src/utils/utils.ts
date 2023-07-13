export const formatDate = (date) => {
  const formattedDate = `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()}`;

  return formattedDate;
};
const parseDate = (date) => {
  // takes dd/mm/yyyy and turns it into an integer so it may be compared to another date
  const parsedDate = {
    day: parseInt(date[0] + date[1]),
    month: parseInt(date[3] + date[4]),
    year: parseInt(date[6] + date[7] + date[8] + date[9]),
  };
  return parsedDate;
};

export const lockCheck = (session) => {
  const date1 = parseDate(formatDate(new Date()));
  const date2 = parseDate(session.lockDate);
  return (
    date1.year > date2.year ||
    (date1.month > date2.month && date1.year === date2.year) ||
    (date1.day >= date2.day &&
      date1.month >= date2.month &&
      date1.year >= date2.year)
  );
};

const getLocalProjects = () => {
  const localProjects = localStorage.getItem("projects");
  if (localProjects === null) {
    return [];
  }
  return JSON.parse(localProjects);
};

export const LOCAL_PROJECTS = getLocalProjects();

export const createProject = (id) => {
  const maybeProject = LOCAL_PROJECTS.find((project) => project.id === id);
  if (maybeProject) {
    return maybeProject;
  }
  return {
    hot: "",
    sessions: [],
  };
};
export const saveProject = (currentProject) => {
  const existing = LOCAL_PROJECTS.find(
    (project) => project.id === currentProject.id
  );
  if (existing) {
    existing.hot = currentProject.hot;
    existing.modified = currentProject.modified;
    existing.sessions = currentProject.sessions;
  } else {
    LOCAL_PROJECTS.unshift(currentProject);
  }
  localStorage.setItem("projects", JSON.stringify(LOCAL_PROJECTS));
};
