package io.chr1s.blog.controller;

import io.chr1s.blog.constant.ConstantResponse;
import io.chr1s.blog.domain.Article;
import io.chr1s.blog.pojo.rest.JsonResponse;
import io.chr1s.blog.service.IArticleService;
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
    public JsonResponse<Object> addArticle(Article article) {
        log.info("current article: {}", article);
        boolean success = articleService.add(article);
        if (success) {
            return new JsonResponse<>(ConstantResponse.SUCCESS_CODE, ConstantResponse.SUCCESS_MSG);
        } else {
            return new JsonResponse<>(ConstantResponse.DATABASE_EXCEPTION, ConstantResponse.FAILED_MSG);
        }
    }

    @GetMapping("/all")
    public JsonResponse<List<Article>> allArticles() {
        log.info("请求所有数据");
        List<Article> data = new ArrayList<>();
        final JsonResponse<List<Article>> response = new JsonResponse<>();
        response.setData(data);
        return response;
    }
}