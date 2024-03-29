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

export const lockCheck = (unlockDate) => {
  // if date 2 is current date or later, note is "unlocked"

  const date1 = parseDate(formatDate(new Date()));
  const date2 = parseDate(unlockDate);

  return (
    date1.year > date2.year ||
    (date1.month > date2.month && date1.year === date2.year) ||
    (date1.day >= date2.day &&
      date1.month >= date2.month &&
      date1.year >= date2.year)
  );
};

export const getLocalProjects = () => {
  const localProjects = localStorage.getItem("projects");
  if (localProjects === null) {
    return [];
  }
  return JSON.parse(localProjects);
};

export const createProject = (id) => {
  const localProjects = getLocalProjects();
  const maybeProject = localProjects.find((project) => project.id === id);
  if (maybeProject) {
    return maybeProject;
  }
  return {
    hot: "",
    sessions: [],
  };
};
export const saveProject = (currentProject) => {
  const localProjects = getLocalProjects();
  const existing = localProjects.find(
    (project) => project.id === currentProject.id
  );
  if (existing) {
    existing.title = currentProject.title;
    existing.hot = currentProject.hot;
    existing.modified = currentProject.modified;
    existing.totalWordCount = currentProject.totalWordCount;
    existing.previousWordCount = currentProject.previousWordCount;
    existing.sessions = currentProject.sessions;
  } else {
    localProjects.push(currentProject);
  }
  localStorage.setItem("projects", JSON.stringify(localProjects));
};

export const wordCounter = (dirty: string) => {
  const clean = dirty.replace(/<\/?[^>]+(>|$)/g, "");
  return clean.split(/\S+/).length - 1;
  //reactQuill starts with <p><br></p> which for some reason won't parse, thus foo.length - 1
};
