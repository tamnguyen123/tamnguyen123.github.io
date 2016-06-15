package com.tam.di;
import org.springframework.stereotype.Service;

@Service
public class Wolf implements WildAnimal {
	public String sound() {
		return "Howl";
	}
}
