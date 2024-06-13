"use client";

import { Card } from "@/components/Card";
import { Article } from "@/types";
import { useApi } from "@/utils/api";
import { useEffect, useState } from "react";

export function Grid() {
  const api = useApi("/article");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await api.get();
      setArticles(result);
    };

    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8">
      {articles.map((article) => (
        <Card
          key={article.id}
          article={{
            title: article.title,
            description: article.description,
            author: article.author,
          }}
        />
      ))}
    </div>
  );
}
