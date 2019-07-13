package io.chr1s.blog.pojo.rest;

import io.chr1s.blog.constant.ConstantResponse;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class JsonResponse<T> {

    private int code;

    private String message;

    private T data;

    public JsonResponse() {
        this.code = ConstantResponse.SUCCESS_CODE;
        this.message = ConstantResponse.SUCCESS_MSG;
    }

    public JsonResponse(int code) {
        this.code = code;
    }

    public JsonResponse(int code, String message) {
        this(code);
        this.message = message;
    }
}
