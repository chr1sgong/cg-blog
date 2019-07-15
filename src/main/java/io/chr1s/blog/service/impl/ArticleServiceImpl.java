package io.chr1s.blog.service.impl;

import io.chr1s.blog.dao.ArticlePostMapper;
import io.chr1s.blog.domain.ArticlePost;
import io.chr1s.blog.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements IArticleService {

    @Autowired
    private ArticlePostMapper articlePostMapper;

    @Override
    public ArticlePost getArticle(String articleId) {
        return articlePostMapper.selectByArticleId(articleId);
    }

    @Override
    public List<ArticlePost> pagination(int pageNo, int pageSize) {
        return articlePostMapper.pagination(pageNo, pageSize);
    }

    @Override
    public boolean add(ArticlePost article) {
        return articlePostMapper.insertSelective(article) > 0;
    }
}
