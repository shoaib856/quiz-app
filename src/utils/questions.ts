import api from "../data.json";

const categories = Array.from(new Set(api.questions.map((q) => q.category)));

const categoryQuestions = (cat?: string) =>
  api.questions.filter((q) => q.category === cat);

export { categories, categoryQuestions };
