module.exports = function() {
  const now = new Date();
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  return {
    date: `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
    iso: now.toISOString().split("T")[0]
  };
};
