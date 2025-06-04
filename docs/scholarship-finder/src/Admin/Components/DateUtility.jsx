export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};