import api from "../data.json";

const categories = api.quizzes.map((quiz) => quiz.title);

const categoryQuestions = (cat?: string) =>
  api.quizzes.filter((q) => q.title === cat).map((q) => q.questions).flat();

export { categories, categoryQuestions };
