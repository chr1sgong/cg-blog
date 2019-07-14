package io.chr1s.blog.utils;

import java.util.UUID;

public class ArticleUtils {

    public static String genArticleId() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }
}
