package io.chr1s.blog.service.impl;

import io.chr1s.blog.dao.ArticleMapper;
import io.chr1s.blog.domain.Article;
import io.chr1s.blog.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements IArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Override
    public Article get(String articleId) {
        return null;
    }

    @Override
    public List<Article> pagination(int pageNo, int pageSize) {
        return null;
    }

    @Override
    public boolean add(Article article) {
        return articleMapper.insertSelective(article) > 0;
    }
}
