export function getAllUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}

export function saveAllUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getCurrentUserId() {
  return localStorage.getItem("currentUserId");
}

export function getUserData(userId) {
  const users = getAllUsers();
  return users[userId] || null;
}

export function saveUserData(userId, data) {
  const users = getAllUsers();
  const current = users[userId] || {};

  // שמירה בטוחה עם מיזוג כל המידע הקיים
  users[userId] = {
    ...current,
    ...data,
    settings: {
      ...(current.settings || {}),
      ...(data.settings || {})
    },
    submittedApplications: data.submittedApplications || current.submittedApplications || [],
    savedScholarships: data.savedScholarships || current.savedScholarships || [],
    matchedScholarships: data.matchedScholarships || current.matchedScholarships || []
  };

  saveAllUsers(users);
}

export function updateUserSettings(userId, newSettings) {
  const users = getAllUsers();
  if (!users[userId]) return;

  users[userId].settings = {
    ...users[userId].settings,
    ...newSettings
  };

  saveAllUsers(users);
}

export function getUserSettings(userId) {
  const user = getUserData(userId);
  return user?.settings || {};
}

export function getUserSavedScholarships(userId) {
  const user = getUserData(userId);
  return user?.savedScholarships || [];
}

export function getUserSubmittedApplications(userId) {
  const user = getUserData(userId);
  return user?.submittedApplications || [];
}

export function addSubmittedApplication(userId, scholarship) {
  const users = getAllUsers();
  if (!users[userId]) return;

  users[userId].submittedApplications = [
    scholarship,
    ...(users[userId].submittedApplications || [])
  ];

  saveAllUsers(users);
}

export function saveMatchedScholarships(userId, scholarships) {
  const users = getAllUsers();
  if (!users[userId]) return;
  users[userId].matchedScholarships = scholarships;
  saveAllUsers(users);
}

export function logoutUser() {
  localStorage.removeItem("isUserAuthenticated");
  localStorage.removeItem("currentUserId");
}
