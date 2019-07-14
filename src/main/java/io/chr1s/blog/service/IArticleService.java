package io.chr1s.blog.service;

import io.chr1s.blog.domain.ArticlePost;

import java.util.List;

public interface IArticleService {

    /**
     * 按文章id查询
     * @param articleId
     * @return
     */
    ArticlePost getArticle(String articleId);

    /**
     * 分页查询
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<ArticlePost> pagination(int pageNo, int pageSize);

    /**
     * 新增文章
     * @param article
     * @return
     */
    boolean add(ArticlePost article);
}
