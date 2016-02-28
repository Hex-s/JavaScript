package com.niit;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegxExam {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		//创建验证规则
		Pattern pattern = Pattern.compile("^\\w+@(\\w+\\.\\w+)+$");
		//根据验证规则获取验证器，参数表示被验证的字符串
		Matcher matcher = pattern.matcher("tom@niit.com");
		//进行校验
		if(matcher.matches()){
			System.out.println("验证成功");
		}
		else{
			System.out.println("验证失败");
		}
	}

}
