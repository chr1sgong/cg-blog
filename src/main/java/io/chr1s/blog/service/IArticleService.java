package io.chr1s.blog.service;

import io.chr1s.blog.domain.Article;

import java.util.List;

public interface IArticleService {

    /**
     * 按文章id查询
     * @param articleId
     * @return
     */
    Article get(String articleId);

    /**
     * 分页查询
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> pagination(int pageNo, int pageSize);

    /**
     * 新增文章
     * @param article
     * @return
     */
    boolean add(Article article);
}
