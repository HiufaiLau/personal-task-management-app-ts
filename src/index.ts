let article: {
  author: string;
  content: string;
  title: string;
  image?: string;
  date?: Date;
  wordCount?: number;
};

article = {
  author: "Stella",
  content: "Hello World",
  title: "My First Article",
  date: new Date(date.toLocaleDateString()),
  wordCount: 100,
};

console.log(article);
