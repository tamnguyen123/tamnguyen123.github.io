package com.tam.IoC;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;

public class App {

	/**
	 * @param args
	 * Demo using ApplicationContext / BeanFactory
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context1 = new FileSystemXmlApplicationContext("beans.xml");
		Patient patient = (Patient) context1.getBean("patient");

		patient.speak();

		Resource resource = new FileSystemResource("beans.xml");
		BeanFactory factory = new XmlBeanFactory(resource);

		Paramedic pa = (Paramedic) factory.getBean("para");

		pa.getTruck();

	}
}
