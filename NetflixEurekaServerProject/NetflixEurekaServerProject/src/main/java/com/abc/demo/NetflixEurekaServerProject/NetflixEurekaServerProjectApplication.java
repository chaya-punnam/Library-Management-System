package com.abc.demo.NetflixEurekaServerProject;

import org.springframework.boot.SpringApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEurekaServer
public class NetflixEurekaServerProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(NetflixEurekaServerProjectApplication.class, args);
	}

}
