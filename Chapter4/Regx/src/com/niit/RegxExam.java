package com.niit;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegxExam {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		//������֤����
		Pattern pattern = Pattern.compile("^\\w+@(\\w+\\.\\w+)+$");
		//������֤�����ȡ��֤����������ʾ����֤���ַ���
		Matcher matcher = pattern.matcher("tom@niit.com");
		//����У��
		if(matcher.matches()){
			System.out.println("��֤�ɹ�");
		}
		else{
			System.out.println("��֤ʧ��");
		}
	}

}
