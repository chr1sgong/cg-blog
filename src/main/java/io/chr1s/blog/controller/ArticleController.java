package io.chr1s.blog.controller;

import io.chr1s.blog.constant.ConstantResponse;
import io.chr1s.blog.domain.ArticlePost;
import io.chr1s.blog.pojo.rest.JsonResponse;
import io.chr1s.blog.service.IArticleService;
import io.chr1s.blog.utils.ArticleUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000" )
@RestController
@RequestMapping("/admin")
@Slf4j
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    @GetMapping("/")
    public String index() {
        return "hello, article";
    }

    @PostMapping("/newArticle")
    public JsonResponse<Object> addArticle(@RequestBody ArticlePost article) {
        String articleId = ArticleUtils.genArticleId();
        log.info("articleId: {}", articleId);
        article.setArticleId(articleId);
        article.setShowPublic(true);
        log.info("current article: {}", article);
        boolean success = articleService.add(article);
        if (success) {
            return new JsonResponse<>(ConstantResponse.SUCCESS_CODE, ConstantResponse.SUCCESS_MSG);
        } else {
            return new JsonResponse<>(ConstantResponse.DATABASE_EXCEPTION, ConstantResponse.FAILED_MSG);
        }
    }

    @GetMapping("/{articleId}")
    public JsonResponse<ArticlePost> detail(@PathVariable("articleId") String articleId) {
        ArticlePost data = articleService.getArticle(articleId);
        if (data == null) {
            log.debug("当前文章id{}不存在");
        }
        JsonResponse<ArticlePost> response = new JsonResponse<>();
        response.setData(data);
        return response;
    }

    @GetMapping("/all")
    public JsonResponse<List<ArticlePost>> allArticles() {
        log.info("请求所有数据");
        List<ArticlePost> data = articleService.pagination(0, 20);
        final JsonResponse<List<ArticlePost>> response = new JsonResponse<>();
        response.setData(data);
        return response;
    }
}